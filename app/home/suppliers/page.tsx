'use client'
import type { Photo } from "@/app/lib/definitions";
import useSwr from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
// Fetch data from an external API using wsr
export default function Index() {
  const { data, error, isLoading } = useSwr<Photo[]>("https://jsonplaceholder.typicode.com/photos", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
            {user.url ?? `User ${user.thumbnailUrl}`}
        </li>
      ))}
    </ul>
  );
}
