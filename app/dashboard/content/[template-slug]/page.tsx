"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/Data/Templates";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useUser } from "@clerk/nextjs";
import { saveAiOutput } from "@/actions/saveAiOutput";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const params = useParams();
const { user } = useUser();
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  // ✅ FINAL AI FUNCTION (Groq API route)
 const GenerateAIContent = async (formData: any) => {
  try {
    setLoading(true);

    if (!selectedTemplate) return;

    const FinalAIPrompt =
      JSON.stringify(formData) + ", " + selectedTemplate.aiPrompt;

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: FinalAIPrompt }),
    });

    const data = await res.json();

    setAiOutput(data.result);

    // ✅ SAVE TO DATABASE
    await saveAiOutput({
      formData: formData,
      slug: selectedTemplate.slug,
      aiResponse: data.result,
      userId: user?.primaryEmailAddress?.emailAddress || "unknown",
    });

  } catch (error) {
    console.log("AI Error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button className="bg-destructive">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;