import trainerOne from '../assets/Image3.jpg'
import trainerTwo from '../assets/Image4.jpg'
import trainerThree from '../assets/Image5.jpg'

const trainers = [
	{
		name: 'Alex Carter',
		role: 'Strength Coach',
		image: trainerOne,
	},
	{
		name: 'Mia Johnson',
		role: 'Yoga & Mobility',
		image: trainerTwo,
	},
	{
		name: 'Ryan Blake',
		role: 'Personal Trainer',
		image: trainerThree,
	},
]

export default function Trainers({ darkMode }) {
	return (
		<section
			id="trainers"
			className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-slate-50'}`}
		>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<p className="mb-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[#d4a017]">
					Team
				</p>
				<h2 className="max-w-2xl font-['Space_Grotesk'] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
					Meet Our Trainers
				</h2>

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{trainers.map((trainer) => (
						<article
							key={trainer.name}
							className={`overflow-hidden rounded-[28px] border transition-transform hover:-translate-y-1 hover:border-[#d4a017]/60 ${
								darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
							}`}
						>
							<div className="h-72 overflow-hidden">
								<img src={trainer.image} alt={trainer.name} className="h-full w-full object-cover" />
							</div>
							<div className="p-6">
								<h3 className="font-['Space_Grotesk'] text-2xl font-bold">{trainer.name}</h3>
								<p className="mt-2 font-semibold text-[#d4a017]">{trainer.role}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
