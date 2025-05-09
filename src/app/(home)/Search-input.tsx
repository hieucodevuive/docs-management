/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useSearchParam } from "@/hooks/use-search-param";

const SearchInput = () => {
  const [value, setValue] = useState("")
  const [search, setSearch] = useSearchParam()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch(value)
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-[720px] w-full"
      >
        <Input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Search"
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none bg-neutral-200 focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3), 0_1px_3px_1px_rgba(65,69,73,.15)] rounded-full h-[48px] focus-visible:ring-0"
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>
        {
          value && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
              onClick={() => {
                setValue("")
                setSearch("")
                inputRef.current?.focus()
              }}
            >
              <XIcon />
            </Button>
          )
        }
      </form>
    </div>
  );
}
 
export default SearchInput;