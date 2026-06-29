export default function TournamentsPage() {
  return (
    <main className="bg-[#1B1B1B]">
      <button className="absolute top-10 left-45 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Current <br/> Draws
      </button>

      <button className="absolute top-10 left-75 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Team <br/> Tab
      </button>

      <button className="absolute top-10 left-101 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Speaker <br/> Tab
      </button>

      <button className="absolute top-10 left-132 rounded-lg bg-blue-600 px-6 py-6 text-white hover:bg-blue-700">
        Results
      </button>

      <button className="absolute top-10 left-161 rounded-lg bg-blue-600 px-6 py-6 text-white hover:bg-blue-700">
        Standings
      </button>

      <button className="absolute top-10 left-195 rounded-lg bg-blue-600 px-6 py-6 text-white hover:bg-blue-700">
        Motions
      </button>

      <button className="absolute top-10 left-225 rounded-lg bg-blue-600 px-6 py-6 text-white hover:bg-blue-700">
        Participants
      </button>

      <div className="bg-gray-400 w-337 h-200 absolute top-70">
      </div>

      <img src="/images/jr jr.jpeg" alt="Phạm Minh Jr" />
      <img src="/images/chào.jpeg" alt="Phạm Minh Jr" className="w-70 h-70 absolute top-0 left-262" />

      <p className="font-bold absolute top-40 left-50 text-4xl text-white">
        🤠 Welcome to 8xDebete Tournaments
      </p>
    </main>
  );
}