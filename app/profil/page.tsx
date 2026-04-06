import Image from "next/image";

export default function ProfilPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Profil Sekolah</h1>
          <p className="text-xl text-slate-600">
            Membangun karakter, mengukir prestasi. Kami mendidik generasi penerus bangsa sejak 1980.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/schoolbuilding/800/1000" 
              alt="Gedung SMP Negeri 3" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sejarah Singkat</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Berdiri sejak 1980, SMP Negeri 3 adalah institusi pendidikan menengah pertama unggulan. Kami berfokus pada inovasi dan kualitas pembelajaran untuk memberikan pengalaman terbaik bagi siswa.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dengan ribuan alumni sukses di berbagai bidang, kami membuktikan bahwa pendidikan berkualitas adalah pondasi masa depan yang cerah.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Visi</h2>
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                &quot;Menjadi institusi pendidikan unggulan yang mencetak generasi cerdas, berakhlak mulia, berwawasan global, dan peduli lingkungan.&quot;
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Misi</h2>
              <ul className="space-y-4 text-lg text-slate-600">
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">1.</span>
                  Menyelenggarakan pembelajaran yang aktif, inovatif, kreatif, efektif, dan menyenangkan.
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">2.</span>
                  Menanamkan nilai-nilai keagamaan dan budi pekerti luhur dalam kehidupan sehari-hari.
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">3.</span>
                  Mengembangkan potensi siswa melalui kegiatan ekstrakurikuler yang beragam.
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">4.</span>
                  Menciptakan lingkungan sekolah yang bersih, hijau, dan sehat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
