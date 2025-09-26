'use client';
import React, { useState, useEffect } from "react";

export default function DogList({ breed }: { breed: string }) {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
        const data = await res.json();
        setDogs(data.message);
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setDogs([]);
      } 
    };

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