import { Card } from '@/app/ui/dashboard/cards';
import { fetchCardData } from '../lib/data';
import { roboto_serif } from '@/app/ui/fonts';
import LatestContracts from '../ui/dashboard/latest-contracts';
import DashboardLineChart from '../ui/dashboard/dashboard-line-chart';
 
export default async function Page() {

    const {
        numberOfContracts,
        numberOfSuppliers,
        totalPendingContracts,
        totalActiveContracts,
      } = await fetchCardData();

      const jsonData = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 35 }
      ];
      
     
  return (
    <main>
      <h1 className={`${roboto_serif.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Expiring Contracts" value={totalActiveContracts} type="active" /> 
        <Card title="Delayed Deliveries" value={totalPendingContracts} type="pending" /> 
        <Card title="Total Contracts" value={numberOfContracts} type="contracts" /> 
        <Card
          title="Total Suppliers"
          value={numberOfSuppliers}
          type="suppliers"
        /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <DashboardLineChart  /> 
        <LatestContracts/>         
      </div>
    </main>
  );
}
