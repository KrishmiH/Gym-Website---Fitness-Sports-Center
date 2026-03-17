const plans = [
	{
		name: 'Basic',
		price: '$29',
		period: '/month',
		perks: ['Gym Access', 'Locker Access', '1 Free Assessment'],
	},
	{
		name: 'Standard',
		price: '$49',
		period: '/month',
		perks: ['Everything in Basic', 'Group Classes', 'Nutrition Guidance'],
		featured: true,
	},
	{
		name: 'Premium',
		price: '$79',
		period: '/month',
		perks: ['Everything in Standard', 'Trainer Sessions', 'Priority Support'],
	},
]

export default function MembershipPlans({ darkMode }) {
	return (
		<section
			id="plans"
			className={`border-y py-20 transition-colors duration-300 ${
				darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
			}`}
		>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mb-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[#d4a017]">
						Pricing
					</p>
					<h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
						Membership Plans
					</h2>
					<p className={`mt-5 leading-7 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
						Choose the plan that fits your schedule, energy, and fitness goals.
					</p>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<article
							key={plan.name}
							className={`rounded-[28px] border p-8 transition-transform hover:-translate-y-1 ${
								plan.featured
									? 'border-[#d4a017] bg-[#1b1404] shadow-[0_20px_60px_rgba(212,160,23,0.15)]'
									: darkMode
										? 'border-white/10 bg-black/30'
										: 'border-slate-200 bg-white'
							}`}
						>
							{plan.featured ? (
								<span className="mb-4 inline-block rounded-full bg-[#d4a017] px-3 py-1 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-black">
									Most Popular
								</span>
							) : null}
							<h3 className="font-['Space_Grotesk'] text-lg font-bold">{plan.name}</h3>
							<p className="mt-4 flex items-end gap-2">
								<strong
									className={`font-['Space_Grotesk'] text-5xl font-bold ${
										darkMode || plan.featured ? 'text-white' : 'text-slate-950'
									}`}
								>
									{plan.price}
								</strong>
								<span className={`pb-2 ${darkMode || plan.featured ? 'text-white/60' : 'text-slate-500'}`}>
									{plan.period}
								</span>
							</p>
							<ul className="mt-8 space-y-4">
								{plan.perks.map((perk) => (
									<li
										key={perk}
										className={`flex items-center gap-3 ${
											darkMode || plan.featured ? 'text-white/75' : 'text-slate-600'
										}`}
									>
										<span className="h-2.5 w-2.5 rounded-full bg-[#d4a017]" />
										<span>{perk}</span>
									</li>
								))}
							</ul>
							<a
								href="#contact"
								className={`mt-10 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-['Space_Grotesk'] font-bold transition-transform hover:-translate-y-0.5 ${
									plan.featured
										? 'bg-[#d4a017] text-black'
										: darkMode
											? 'border border-white/15 bg-white/5 text-white'
											: 'border border-slate-300 bg-white text-slate-950'
								}`}
							>
								Choose Plan
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
