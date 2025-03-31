"use client"
import { Preloaded, usePreloadedQuery } from "convex/react";
import { Editor } from "./Editor";
import Navbar from "./Navbar";
import { Room } from "./Room";
import Toolbar from "./Toolbar";
import { api } from "../../../../convex/_generated/api";
import { Doc } from "../../../../convex/_generated/dataModel";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>
}

const Document = ({preloadedDocument}: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument)
  
  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFC] print:hidden">
          <Navbar data={document as Doc<"documents">}/>
          <Toolbar />
        </div>
        <div className="pt-[137px] print:pt-0">
            <Editor />
        </div>
      </div>
    </Room>
  );
}
 
export default Document;

