import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,ArrowRightIcon
  } from '@heroicons/react/24/outline';
import { lusitana, roboto_serif } from "../fonts";
import Link from 'next/link';

const iconMap = {
    active: BanknotesIcon,
    suppliers: UserGroupIcon,
    pending: ClockIcon,
    contracts: InboxIcon,
  };

  export function Card(
                        {  title,value,type, }: 
                        {
                          title: string;
                          value: number | string;
                          type: 'active' | 'pending' | 'contracts' | 'suppliers';
                        }
                      )  
                      {
                        const Icon = iconMap[type];

                        return (
                          <div className="bg-gray-200 p-0 shadow-slate-50">
                            <div className="flex p-4 text-center">
                              {Icon ? <Icon className="h-5 w-5 text-blue-600" /> : null}
                              <h2 className={`${lusitana.className} antialiased ml-2 text-base font-bold text-black-600 text-center`}>{title}</h2>
                            </div>
                            <p
                              className={`${roboto_serif.className}
                                truncate bg-white text-black-600 px-3 py-3 text-center text-2xl`}
                            >
                              {value}
                            </p>
                            <Link href={"/#"}>
                                <div className={`${lusitana.className} antialiased py-2 border-t border-black-600 bg-black-600 text-white text-center flex p-4`}>
                                  <ArrowRightIcon className='h-5 w-5' />
                                  <h3 className={`${lusitana.className} antialiased ml-2 text-sm font-normal text-black-white text-center`}>More Details...</h3>
                                </div>
                            </Link>
                            
                          </div>
                        );
                      }