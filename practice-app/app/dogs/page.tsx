export default async function Dogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
  const data = await res.json();
  console.log(data);

  return (
    <div className="font-sans">
      <section className="pt-5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold">
            犬一覧
          </h2>
          <ul>
            {data.message.map((dog: string, index: number) => (
              <li key={index}>
                <img src={dog} alt="犬" />
              </li>
            ))}
            </ul>
        </div>
      </section>
    </div>
  );
}