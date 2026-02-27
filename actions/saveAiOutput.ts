import { db } from "@/lib/db";
import { AIOutput } from "@/lib/schema";
import moment from "moment"

interface SaveProps {
  formData: any;
  slug: string;
  aiResponse: string;
  userId: string;
}

export async function saveAiOutput({
  formData,
  slug,
  aiResponse,
  userId,
}: SaveProps) {
  await db.insert(AIOutput).values({
    formData: JSON.stringify(formData),
    templateSlug: slug,
    aiResponse: aiResponse,
    createdBy: userId,
    createdAt: moment().format("DD/MM/YYYY"),
  });
}