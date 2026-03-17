import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

const initialState = {
	name: '',
	email: '',
	message: '',
}

const initialErrors = {
	name: '',
	email: '',
	message: '',
}

function isEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function ContactSection({ darkMode }) {
	const [formData, setFormData] = useState(initialState)
	const [errors, setErrors] = useState(initialErrors)
	const [successMessage, setSuccessMessage] = useState('')

	const handleChange = (field, value) => {
		setFormData((previous) => ({ ...previous, [field]: value }))
		setErrors((previous) => ({ ...previous, [field]: '' }))
	}

	const validateForm = () => {
		const nextErrors = { ...initialErrors }

		if (!formData.name.trim()) {
			nextErrors.name = 'Name is required.'
		} else if (formData.name.trim().length < 2) {
			nextErrors.name = 'Name should be at least 2 characters.'
		}

		if (!formData.email.trim()) {
			nextErrors.email = 'Email is required.'
		} else if (!isEmail(formData.email.trim())) {
			nextErrors.email = 'Please enter a valid email address.'
		}

		if (!formData.message.trim()) {
			nextErrors.message = 'Message is required.'
		} else if (formData.message.trim().length < 10) {
			nextErrors.message = 'Message should be at least 10 characters.'
		}

		setErrors(nextErrors)

		return Object.values(nextErrors).every((message) => message === '')
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!validateForm()) {
			setSuccessMessage('')
			return
		}

		setSuccessMessage('Your inquiry has been submitted successfully. We will contact you soon!')
		setFormData(initialState)

		window.setTimeout(() => {
			setSuccessMessage('')
		}, 5000)
	}

	return (
		<section
			id="contact"
			className={`border-t py-20 transition-colors duration-300 ${
				darkMode ? 'border-white/10 bg-[#111111]' : 'border-slate-200 bg-white'
			}`}
		>
			<div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
				<div>
					<p className="mb-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[#d4a017]">
						Contact
					</p>
					<h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
						Get In Touch
					</h2>
					<p className={`mt-5 max-w-xl leading-7 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
						Have questions about memberships, classes, or training programs? Send
						us a message and our team will get back to you.
					</p>
					<ul className={`mt-8 space-y-5 ${darkMode ? 'text-white/75' : 'text-slate-700'}`}>
						<li className="flex items-start gap-4">
							<span className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4a017]/10 text-[#d4a017]">
								<MapPin size={18} />
							</span>
							<div>
								<p className={`font-['Space_Grotesk'] font-semibold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
									Visit Us
								</p>
								<p>123 Fitness Street, Colombo</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<span className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4a017]/10 text-[#d4a017]">
								<Phone size={18} />
							</span>
							<div>
								<p className={`font-['Space_Grotesk'] font-semibold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
									Call Us
								</p>
								<p>+94 77 123 4567</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<span className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4a017]/10 text-[#d4a017]">
								<Mail size={18} />
							</span>
							<div>
								<p className={`font-['Space_Grotesk'] font-semibold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
									Email Us
								</p>
								<p>info@fitnesssportscenter.com</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<span className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4a017]/10 text-[#d4a017]">
								<Clock3 size={18} />
							</span>
							<div>
								<p className={`font-['Space_Grotesk'] font-semibold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
									Opening Hours
								</p>
								<p>Mon - Sat: 5:00 AM - 10:00 PM</p>
							</div>
						</li>
					</ul>
				</div>

				<form
					onSubmit={handleSubmit}
					noValidate
					className={`rounded-[28px] border p-6 lg:p-8 ${
						darkMode ? 'border-white/10 bg-black/30' : 'border-slate-200 bg-slate-50'
					}`}
				>
					<label htmlFor="name" className={`mb-4 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-700'}`}>
						Name
						<input
							id="name"
							type="text"
							value={formData.name}
							onChange={(event) => handleChange('name', event.target.value)}
							placeholder="Your name"
							className={`mt-2 block w-full rounded-xl border px-4 py-3 outline-none transition ${
								errors.name
									? 'border-red-500'
									: darkMode
										? 'border-white/10 bg-white/5 text-white focus:border-[#d4a017]'
										: 'border-slate-300 bg-white text-slate-950 focus:border-[#d4a017]'
							}`}
						/>
						{errors.name ? <span className="mt-1 block text-sm text-red-500">{errors.name}</span> : null}
					</label>

					<label
						htmlFor="email"
						className={`mb-4 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-700'}`}
					>
						Email
						<input
							id="email"
							type="email"
							value={formData.email}
							onChange={(event) => handleChange('email', event.target.value)}
							placeholder="your@email.com"
							className={`mt-2 block w-full rounded-xl border px-4 py-3 outline-none transition ${
								errors.email
									? 'border-red-500'
									: darkMode
										? 'border-white/10 bg-white/5 text-white focus:border-[#d4a017]'
										: 'border-slate-300 bg-white text-slate-950 focus:border-[#d4a017]'
							}`}
						/>
						{errors.email ? <span className="mt-1 block text-sm text-red-500">{errors.email}</span> : null}
					</label>

					<label
						htmlFor="message"
						className={`mb-4 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-700'}`}
					>
						Message
						<textarea
							id="message"
							rows="5"
							value={formData.message}
							onChange={(event) => handleChange('message', event.target.value)}
							placeholder="Tell us about your fitness goals"
							className={`mt-2 block min-h-[140px] w-full rounded-xl border px-4 py-3 outline-none transition ${
								errors.message
									? 'border-red-500'
									: darkMode
										? 'border-white/10 bg-white/5 text-white focus:border-[#d4a017]'
										: 'border-slate-300 bg-white text-slate-950 focus:border-[#d4a017]'
							}`}
						/>
						{errors.message ? <span className="mt-1 block text-sm text-red-500">{errors.message}</span> : null}
					</label>

					<button
						type="submit"
						className="inline-flex w-full items-center justify-center rounded-xl bg-[#d4a017] px-5 py-3 font-['Space_Grotesk'] font-bold text-black transition-transform hover:-translate-y-0.5"
					>
						Send Message
					</button>

					{successMessage ? (
						<p className="mt-4 text-sm font-semibold text-emerald-400" role="status" aria-live="polite">
							{successMessage}
						</p>
					) : null}
				</form>
			</div>
		</section>
	)
}
