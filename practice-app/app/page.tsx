import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <section className="pt-5">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold">
              ブログ
            </h2>
            <p className="mt-4">
              <Link href="/blog" className="text-blue-500 underline">
                ブログへ
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
