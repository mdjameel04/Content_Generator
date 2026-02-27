import React from "react";
import { db } from "@/lib/db";
import { AIOutput } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

const HistoryPage = async () => {

  const user = await currentUser();

  if (!user) {
    return <div className="p-10">Please login to see history</div>;
  }

  const historyList = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress?.emailAddress!));

  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-6">
        History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg">

          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Template</th>
              <th className="p-3 border">AI Response</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>

          <tbody>
            {historyList.map((item:any)=>(
              <tr key={item.id} className="border-t">

                <td className="p-3 border">
                  {item.templateSlug}
                </td>

                <td className="p-3 border">
                  <p className="line-clamp-3">
                    {item.aiResponse}
                  </p>
                </td>

                <td className="p-3 border">
                  {item.createdAt}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {historyList.length === 0 && (
        <p className="mt-5 text-gray-500">
          No history found.
        </p>
      )}

       


    </div>
  );
};

export default HistoryPage; 