export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-white/80" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-600">
          Smart Travel for Davao Oriental
        </p>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Discover the Beauty of{" "}
          <span className="text-sky-600">
            Davao Oriental
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-sm text-slate-600 sm:text-base">
          Smart Tour DavOr helps you find the best beaches, waterfalls, and hidden
          spots in Davao Oriental with simple, clear recommendations made just for you.
        </p>

        <div className="mt-8">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Get Recommendations
          </a>
        </div>
      </div>
    </section>
  );
}

