"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { templates } from "@/constants/templates";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const TemplateGallery = () => {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)
  const create = useMutation(api.documents.create)

  const onTemplateClick = (title: string, initialContent: string) => {
    if (isCreating) return
    setIsCreating(true)
    create({title, initialContent})
      .then((documentId) => {
        router.push(`/documents/${documentId}`)
        toast.success("Created document")
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsCreating(false)
      })
  }

  return (
    <div className="bg-[#F1F2F3]">
      <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
        <h3 className="text-base font-medium">Start a new document</h3>
        <Carousel>
          <CarouselContent className="-ml-4">
            {
              templates.map((template) => (
                <CarouselItem 
                  key={template?.id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis=1/6 2xl:basis-[14.285714%] pl-4"
                >
                  <div className={cn(
                    "aspect-[3/4] flex flex-col gap-y-2.5",
                    isCreating && "pointer-events-none opacity-50"
                  )}>
                    <button
                      disabled={isCreating}
                      onClick={() => onTemplateClick(template?.lable, "")}
                      style={{
                        backgroundImage: `url(${template?.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                      className="size-full hover:border-blue-500 rounded-e-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                    />
                    <p className="text-sm font-medium truncate">
                      {template.lable}
                    </p>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
 
export default TemplateGallery;