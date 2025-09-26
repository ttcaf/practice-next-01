'use client';
import React, { useState, useEffect } from "react";
import { DogFetcher } from "./DogFetcher";

export default function DogList({ breed }: { breed: string }) {
  const [dogs, setDogs] = useState<string[]>([]);
    
  useEffect(() => {
    async function fetchDogs() {
      try {
        const res = await DogFetcher(breed);
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
          <img src={dog} alt="犬" />
        </li>
      ))}
    </ul>
  );
}