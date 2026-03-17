import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import logoImage from '../assets/bodybuilding-emblem-and-gym-logo-design-template-free-vector.jpg'

const navItems = ['home', 'about', 'services', 'plans', 'trainers', 'contact']

export default function Header({ darkMode, toggleDarkMode }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const jumpTo = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
		setMobileMenuOpen(false)
	}

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm transition-colors ${
				darkMode ? 'border-white/10 bg-black/95' : 'border-slate-200 bg-white/95'
			}`}
		>
			<div className="mx-auto flex min-h-[82px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
				<button type="button" onClick={() => jumpTo('home')} className="flex items-center gap-3 text-left">
					<span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-[#d4a017]/35 bg-white">
						<img src={logoImage} alt="Fitness Sports Center logo" />
					</span>
					<span>
						<small className="block font-['Space_Grotesk'] text-[0.62rem] uppercase tracking-[0.35em] text-[#d4a017]">
							Fitness
						</small>
						<strong className="block font-['Space_Grotesk'] text-[0.95rem] font-bold">
							Sports Center
						</strong>
					</span>
				</button>

				<nav
					className={`hidden items-center gap-5 md:flex ${darkMode ? 'text-white/80' : 'text-slate-600'}`}
					aria-label="Main navigation"
				>
					{navItems.map((item) => (
						<button
							key={item}
							type="button"
							onClick={() => jumpTo(item)}
							className="font-['Space_Grotesk'] text-sm transition-colors hover:text-[#d4a017]"
						>
							{item[0].toUpperCase() + item.slice(1)}
						</button>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<button
						type="button"
						className={`grid h-10 w-10 place-items-center rounded-xl transition-colors ${
							darkMode ? 'bg-white/5 text-[#f4b942]' : 'bg-slate-100 text-slate-900'
						}`}
						onClick={toggleDarkMode}
					>
						{darkMode ? <Sun size={18} /> : <Moon size={18} />}
					</button>
					<button
						type="button"
						className="hidden rounded-xl bg-[#d4a017] px-4 py-2 font-['Space_Grotesk'] text-sm font-bold text-black transition-transform hover:-translate-y-0.5 md:inline-flex"
						onClick={() => jumpTo('contact')}
					>
						Join Now
					</button>
					<button
						type="button"
						className={`grid h-10 w-10 place-items-center rounded-xl md:hidden ${
							darkMode ? 'bg-white/5 text-white' : 'bg-slate-100 text-slate-900'
						}`}
						onClick={() => setMobileMenuOpen((prev) => !prev)}
					>
						{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			{mobileMenuOpen ? (
				<div className="border-t border-inherit px-4 pb-4 md:hidden">
					{navItems.map((item) => (
						<button
							key={item}
							type="button"
							onClick={() => jumpTo(item)}
							className={`block w-full py-3 text-left font-['Space_Grotesk'] text-sm ${
								darkMode ? 'text-white/85' : 'text-slate-600'
							}`}
						>
							{item[0].toUpperCase() + item.slice(1)}
						</button>
					))}
				</div>
			) : null}
		</header>
	)
}
