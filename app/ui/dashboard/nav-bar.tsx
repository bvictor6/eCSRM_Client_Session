import { ShoppingBagIcon, 
    MagnifyingGlassIcon, 
    BellAlertIcon, 
    UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana,roboto_serif } from "../fonts";

export default function NavBar(){
    return(
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-black-700">
                <div className="flex h-16 items-center">
                    
                    <div className="ml-4 flex lg:ml-0 text-blue-600">
                        <span className='${roboto_serif.className} antialiased'>Welcome, V. Junior</span>
                    </div>

                    <div className="ml-auto flex items-center">                        
                        {/* Alert */}
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                            <Link href="#" className="group -m-2 flex items-center p-2">
                                <BellAlertIcon
                                    className="h-6 w-6 flex-shrink-0 text-blue-600 group-hover:text-white"
                                    aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-blue-600 group-hover:text-white">0</span>
                                <span className="sr-only">View Alerts</span>
                            </Link>
                            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                            {/* User Account */}
                        
                            <Link href="#" className="group -m-2 flex items-center p-2">
                                <UserCircleIcon 
                                    className="h-6 w-6 flex-shrink-0 text-blue-600 group-hover:text-white"
                                    aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-red-600 group-hover:text-white"></span>
                                <span className="sr-only">View Profile</span>
                            </Link>
                        </div>
                    </div>
              </div>
            </div>
        </nav>
    );
}