'use server';

import {z} from 'zod';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createContract(formData: FormData) {
    const id = 1;
    try{
        //send data to db after validating

    }catch(error){
        console.log('Error creating contract!');
    }
    revalidatePath('/home/contracts');
    redirect(`/home/contracts/${id}/view`);
}

export async function deleteContract(id:string){}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) 
  {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) 
      {
        switch (error.type) 
        {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

  