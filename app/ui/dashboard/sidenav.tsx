import NavLinks from "./nav-links";
import Link from "next/link";
import BCMSLogo from "@/app/bcms-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { lusitana, roboto_serif } from "../fonts";
import { signOut } from "@/auth";

export default function SideNav(){
    return (
        <div className={`${roboto_serif} flex h-full flex-col px-0 py-0 md:px-0`}>
            <Link
                className="mb-0 flex h-20 items-end justify-start bg-blue-600 p-4 md:h-20"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <BCMSLogo />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1 bg-blue-600 border-t border-black-700">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-none bg-blue-600 md:block border-b border-black-700"></div>
                {<form action={async () => {
                    'use server';
                    await signOut();
                }}>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-blue-600 text-white p-3 text-sm font-medium hover:bg-black-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                </button>
            </form>}
            </div>
        </div>
    );

};