import PrestasiSection from "@/components/PrestasiSection";

export default function PrestasiPage() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Prestasi Sekolah</h1>
          <p className="text-xl text-slate-600">
            Deretan pencapaian membanggakan siswa dan sekolah di tingkat nasional hingga internasional.
          </p>
        </div>
      </div>
      <PrestasiSection />
    </div>
  );
}
