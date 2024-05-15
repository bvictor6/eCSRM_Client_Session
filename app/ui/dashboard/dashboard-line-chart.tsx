'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { BellAlertIcon,ArrowDownRightIcon, CalendarIcon,EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Line, Bar } from 'react-chartjs-2';
import { roboto_serif ,lusitana} from '../fonts';
import Link from 'next/link';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Deliveries',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Late Deliveries',
      data: [320,760,480,160,570,800,300],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Deliveries',
      data:  [120,100,580,160,600,400,460],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function DashboardLineChart() {
  return (
  <div className="flex w-full flex-col md:col-span-4">
    <div className='h-auto py-1 px-1'>
        <h2>
          Monthly Deliveries
        </h2>
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-">
          <Line options={options} data={data} />
        </div>
    </div>

      <div className='h-auto py-1 px-1'>
          <div className="bg-gray-200 p-0 mt-1 shadow-slate-50">
            <div className="flex p-4 text-center">
              <BellAlertIcon className="h-5 w-5 text-blue-600" /> 
              <h3 className={`${lusitana.className} antialiased ml-2 text-base font-bold text-black-600 text-center`}>My Alerts</h3>
            </div>  
            {/** Links **/}          
            <div className={`${lusitana.className} antialiased border-t border-white`}>
                <Link href={"/#"} className={'flex h-[48px] grow items-center justify-center gap-2 bg-black-600 p-3 text-sm text-white font-medium hover:bg-blue-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'}>
                  <EnvelopeIcon className='h-5 w-5' />
                  <h3 className={`${lusitana.className} antialiased ml-2 text-sm text-center`}>0 New Notifications</h3>
                </Link>
            </div>

            <div className={`${lusitana.className} antialiased border-t border-white`}>
                <Link href={"/#"} className={'flex h-[48px] grow items-center justify-center gap-2 bg-black-600 p-3 text-sm text-white font-medium hover:bg-blue-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'}>
                  <CalendarIcon className='h-5 w-5' />
                  <h3 className={`${lusitana.className} antialiased ml-2 text-sm text-center`}>0 Deliveries Today</h3>
                </Link>
            </div>
            <div className={`${lusitana.className} antialiased border-t border-white`}>
                <Link href={"/#"} className={'flex h-[48px] grow items-center justify-center gap-2 bg-black-600 p-3 text-sm text-white font-medium hover:bg-blue-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'}>
                  <CheckCircleIcon className='h-5 w-5' />
                  <h3 className={`${lusitana.className} antialiased ml-2 text-sm text-center`}>0 Pending Approvals</h3>
                </Link>
            </div>  
              
          </div>
      </div>
  </div>
  
  );
}
