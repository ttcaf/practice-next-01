'use client';
import React, { useState, useEffect } from "react";
import { DogFetcher } from "./DogFetcher";

export default function DogList({ breed }: { breed: string }) {
  const [dogs, setDogs] = useState<string[]>([]);

  async function fetchDogs() {
    const res = await DogFetcher(breed);
    setDogs(res);
  }
  
  useEffect(() => {
    fetchDogs();
  }, [breed]);

  return (
    <ul className="mt-4">
      {dogs.map((dog: string, index: number) => (
        <li key={index}>
          <img src={dog} alt="犬" />
        </li>
      ))}
    </ul>
  );
}