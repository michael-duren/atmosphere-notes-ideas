export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-full text-white flex items-center justify-center font-caps shadow-2xl h-24 w-24 text-3xl bg-black">
          M
        </div>
        <h2 className="text-xl text-white">Michael Duren</h2>
      </div>
      <div>
        <h1 className="border-2 border-white bg-black bg-opacity-90 p-2 font-title text-xl text-white shadow-xl">
          Atmosphere
        </h1>
      </div>
    </header>
  );
}
