import Form from '@/app/ui/contracts/create-form';
import Breadcrumbs from '@/app/ui/contracts/breadcrumbs';
import { fetchSuppliers, fetchProducts, fetchContractTypes, fetchCurrencies } from '@/app/lib/data';
 
export default async function Page() {
  const suppliers = await fetchSuppliers();
  const products  = await fetchProducts();
  const contractTypes = await fetchContractTypes();
  const currencies = await fetchCurrencies();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Contracts', href: '/home/contracts' },
          {
            label: 'Create Contract',
            href: '/home/contracts/create',
            active: true,
          },
        ]}
      />
      <Form suppliers={suppliers} products={products} contractTypes={contractTypes} currencies={currencies} />
    </main>
  );
}