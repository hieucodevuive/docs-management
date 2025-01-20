"use client"
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon, 
  ChevronDownIcon, 
  ItalicIcon, 
  ListTodoIcon, 
  LucideIcon, 
  MessageSquarePlusIcon, 
  PrinterIcon, 
  Redo2Icon, 
  RemoveFormattingIcon, 
  SpellCheckIcon, 
  UnderlineIcon, 
  Undo2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const FontFamilyButton = () => {
  const { editor } = useEditorStore()

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Verdana", value: "Verdana" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Georgia", value: "Georgia" },
    { label: "Courier New", value: "Courier New" },
    { label: "Trebuchet MS", value: "Trebuchet MS" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Impact", value: "Impact" },
    { label: "Lucida Sans", value: "Lucida Sans" },
    { label: "Palatino Linotype", value: "Palatino Linotype" },
    { label: "Tahoma", value: "Tahoma" },
    { label: "Gill Sans", value: "Gill Sans" },
    { label: "Garamond", value: "Garamond" },
    { label: "Franklin Gothic Medium", value: "Franklin Gothic Medium" },
    { label: "Bookman", value: "Bookman" },
    { label: "Arial Black", value: "Arial Black" },
    { label: "Century Gothic", value: "Century Gothic" },
    { label: "Brush Script MT", value: "Brush Script MT" },
    { label: "Candara", value: "Candara" },
    { label: "Rockwell", value: "Rockwell" },
    { label: "Futura", value: "Futura" },
    { label: "Optima", value: "Optima" },
    { label: "Calibri", value: "Calibri" },
    { label: "Cambria", value: "Cambria" },
    { label: "Baskerville", value: "Baskerville" },
    { label: "Didot", value: "Didot" },
    { label: "Perpetua", value: "Perpetua" },
    { label: "Lucida Bright", value: "Lucida Bright" }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm",
          )}
        >
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0"/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1 h-[300px] overflow-y-auto">
        {
          fonts.map(({label, value}) => (
            <button
              key={value}
              className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
              )}
              style={{ fontFamily: value }}
              onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            >
              <span className="text-sm">{label}</span>
            </button>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon
}: ToolbarButtonProps) => {

  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4"/>
    </button>
  )
}

const Toolbar = () => {
  const { editor } = useEditorStore()

  const sections: {
    label: string;
    icon: LucideIcon,
    onClick: () => void,
    isActive?: boolean
  }[][] = [
    [
      {
        label: "undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run()
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run()
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print()
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck")
          editor?.view.dom.setAttribute("spellcheck", current === "false"? "true": "false")
        }
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run()
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run()
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run()
      }
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        isActive: false,
        onClick: () => console.log("todo: comment")
      },
      {
        label: "List todo",
        icon: ListTodoIcon,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run()
      },
      {
        label: "Remove formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run()
      },
    ]
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {
        sections[0].map((item) => (
          <ToolbarButton key={item.label} {...item}/>
        ))
      }
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
        <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {/* font heading */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {/* font size */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {
        sections[1].map((item) => (
          <ToolbarButton key={item.label} {...item}/>
        ))
      }
      {/* text color */}
      {/* hightlight color */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {/* link */}
      {/* image */}
      {/* aligh */}
      {/* line height */}
      {/* list */}
      {
        sections[2].map((item) => (
          <ToolbarButton key={item.label} {...item}/>
        ))
      }
    </div>
  );
}
 
export default Toolbar;