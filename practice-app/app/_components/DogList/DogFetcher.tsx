'use server';

export const DogFetcher = async (breed: string) => {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
  const data = await res.json();
  return data.message;
}