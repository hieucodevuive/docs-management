import { Editor } from "./Editor";
import Navbar from "./Navbar";
import Toolbar from "./Toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string}>
}

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFC] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[137px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
}
 
export default DocumentIdPage;

