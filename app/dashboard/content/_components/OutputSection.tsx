"use client";

import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef: any = useRef(null);

  // ✅ Safely update editor when AI output changes
  useEffect(() => {
    if (!editorRef.current) return;

    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput || "");
  }, [aiOutput]);

  // ✅ Copy content
  const handleCopy = () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getInstance().getMarkdown();
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center justify-between p-5">
        <h2 className="font-bold text-lg">Your Result</h2>

        <Button
          onClick={handleCopy}
          className="flex gap-2 bg-blue-700 items-center"
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;