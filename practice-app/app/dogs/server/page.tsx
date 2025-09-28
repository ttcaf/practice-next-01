import React from "react";
import Form from "next/form";
import { redirect } from "next/navigation";

export default async function DogsServer() {

  const breed = "shiba";
  const res:string[] = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`).then(res => res.json());

  async function handleSubmit(formData: FormData) {
    "use server";
    redirect(`/dogs/server/${formData.get("breed")}`);
  }


  return (
    <div className="font-sans pb-25">
      <section className="pt-5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold">
            犬一覧
          </h2>
          <div className="mt-4">
            <Form action={handleSubmit}>
              <select className="border border-gray-300 rounded-md p-2" name="breed">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
                <option value="husky">Husky</option>
                <option value="malamute">Malamute</option>
                <option value="samoyed">Samoyed</option>
                <option value="pomeranian">Pomeranian</option>
              </select>
              <button type="submit" className="bg-blue-500 text-white rounded-md p-2 ml-3 cursor-pointer">ソート</button>
            </Form>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            {res.message.map((dog: string, index: number) => {
              return (
                <li key={index}>
                  <img src={dog} alt="犬の写真" />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}