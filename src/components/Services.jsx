import { Activity, Apple, Dumbbell, Heart, Trophy, Users } from 'lucide-react'

const services = [
	{
		icon: Trophy,
		title: 'Personal Training',
		description: 'One-on-one coaching tailored to strength and body goals.',
	},
	{
		icon: Dumbbell,
		title: 'Strength Training',
		description: 'Progressive workouts to build muscle and confidence.',
	},
	{
		icon: Heart,
		title: 'Cardio Conditioning',
		description: 'High-energy sessions for stamina and heart health.',
	},
	{
		icon: Users,
		title: 'Group Classes',
		description: 'Motivating classes that keep workouts fun and consistent.',
	},
	{
		icon: Apple,
		title: 'Nutrition Guidance',
		description: 'Practical nutrition support to improve your training results.',
	},
	{
		icon: Activity,
		title: 'Recovery Support',
		description: 'Mobility and recovery guidance to train smarter and safer.',
	},
]

export default function Services({ darkMode }) {
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

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{services.map((service) => (
						<article
							key={service.title}
							className={`rounded-[28px] border p-6 transition-transform hover:-translate-y-1 hover:border-[#d4a017]/60 ${
								darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
							}`}
						>
							<span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d4a017] text-black">
								<service.icon size={20} />
							</span>
							<h3 className="font-['Space_Grotesk'] text-xl font-bold">{service.title}</h3>
							<p className={`mt-3 text-sm leading-7 ${darkMode ? 'text-white/65' : 'text-slate-600'}`}>
								{service.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
