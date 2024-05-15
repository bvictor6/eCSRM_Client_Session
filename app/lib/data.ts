import { formatCurrency } from './utils';
 
  

  const contracts = [
    {
      supplier_id: '1',
      amount: formatCurrency(1233),
      status: 'pending',
      date: '2022-12-06',
      name: 'BME Pharmaceuticals',
      email: 'info@bme.com'
    },
    {
      supplier_id: '1',
      amount: formatCurrency(20348),
      status: 'pending',
      date: '2022-11-14',
      name: 'BME Pharmaceuticals',
      email: 'info@bme.com'
    },
    {
      supplier_id: '1',
      amount: formatCurrency(3040),
      status: 'paid',
      date: '2022-10-29',
      name: 'BME Pharmaceuticals',
      email: 'info@bme.com'
    },
    {
      supplier_id: '1',
      amount: formatCurrency(4480),
      status: 'paid',
      date: '2023-09-10',
      name: 'BME Pharmaceuticals',
      email: 'info@bme.com'
    },
    {
      supplier_id: '1',
      amount: formatCurrency(1233),
      status: 'pending',
      date: '2023-08-05',
      name: 'BME Pharmaceuticals',
      email: 'info@bme.com'
    },
    
  ];

  const orders = [
    { month: 'Jan', orders: 2000 },
    { month: 'Feb', orders: 1800 },
    { month: 'Mar', orders: 2200 },
    { month: 'Apr', orders: 2500 },
    { month: 'May', orders: 2300 },
    { month: 'Jun', orders: 3200 },
    { month: 'Jul', orders: 3500 },
    { month: 'Aug', orders: 3700 },
    { month: 'Sep', orders: 2500 },
    { month: 'Oct', orders: 2800 },
    { month: 'Nov', orders: 3000 },
    { month: 'Dec', orders: 4800 },
  ];

  const suppliers = [
    {id:'1', name: 'BME Pharmaceuticals'},
    {id:'2', name: 'Chemo ABC'},
    {id:'3', name: 'New Pharmaceuticals'},
    {id:'4', name: 'XYZ Pharmaceuticals'},
    {id:'5', name: 'B&J Pharmaceuticals'},
    {id:'6', name: 'B Health Care'},
    {id:'7', name: 'XZ Tech'},
  ];

  const products = [
    {id:'1', name: 'Mosquito Nets'},
    {id:'2', name: 'Polio Vaccines'},
    {id:'3', name: 'Panadol Extra'},
    {id:'4', name: '500ml Syringes'},
    {id:'5', name: 'Covid Vaccines(Astrzeneca)'},
    {id:'6', name: 'Malaria Tablets'},
    {id:'7', name: 'Cipladon 1000'},
  ];

  const contractTypes = [
    {id: '1', name: 'Supply'},
    {id: '2', name: 'Service'},
    {id: '3', name: 'Work'},
  ];

  const currencies = [
    {id: '1', name: 'USd'},
    {id: '2', name: 'Euro'},
    {id: '3', name: 'Yen'},
  ];

  export async function fetchCurrencies(){
    return currencies;
  }

  export async function fetchContractTypes(){
      return contractTypes;
  }

  export async function fetchProducts(){
    return products;
  }
  export async function fetchSuppliers(){
    return suppliers;
  }
  
export async function fetchLatestContracts(){    
    return contracts;
}

export async function fetchCardData()
{

    const numberOfContracts = (101);
    const numberOfSuppliers = Number(34);
    const totalActiveContracts = Number(70);
    const totalPendingContracts = Number(31);

    return {
      numberOfSuppliers,
      numberOfContracts,
      totalActiveContracts,
      totalPendingContracts,
    };

    
}

