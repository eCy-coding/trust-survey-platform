export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800">
      {/* Başlık */}
      <h1 className="text-4xl font-bold mb-4">
        Dijital Bilgi ve Miras Platformu
      </h1>

      {/* Slogan */}
      <p className="text-lg mb-8 text-center max-w-2xl">
        Geçmişin bilgeliğini dijital gelecekle buluşturuyoruz. 
        Etik değerler, kişisel hikayeler ve profesyonel hizmetler tek bir yerde.
      </p>

      {/* Butonlar */}
      <div className="flex gap-4">
        <a
          href="#about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Hakkında
        </a>
        <a
          href="#start"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Başla
        </a>
      </div>
    </main>
  );
}
