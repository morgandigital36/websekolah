import { CheckCircle2 } from "lucide-react";

export default function PPDBPage() {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-6">
            Tahun Ajaran 2026/2027
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-xl text-slate-600">
            Wujudkan masa depan gemilang bersama SMP Negeri 3. Pendaftaran resmi dibuka.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Jalur Pendaftaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Jalur Zonasi</h3>
                <p className="text-slate-600">Diperuntukkan bagi calon peserta didik yang berdomisili di dalam wilayah zonasi yang telah ditetapkan.</p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Jalur Prestasi</h3>
                <p className="text-slate-600">Diperuntukkan bagi calon peserta didik yang memiliki prestasi akademik maupun non-akademik.</p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Jalur Afirmasi</h3>
                <p className="text-slate-600">Diperuntukkan bagi calon peserta didik yang berasal dari keluarga ekonomi tidak mampu.</p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Jalur Pindah Tugas</h3>
                <p className="text-slate-600">Diperuntukkan bagi calon peserta didik yang mengikuti perpindahan tugas orang tua/wali.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Persyaratan Umum</h2>
            <ul className="space-y-4 mb-12">
              {[
                "Berusia maksimal 15 tahun pada tanggal 1 Juli 2026.",
                "Memiliki Ijazah SD/sederajat atau dokumen lain yang menjelaskan telah menyelesaikan kelas 6 SD.",
                "Kartu Keluarga (KK) yang diterbitkan paling singkat 1 tahun sebelum tanggal pendaftaran.",
                "Akta Kelahiran atau Surat Keterangan Lahir.",
                "Pas foto berwarna ukuran 3x4 (2 lembar)."
              ].map((req, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Siap Mendaftar?</h3>
              <p className="text-slate-600 mb-6">
                Proses pendaftaran dilakukan secara online melalui portal resmi PPDB Dinas Pendidikan.
              </p>
              <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-600/20 transition-all w-full sm:w-auto">
                Menuju Portal PPDB Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
