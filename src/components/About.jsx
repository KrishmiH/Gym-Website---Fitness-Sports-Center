import { Award, Target, Users } from 'lucide-react'
import aboutImage from '../assets/Image2.jpg'

const featureItems = [
	{ icon: Award, label: 'Professional Trainers' },
	{ icon: Users, label: 'Modern Equipment' },
	{ icon: Target, label: 'Personalized Programs' },
]

export default function About({ darkMode }) {
	return (
		<section
			id="about"
			className={`border-t py-20 transition-colors duration-300 ${
				darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
			}`}
		>
			<div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
				<div
					className={`rounded-[28px] border p-4 ${
						darkMode
							? 'border-white/10 bg-gradient-to-br from-[#1b1b1b] to-[#080808]'
							: 'border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200'
					}`}
				>
					<img
						src={aboutImage}
						alt="Modern gym interior"
						className="min-h-[320px] w-full rounded-[22px] object-cover sm:min-h-[380px]"
					/>
				</div>

				<div>
					<p className="mb-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[#d4a017]">
						About Us
					</p>
					<h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
						Built for Discipline, Energy, and Results
					</h2>
					<p className={`mt-6 max-w-2xl leading-7 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
						Fitness Sports Center is dedicated to helping people of all fitness
						levels achieve real progress through expert coaching, modern equipment,
						and a motivating environment.
					</p>
					<p className={`mt-4 max-w-2xl leading-7 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
						Our facility combines performance training with personalized programs
						to maximize your potential and transform your fitness journey.
					</p>

					<div className="mt-8 grid gap-4 sm:grid-cols-3">
						{featureItems.map((feature) => {
							const Icon = feature.icon
							return (
								<article
									key={feature.label}
									className={`rounded-2xl border p-4 ${
										darkMode ? 'border-white/10 bg-black/30' : 'border-slate-200 bg-slate-50'
									}`}
								>
									<span className="grid h-10 w-10 place-items-center rounded-full bg-[#d4a017] text-black">
										<Icon size={18} />
									</span>
									<h3 className="mt-3 font-['Space_Grotesk'] text-sm font-semibold">{feature.label}</h3>
								</article>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
