import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Roboto_Serif } from 'next/font/google';

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400','700']
});

export const roboto_serif = Roboto_Serif(
    {
        weight: ['400', '700'],
        subsets: ['latin'],
        style: ['normal'],
    }
);