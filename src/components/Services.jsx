import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Apple, Dumbbell, Heart, Search, Trophy, Users } from 'lucide-react'

const services = [
	{
		icon: Trophy,
		title: 'Personal Training',
		category: 'Coaching',
		description: 'One-on-one coaching tailored to strength and body goals.',
	},
	{
		icon: Dumbbell,
		title: 'Strength Training',
		category: 'Strength',
		description: 'Progressive workouts to build muscle and confidence.',
	},
	{
		icon: Heart,
		title: 'Cardio Conditioning',
		category: 'Cardio',
		description: 'High-energy sessions for stamina and heart health.',
	},
	{
		icon: Users,
		title: 'Group Classes',
		category: 'Coaching',
		description: 'Motivating classes that keep workouts fun and consistent.',
	},
	{
		icon: Apple,
		title: 'Nutrition Guidance',
		category: 'Wellness',
		description: 'Practical nutrition support to improve your training results.',
	},
	{
		icon: Activity,
		title: 'Recovery Support',
		category: 'Wellness',
		description: 'Mobility and recovery guidance to train smarter and safer.',
	},
]

export default function Services({ darkMode }) {
	// Search/Filter Functionality - Real-time search and category filtering
	const [query, setQuery] = useState('') // Search term state
	const [category, setCategory] = useState('All') // Selected category filter

	// Dynamically extract unique categories from services data
	const categories = useMemo(() => ['All', ...new Set(services.map((service) => service.category))], [])

	// Memoized filter logic: combines search query + category selection
	const filteredServices = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase()

		return services.filter((service) => {
			const matchesCategory = category === 'All' || service.category === category
			const matchesQuery =
				normalizedQuery === '' ||
				service.title.toLowerCase().includes(normalizedQuery) ||
				service.description.toLowerCase().includes(normalizedQuery)

			return matchesCategory && matchesQuery
		})
	}, [category, query])

	return (
		<section
			id="services"
			className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-slate-50'}`}
		>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<p className="mb-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[#d4a017]">
					Services
				</p>
				<h2 className="max-w-3xl font-['Space_Grotesk'] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
					Everything You Need in One Place
				</h2>
				<p className={`mt-5 max-w-2xl leading-7 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
					A complete gym experience designed to build strength, improve endurance,
					and keep you consistent.
				</p>

				<div className="mt-8 grid gap-3 md:grid-cols-[1fr_220px]">
					<label
						htmlFor="service-search"
						className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
							darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
						}`}
					>
						<Search size={16} className={darkMode ? 'text-white/50' : 'text-slate-500'} />
						<input
							id="service-search"
							type="search"
							placeholder="Search services"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							className={`w-full bg-transparent text-sm outline-none ${
								darkMode ? 'placeholder:text-white/40' : 'placeholder:text-slate-400'
							}`}
						/>
					</label>

					<select
						value={category}
						onChange={(event) => setCategory(event.target.value)}
						className={`rounded-xl border px-4 py-3 text-sm outline-none ${
							darkMode
								? 'border-white/10 bg-[#111111] text-white'
								: 'border-slate-200 bg-white text-slate-900'
						}`}
					>
						{categories.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{/* Animations - Framer Motion scroll-reveal: cards fade in & slide up with staggered delays */}
					{filteredServices.map((service, index) => (
						<motion.article
							key={service.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.4, delay: index * 0.06 }}
							className={`rounded-[28px] border p-6 transition-transform hover:-translate-y-1 hover:border-[#d4a017]/60 ${
								darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
							}`}
						>
							<span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d4a017] text-black">
								<service.icon size={20} />
							</span>
							<h3 className="font-['Space_Grotesk'] text-xl font-bold">{service.title}</h3>
							<p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#d4a017]">{service.category}</p>
							<p className={`mt-3 text-sm leading-7 ${darkMode ? 'text-white/65' : 'text-slate-600'}`}>
								{service.description}
							</p>
						</motion.article>
					))}

					{filteredServices.length === 0 ? (
						<p className={`md:col-span-2 xl:col-span-3 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
							No services matched your search. Try another keyword or category.
						</p>
					) : null}
				</div>
			</div>
		</section>
	)
}
