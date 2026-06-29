import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold ml-100">
        8xDebete Tournament
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Địt mẹ mày Ngô Trường Giang
      </p>
      
      <Link href="/Tournaments">
      <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        View Tournaments
      </button>
      </Link>

      <Link href="/Betting">
      <button className="mt-8 ml-20 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        View Betting
      </button>
      </Link>

    </main>
  );
}