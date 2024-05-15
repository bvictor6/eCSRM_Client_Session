import Image from 'next/image';
import { UpdateContract, DeleteContract, ViewContract } from '@/app/ui/contracts/buttons';
import ContractStatus from './status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchLatestContracts } from '@/app/lib/data';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/outline';

export default async function ContractsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const contracts = await fetchLatestContracts();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/** Mobile screen display**/}
          <div className="md:hidden">
            {contracts?.map((contract) => (
              <div
                key={contract.supplier_id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/*</div>{<UserCircleIcon className='h-1 w-1' />*/}
                      <p>{contract.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{contract.email}</p>
                  </div>
                  <ContractStatus status={contract.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {(contract.amount)}
                    </p>
                    <p>{formatDateToLocal(contract.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateContract id={contract.supplier_id} />
                    <DeleteContract id={contract.supplier_id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/** Large screen display **/}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Serial
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Contract Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contract Desc
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Supplier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Categ
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Execution
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contract Midter
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Termination
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Dura
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Contract
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {contracts?.map((contract) => (
                <tr
                  key={contract.supplier_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {contract.supplier_id}
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    <div className="flex items-center gap-3">
                      {/*<UserCircleIcon className={'w-6 h-6'} />*/}
                      <p>{contract.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/**Tender */}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(contract.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/**supplier */}
                  </td>                  
                  <td className="whitespace-nowrap px-3 py-3">
                    {/**Categ */}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ContractStatus status={contract.status} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/**Termination */}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/**Contract */}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {contract.amount}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-1 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewContract id={contract.supplier_id} />
                      <UpdateContract id={contract.supplier_id} />
                      <DeleteContract id={contract.supplier_id} />                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
