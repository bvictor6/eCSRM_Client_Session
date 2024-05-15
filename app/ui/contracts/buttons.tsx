import { PencilIcon, PlusIcon, TrashIcon, ViewfinderCircleIcon, EyeIcon, EyeDropperIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteContract } from '@/app/lib/actions';

export function CreateContract() {
  return (
    <Link
      href="/home/contracts/create"
      className="flex h-10 items-center rounded-lg bg-black-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Contract</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateContract({ id }: { id: string }) {
  return (
    <Link
      href={`/home/contracts/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
      title='Edit Contract...'
    >
      <PencilIcon className="w-5 text-blue-600" />
    </Link>
  );
}

export function DeleteContract({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteContract.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-red-600" />
      </button>
    </form>
  );
}

export function ViewContract({ id }: { id: string}){
  return(
    <Link
      href={`/home/contracts/${id}/view`}
      className="rounded-md border p-2 hover:bg-gray-100 "
      title='View Details...'
    >
      <EyeIcon className="w-5 text-green-600" />
  </Link>
  );
}
