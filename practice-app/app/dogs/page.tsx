'use client';
import { useState } from "react";
import DogList from "../_components/DogList/DogList";

export default function Dogs() {

  const [breed, setBreed] = useState<string>("shiba");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setBreed(value);
  }

  return (
    <div className="font-sans pb-25">
      <section className="pt-5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold">
            犬一覧
          </h2>
          <div className="mt-4">
            <select className="border border-gray-300 rounded-md p-2" value={breed} onChange={handleChange}>
              <option value="shiba">Shiba</option>
              <option value="akita">Akita</option>
              <option value="husky">Husky</option>
              <option value="malamute">Malamute</option>
              <option value="samoyed">Samoyed</option>
              <option value="pomeranian">Pomeranian</option>
            </select>
          </div>
          <DogList breed={breed} />
        </div>
      </section>
    </div>
  );
}