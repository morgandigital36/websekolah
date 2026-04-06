import Image from "next/image";
import guru from "@/content/guru.json";

export default function TeachersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tenaga Pendidik Profesional</h2>
          <p className="text-lg text-slate-600">
            Dibimbing oleh guru-guru berpengalaman, berdedikasi tinggi, dan ahli di bidangnya masing-masing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guru.map((person) => (
            <div key={person.id} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg shadow-slate-200/50 ring-4 ring-white group-hover:ring-blue-50 transition-all duration-300">
                <Image 
                  src={person.image} 
                  alt={person.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="192px"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h3>
              <p className="text-blue-600 font-medium">{person.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
