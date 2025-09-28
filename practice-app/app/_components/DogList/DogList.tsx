'use client';
import React, { useState, useEffect } from "react";
import { DogFetcher } from "./DogFetcher";
import Image from "next/image";


export default function DogList({ breed }: { breed: string }) {
  const [dogs, setDogs] = useState<string[]>([]);
    
  useEffect(() => {
    async function fetchDogs() {
      try {
        const res:string[] = await DogFetcher(breed);
        // any型が返ってくるのにstringに入れてるのはダメなので明示的に宣言をする TSのリンター入れる
        // APIで返ってくる値は判断不能なのでanyになる
        setDogs(res);
      } catch (error) {
        console.error(error);
        setDogs([]);
      }
    }
    fetchDogs();
  }, [breed]);

  return (
    <ul className="mt-4 grid grid-cols-2 gap-4">
      {dogs.map((dog: string, index: number) => (
        <li key={index}>
          <Image src={dog} alt="犬の写真" />
        </li>
      ))}
    </ul>
  );
}