'use client'
import useSWR from 'swr'

import { useState, useEffect } from 'react'
import { Photo } from '@/app/lib/definitions'
 
[/** using useEffect**/]
export function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  return (   
    <>
        {data?.map((photo) => {
            return (
            <p  key={photo.id}>
                <span>{photo.url}</span>
            </p>
            );
        })}
    </>
  )
}

export function SendData() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };

    fetch('https://jsonplaceholder.typicode.com/photos', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          //this.setState({ postId: data.id })
      })
      .catch(error => {
          //this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
 
  
}

export function Photos()
{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  fetch('https://reqres.in/invalid-url', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          //this.setState({ postId: data.id })
      })
      .catch(error => {
          //this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
}