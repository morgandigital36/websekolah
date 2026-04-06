import { Trophy, Cpu, Leaf, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import prestasi from "@/content/prestasi.json";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Cpu,
  Leaf,
  Palette
};

export default function PrestasiSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Keunggulan & Prestasi</h2>
            <p className="text-lg text-slate-600">
              Bukti nyata dedikasi kami dalam mencetak generasi berprestasi di berbagai bidang akademik dan non-akademik.
            </p>
          </div>
          <Link 
            href="/prestasi" 
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Lihat Semua Prestasi <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prestasi.map((item) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <div 
                key={item.id} 
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md uppercase tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 bg-amber-100 text-amber-700 rounded-md uppercase tracking-wider">
                    {item.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
