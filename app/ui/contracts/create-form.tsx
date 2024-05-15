'use client'
import { SupplierField, ProductField, ContractTypeField, CurrencyField } from '@/app/lib/definitions';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import {
  CheckIcon,BriefcaseIcon,
  ClockIcon,TagIcon,
  CurrencyDollarIcon,DocumentIcon,
  UserCircleIcon,ShoppingCartIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  CalendarIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createContract } from '@/app/lib/actions';

export default function Form(
            { suppliers, products, contractTypes, currencies }: 
            { 
              suppliers: SupplierField[], 
              products: ProductField[], 
              contractTypes: ContractTypeField[] ,
              currencies: CurrencyField[]
            }) 
{
  const initialState = { message: null, errors: {} };
  return (
    <form action={createContract}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/** Type,contract and tender no row */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              {/* Contract Type Name */}
              <div className="mb-4">
                <label htmlFor="supplier" className="mb-2 block text-sm font-medium">
                  Choose Contract Type
                </label>
                <div className="relative">
                  <select
                    id="contract-type"
                    name="supplierTypeId"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue=""
                    aria-describedby='supplier-error'
                  >
                    <option value="" disabled>
                      Select contract type
                    </option>
                    {contractTypes.map((contractType) => (
                      <option key={contractType.id} value={contractType.id}>
                        {contractType.name}
                      </option>
                    ))}
                  </select>
                  <BriefcaseIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>          
              </div>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              {/* Contract No */}
              <div className="mb-4">
                <label htmlFor="contractNo" className="mb-2 block text-sm font-medium">
                  Contract No.
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="contractNo"
                      name="contractNo"
                      type="text"
                      placeholder="Enter contract number"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      aria-describedby='contract-no-error'
                    />
                    <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              {/* Tender No */}
              <div className="mb-4">
                <label htmlFor="tenderNo" className="mb-2 block text-sm font-medium">
                  Tender No.
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="tenderNo"
                      name="tenderNo"
                      type="text"
                      placeholder="Enter tender number"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      aria-describedby='contract-no-error'
                    />
                    <DocumentDuplicateIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/** Supplier,Products row */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
              {/* Supplier Name */}
              <div className="mb-4">
                <label htmlFor="supplier" className="mb-2 block text-sm font-medium">
                  Choose Supplier
                </label>
                <div className="relative">
                  <select
                    id="supplier"
                    name="supplierId"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue=""
                    aria-describedby='supplier-error'
                  >
                    <option value="" disabled>
                      Select a supplier
                    </option>
                    {suppliers.map((supplier) => (
                      <option key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </option>
                    ))}
                  </select>
                  <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>          
              </div>
          </div>
          <div className="w-full md:w-1/2 px-1">
              {/* Product Name */}
              <div className="mb-4">
                <label htmlFor="suppliproducter" className="mb-2 block text-sm font-medium">
                  Choose Product
                </label>
                <div className="relative">
                  <select
                    id="product"
                    name="productId"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue=""
                    aria-describedby='product-error'
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <ShoppingCartIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>          
              </div>
          </div>
        </div>
        {/** Date Signed,default period,termination notice row **/}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              {/* Contract Date */}
              <div className="mb-4">
                <label htmlFor="dateSigned" className="mb-2 block text-sm font-medium">
                  Date Signed
                </label>
                <div className="relative">
                    <input
                        id="dateSigned"
                        name="dateSigned"
                        type="date"
                        placeholder="Date Signed"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby='date-signed-error'
                    />
                  <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>          
              </div>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              {/* Default period */}
              <div className="mb-4">
                <label htmlFor="contractNo" className="mb-2 block text-sm font-medium">
                  Default Period (Days)
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="defaultPeriod"
                      name="defaultPeriod"
                      type="number"
                      placeholder="Enter contract default period in days"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      aria-describedby='defaultPeriod-error'
                    />
                    <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              {/* Termination period */}
              <div className="mb-4">
                <label htmlFor="terminationPeriod" className="mb-2 block text-sm font-medium">
                  Termination notice period (Days)
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="terminationPeriod"
                      name="terminationPeriod"
                      type="number"
                      placeholder="Enter termination period notice in days"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      aria-describedby='terminationPeriod-error'
                    />
                    <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/* Total Amount row*/}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
            {/* Order amount */}
            <div className="mb-4">
              <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                Total amount
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    placeholder="Enter total contract amount"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby='amount-error'
                  />
                  <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
            {/* Currency */}
            <div className="mb-4">
              <label htmlFor="currency" className="mb-2 block text-sm font-medium">
                Currency
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <select
                      id="currency"
                      name="currencyId"
                      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      defaultValue=""
                      aria-describedby='supplier-error'
                    >
                      <option value="" disabled>
                        Select Currency
                      </option>
                      {currencies.map((currency) => (
                        <option key={currency.id} value={currency.id}>
                          {currency.name}
                        </option>
                      ))}
                    </select>
                    <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
            {/*  Force-Majeure */}
            <div className="mb-4">
              <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Force-Majeure Period (Days)
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="forceMajeure"
                    name="forceMajeure"
                    type="number"
                    step="1"
                    placeholder="Number of days for  Force-Majeure "
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby='forceMajeure-error'
                  />
                  <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
                
        {/* Invoice Status */}
        <fieldset className='mb-6'>
          <legend className="mb-2 block text-sm font-medium">
            Payment Status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {/* Tender Descrioption row */}
        {/*<div className="flex flex-wrap">*/}
          {/*  Tender Description */}
          <div className="mb-4 w-fu">
            <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Tender Description/Other Information
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
              <textarea 
                id='description'
                name='description'
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='description-error'
                placeholder="Tender description and any special conditions "
                >

              </textarea>
                {/*<textarea
                  id="forceMajeure"
                  name="forceMajeure"
                  
                  placeholder="Number of days for  Force-Majeure "
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby='forceMajeure-error'
                />*/}
                <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        {/*</div>*/}
        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-black-600 px-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          Cancel
        </Link>
        <Button type="submit">Create Contract</Button>
      </div>
    </form>
  );
}
