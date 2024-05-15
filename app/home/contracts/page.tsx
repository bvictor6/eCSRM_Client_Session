import Pagination from '@/app/ui/contracts/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/contracts/table';
import { CreateContract } from '@/app/ui/contracts/buttons';
import { lusitana, roboto_serif } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { ContractsTableSkeleton } from '@/app/ui/skeletons';
import { Profile } from '@/app/ui/contracts/test';
 
export default async function Page({searchParams}:{
  searchParams?:{
    'query': string;
    'page': string;
  };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
            <h1 className={`${roboto_serif.className} antialiased text-2xl`}>Contracts</h1>
            <ul className="flex justify-between">
                <li className="mr-3">
                    <a className="inline-block border border-blue-600 rounded py-2 px-4 bg-blue-600 hover:bg-black-600 text-white" href="#">Active Contracts</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block border border-gray-50 rounded hover:border-black-600 text-blue-600 hover:bg-black-600 hover:text-white py-2 px-4" href="#">Pending Contracts</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Approve Contracts</a>
                </li>
            </ul>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search contracts..." />
        <CreateContract />
      </div>
      <Suspense key={query + currentPage} fallback={<ContractsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> 
      <div className="mt-5 flex w-full justify-center">
         <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
}