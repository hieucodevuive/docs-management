"use client"
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Navbar from "./Navbar";
import TemplateGallery from "./TemplateGallery";
import DocumentTable from "./DocumentTable";

const Home = () => {
  const {
    results,
    status,
    loadMore
  } = usePaginatedQuery(api.documents.get, {}, {initialNumItems: 5})

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4 overflow-hidden">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentTable 
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}
 
export default Home;