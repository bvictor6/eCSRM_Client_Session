import Form from '@/app/ui/contracts/create-form';
import Breadcrumbs from '@/app/ui/contracts/breadcrumbs';
import { fetchSuppliers, fetchProducts, fetchContractTypes, fetchCurrencies } from '@/app/lib/data';
import { roboto_serif,lusitana } from '@/app/ui/fonts';
import { DocumentIcon, ShoppingCartIcon, CalendarDaysIcon, DocumentArrowDownIcon, DocumentDuplicateIcon, FolderIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ContractInformation from '@/app/ui/contracts/contract-information';
 
export default async function Page({params}:{params: {id: string}}) {
  const suppliers = await fetchSuppliers();
  const products  = await fetchProducts();
  const contractTypes = await fetchContractTypes();
  const currencies = await fetchCurrencies();

  const id = params.id;
  return (
    <main>      
      <div className="flex w-full items-center justify-between">
        <Breadcrumbs
            breadcrumbs={[
            { label: 'Contracts', href: '/home/contracts' },
            {
                label: 'View Contract',
                href: `/home/contracts/view/${id}`,
                active: true,
            },
            ]}
        />
        <ul className={`${lusitana.className} text-sm flex justify-between`}>
            <li className="mr-1">
                <div className={`${lusitana.className} antialiased border-t border-white`}>
                    <Link href={"/#"} className={'flex h-[48px] grow items-center rounded justify-center gap-2 bg-slate-700 p-3 text-sm text-white font-medium hover:bg-blue-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'}>
                        <FolderIcon className='h-5 w-5' />
                        <h3 className={`${lusitana.className} antialiased ml-2 text-sm text-center`}>Contract Documents</h3>
                    </Link>
                </div>
            </li>
            <li className="mr-1">
                <div className={`${lusitana.className} antialiased border-t border-white`}>
                    <Link href={"/#"} className={'flex h-[48px] grow items-center rounded justify-center gap-2 bg-slate-700 p-3 text-sm text-white font-medium hover:bg-blue-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'}>
                        <ShoppingCartIcon className='h-5 w-5' />
                        <h3 className={`${lusitana.className} antialiased ml-2 text-sm text-center`}>Products/Items</h3>
                    </Link>
                </div>
            </li>
            <li className="mr-1">
                <div className={`${lusitana.className} antialiased border-t border-white`}>
                    <Link href={"/#"} className={'flex h-[48px] grow items-center rounded justify-center gap-2 bg-slate-700 p-3 text-sm text-white font-medium hover:bg-blue-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'}>
                        <CalendarDaysIcon className='h-5 w-5' />
                        <h3 className={`${lusitana.className} antialiased ml-2 text-sm text-center`}>Delivery Schedule</h3>
                    </Link>
                </div>
            </li>
        </ul>
      </div>
      {/** Display Contract Details **/}
      <ContractInformation />

    </main>
  );
}