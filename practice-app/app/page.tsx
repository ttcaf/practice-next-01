import Link from "next/link";

export default function Home() {

  return (
    <div className="font-sans">
      <main>
        <section className="pt-5">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold">
              犬一覧
            </h2>
            <p className="mt-4">
              <Link href="/dogs" className="text-blue-500 underline">
                犬一覧へ
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
