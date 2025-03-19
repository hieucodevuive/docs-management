import Image from "next/image";
import Link from "next/link";
import SearchInput from "./Search-input";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href={"/"}>
          <Image src={"/images/app-logo.png"} alt="logo" width={108} height={75}/>
        </Link>
        <h3 className="text-xl">Docs</h3>
      </div>
      <SearchInput />
      <div className="flex gap-3 items-center pl-6">
        <OrganizationSwitcher 
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectPersonalUrl=""
          afterSelectOrganizationUrl="/"
        />
        <UserButton />
      </div>
    </nav>
  );
}
 
export default Navbar;