import heroImage from '../assets/Image1.jpg'

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center justify-center pt-20 ${
        darkMode ? 'bg-black' : 'bg-slate-50'
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="animate-[rise_0.7s_ease_both]">
          <p className="mb-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[#d4a017]">
            Train harder. Live stronger.
          </p>
          <h1 className="max-w-[12ch] font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl lg:text-7xl">
            Transform Your Body, Build Your <span>Strength</span>
          </h1>
          <p className={`mt-5 max-w-2xl text-base leading-7 lg:text-lg ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
            Train with expert coaches, premium equipment, and personalized fitness
            programs designed to help you achieve real results.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#d4a017] px-6 py-3 font-['Space_Grotesk'] font-bold text-black transition-transform hover:-translate-y-0.5"
            >
              Join Today
            </a>
            <a
              href="#services"
              className={`inline-flex items-center justify-center rounded-xl border px-6 py-3 font-['Space_Grotesk'] font-semibold transition-transform hover:-translate-y-0.5 ${
                darkMode
                  ? 'border-white/20 bg-white/5 text-white'
                  : 'border-slate-300 bg-white text-slate-900'
              }`}
            >
              Explore Programs
            </a>
          </div>

          <div
            className={`mt-10 grid max-w-xl grid-cols-1 gap-4 rounded-2xl border p-5 sm:grid-cols-3 ${
              darkMode ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
            }`}
          >
            <article>
              <strong className="text-2xl font-['Space_Grotesk'] font-bold text-[#d4a017]">10+</strong>
              <span className={`mt-1 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                Expert Trainers
              </span>
            </article>
            <article>
              <strong className="text-2xl font-['Space_Grotesk'] font-bold text-[#d4a017]">500+</strong>
              <span className={`mt-1 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                Active Members
              </span>
            </article>
            <article>
              <strong className="text-2xl font-['Space_Grotesk'] font-bold text-[#d4a017]">15+</strong>
              <span className={`mt-1 block text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                Fitness Programs
              </span>
            </article>
          </div>
        </div>

        <div
          className={`animate-[slideIn_0.7s_ease_both] rounded-[28px] border p-4 ${
            darkMode
              ? 'border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#080808]'
              : 'border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200'
          }`}
          role="presentation"
        >
          <img
            src={heroImage}
            alt="Athletic training"
            className="min-h-[320px] w-full rounded-[22px] object-cover sm:min-h-[460px]"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>
    </section>
  )
}
