import Link from "next/link";
import { ArrowRight } from "lucide-react";
import pengumuman from "@/content/pengumuman.json";

export default function AnnouncementBanner() {
  if (!pengumuman.isActive) return null;

  return (
    <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium text-center flex items-center justify-center gap-3">
      <span className="hidden sm:inline-block px-2 py-0.5 bg-white/20 rounded-md text-xs">
        Baru
      </span>
      <p>{pengumuman.message}</p>
      <Link
        href={pengumuman.link}
        className="inline-flex items-center gap-1 text-blue-100 hover:text-white underline underline-offset-2 transition-colors"
      >
        {pengumuman.linkText} <ArrowRight size={14} />
      </Link>
    </div>
  );
}
