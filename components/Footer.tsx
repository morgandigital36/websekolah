import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <BookOpen size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                SMPN 3
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mewujudkan lingkungan belajar yang inspiratif dengan fasilitas modern untuk masa depan siswa yang gemilang.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/profil" className="hover:text-blue-400 transition-colors">Profil Sekolah</Link>
              </li>
              <li>
                <Link href="/fasilitas" className="hover:text-blue-400 transition-colors">Fasilitas</Link>
              </li>
              <li>
                <Link href="/guru" className="hover:text-blue-400 transition-colors">Direktori Guru</Link>
              </li>
              <li>
                <Link href="/prestasi" className="hover:text-blue-400 transition-colors">Prestasi</Link>
              </li>
              <li>
                <Link href="/ppdb" className="hover:text-blue-400 transition-colors">Info PPDB</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Jl. Pendidikan No. 123, Kota Pelajar, Provinsi Jawa Barat, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info@smpn3.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SMP Negeri 3. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
