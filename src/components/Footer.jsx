import logoImage from '../assets/bodybuilding-emblem-and-gym-logo-design-template-free-vector.jpg'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t py-8 ${darkMode ? 'border-white/10 bg-black' : 'border-slate-200 bg-slate-50'}`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className={`flex items-center gap-3 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-[#d4a017]/35 bg-white">
            <img src={logoImage} alt="Fitness Sports Center logo" className="h-full w-full object-cover" />
          </span>
          <p>Fitness Sports Center - Train harder. Live stronger.</p>
        </div>

        <div className={`flex flex-wrap gap-5 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
          <a href="#home" className="font-['Space_Grotesk'] transition-colors hover:text-[#d4a017]">Home</a>
          <a href="#services" className="font-['Space_Grotesk'] transition-colors hover:text-[#d4a017]">Services</a>
          <a href="#plans" className="font-['Space_Grotesk'] transition-colors hover:text-[#d4a017]">Plans</a>
          <a href="#contact" className="font-['Space_Grotesk'] transition-colors hover:text-[#d4a017]">Contact</a>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Facebook"
            className={`grid h-9 w-9 place-items-center rounded-full ${darkMode ? 'bg-white/8 text-white/90' : 'bg-slate-200 text-slate-700'}`}
          >
            <Facebook size={16} />
          </button>
          <button
            type="button"
            aria-label="Instagram"
            className={`grid h-9 w-9 place-items-center rounded-full ${darkMode ? 'bg-white/8 text-white/90' : 'bg-slate-200 text-slate-700'}`}
          >
            <Instagram size={16} />
          </button>
          <button
            type="button"
            aria-label="Twitter"
            className={`grid h-9 w-9 place-items-center rounded-full ${darkMode ? 'bg-white/8 text-white/90' : 'bg-slate-200 text-slate-700'}`}
          >
            <Twitter size={16} />
          </button>
          <button
            type="button"
            aria-label="Youtube"
            className={`grid h-9 w-9 place-items-center rounded-full ${darkMode ? 'bg-white/8 text-white/90' : 'bg-slate-200 text-slate-700'}`}
          >
            <Youtube size={16} />
          </button>
        </div>
      </div>
      <p className={`mt-6 text-center text-sm ${darkMode ? 'text-white/40' : 'text-slate-500'}`}>
        © 2026 Fitness Sports Center. All rights reserved.
      </p>
    </footer>
  )
}
