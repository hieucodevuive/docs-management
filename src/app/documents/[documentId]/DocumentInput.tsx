import { BsCloudCheck, BsCloudSlash } from 'react-icons/bs'
import { Id } from '../../../../convex/_generated/dataModel';
import { useRef, useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useDebounce } from '@/hooks/use-debounce';
import { toast } from "sonner"
import { useStatus } from '@liveblocks/react';
import { LoaderIcon } from 'lucide-react';

interface DocumentInputProps {
  title: string;
  id: Id<"documents">
}

const DocumentInput = ({title, id}: DocumentInputProps) => {
  const status = useStatus()
  const [value, setValue] = useState(title)
  const [isPending, setIsPending] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const mutate = useMutation(api.documents.updateById)
  const debouncedUpdate = useDebounce((newValue: string) => {
    if(newValue === title) return
    setIsPending(true)
    mutate({id, title: newValue})
    .catch(() => toast.error("Some thing went wrong"))
    .finally(() => {
      setIsPending(false)
      setIsEditing(false)
    })
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    debouncedUpdate(newValue)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value === title) return
    setIsPending(true)
    mutate({id, title: value})
    .catch(() => toast.error("Some thing went wrong"))
    .finally(() => {
      setIsPending(false)
      setIsEditing(false)
    })
  }

  const showLoader = isPending || status === "connecting" || status === "reconnecting"
  const showError = status === "disconnected"

  return (
    <div className="flex items-center gap-2">
      {
        isEditing ? (
          <form onSubmit={handleSubmit} className='relative w-fit max-w-[50ch]'>
            <span className='invisible whitespace-pre px-1.5 text-lg'>
              {value || ""}
            </span>
            <input 
              type="text"
              ref={inputRef}
              value={value}
              onBlur={() => {
                setIsEditing(false)
              }}
              onChange={onChange}
              className='absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate'
            />
          </form>
        ) : (
          <span className="text-lg px-1.5 cursor-pointer truncate"
            onClick={() => {
              setIsEditing(true)
              setTimeout(() => {
                inputRef.current?.focus()
              }, 0)
            }}
          >
            {title}
          </span>
        )
      }
      {
        !showError && !showLoader && <BsCloudCheck />
      }
      {
        showLoader && <LoaderIcon className='size-4 animate-spin text-muted-foreground'/>
      }
      {
        showError && <BsCloudSlash className='size-4'/>
      }
    </div>
  );
}
 
export default DocumentInput;