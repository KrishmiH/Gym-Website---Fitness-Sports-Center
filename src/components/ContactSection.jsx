import { useEffect, useState } from 'react'
import { z } from 'zod' // Schema validation library
import { useForm } from 'react-hook-form' // Form state & validation
import { zodResolver } from '@hookform/resolvers/zod'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

// Advanced Form Handling - Zod schema defines validation rules
const schema = z.object({
	name: z.string().trim().min(2, 'Name should be at least 2 characters.'),
	email: z.string().trim().email('Please enter a valid email address.'),
	message: z.string().trim().min(10, 'Message should be at least 10 characters.'),
})

export default function ContactSection({ darkMode }) {
	// Track form submission state (success/error/loading)
	const [submitState, setSubmitState] = useState({ type: '', message: '' })
	// React Hook Form setup with Zod validation and onTouched mode
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isSubmitting }, // isSubmitting tracks API request in progress
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		mode: 'onTouched', // Validate only after user leaves field
	})

	const messageValue = watch('message') || ''

	useEffect(() => {
		if (!submitState.message) {
			return
		}

		const timer = window.setTimeout(() => {
			setSubmitState({ type: '', message: '' })
		}, 5000)

		return () => window.clearTimeout(timer)
	}, [submitState])

	// API Integration - Async form submission to external server
	const onSubmit = async (values) => {
		setSubmitState({ type: '', message: '' })

		try {
			// POST request to JSONPlaceholder API with validated form data
			const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})

			if (!response.ok) {
				throw new Error('Failed to submit')
			}

			reset() // Clear form after successful submission
			setSubmitState({
				type: 'success',
				message: 'Your inquiry has been submitted successfully. We will contact you soon!',
			})
		} catch {
			// Show error message if API call fails
			setSubmitState({
				type: 'error',
				message: 'Submission failed. Please try again in a moment.',
			})
		}
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
					onSubmit={handleSubmit(onSubmit)}
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
							{...register('name')}
							placeholder="Your name"
							className={`mt-2 block w-full rounded-xl border px-4 py-3 outline-none transition ${
								errors.name
									? 'border-red-500'
									: darkMode
										? 'border-white/10 bg-white/5 text-white focus:border-[#d4a017]'
										: 'border-slate-300 bg-white text-slate-950 focus:border-[#d4a017]'
							}`}
						/>
						{errors.name ? <span className="mt-1 block text-sm text-red-500">{errors.name.message}</span> : null}
					</label>

					<label
						htmlFor="email"
						className={`mb-4 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-700'}`}
					>
						Email
						<input
							id="email"
							type="email"
							{...register('email')}
							placeholder="your@email.com"
							className={`mt-2 block w-full rounded-xl border px-4 py-3 outline-none transition ${
								errors.email
									? 'border-red-500'
									: darkMode
										? 'border-white/10 bg-white/5 text-white focus:border-[#d4a017]'
										: 'border-slate-300 bg-white text-slate-950 focus:border-[#d4a017]'
							}`}
						/>
						{errors.email ? <span className="mt-1 block text-sm text-red-500">{errors.email.message}</span> : null}
					</label>

					<label
						htmlFor="message"
						className={`mb-4 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-700'}`}
					>
						Message
						<textarea
							id="message"
							rows="5"
							maxLength={500}
							{...register('message')}
							placeholder="Tell us about your fitness goals"
							className={`mt-2 block min-h-[140px] w-full rounded-xl border px-4 py-3 outline-none transition ${
								errors.message
									? 'border-red-500'
									: darkMode
										? 'border-white/10 bg-white/5 text-white focus:border-[#d4a017]'
										: 'border-slate-300 bg-white text-slate-950 focus:border-[#d4a017]'
							}`}
						/>
						<div className="mt-1 flex items-center justify-between">
							{errors.message ? <span className="block text-sm text-red-500">{errors.message.message}</span> : <span />}
							<span className={`text-xs ${darkMode ? 'text-white/45' : 'text-slate-500'}`}>
								{messageValue.length}/500
							</span>
						</div>
					</label>

					{/* Advanced Form Handling - Submit with loading state and success/error feedback */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="inline-flex w-full items-center justify-center rounded-xl bg-[#d4a017] px-5 py-3 font-['Space_Grotesk'] font-bold text-black transition-transform hover:-translate-y-0.5"
					>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</button>

					{submitState.message ? (
						<p
							className={`mt-4 text-sm font-semibold ${
								submitState.type === 'success' ? 'text-emerald-400' : 'text-red-400'
							}`}
							role="status"
							aria-live="polite"
						>
							{submitState.message}
						</p>
					) : null}
				</form>
			</div>
		</section>
	)
}
