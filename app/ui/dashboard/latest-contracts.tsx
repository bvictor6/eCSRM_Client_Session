import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestContracts } from '@/app/lib/data';
import Link from 'next/link';


export default async function LatestContracts() {
  const latestInvoices = await fetchLatestContracts();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2>
        Latest Contracts
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-">

         <div className="bg-white px-6">
          {latestInvoices.map((contract, i) => {
            return (
              <div
                key={contract.supplier_id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <Link href={"/#"} title='Click for more details...'>
                    <div className="flex items-center">                        
                        {/*<UserCircleIcon 
                            className="h-12 w-12 flex-shrink-0 text-blue-600 group-hover:text-gray-500"
                            aria-hidden="true" />*/}
                        
                        <div className="min-w-0">
                          <p className="truncate text-sm text-wrap from-neutral-50 md:text-ellipsis">
                              {contract.name}
                          </p>
                          <p className="hidden text-sm text-gray-500 sm:block">
                              {contract.date}
                          </p>
                        </div>
                    </div>
                </Link>
                
                <p
                  className={`${lusitana.className} truncate text-sm font-extralight md:text-base`}
                >
                  {contract.amount}
                </p>
              </div>
            );
          })}
        </div> 
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
