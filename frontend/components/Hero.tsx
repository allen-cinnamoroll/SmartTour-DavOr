export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-sky-900/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <div className="max-w-xl space-y-6 text-slate-50">
          <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-slate-950/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Smart Travel for Davao Oriental
          </p>

          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Discover the Beauty of{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Davao Oriental
            </span>
          </h1>

          <p className="max-w-lg text-pretty text-sm text-slate-200 sm:text-base">
            Smart Tour DavOr is your personal guide to pristine beaches,
            waterfalls, and hidden gems—tailored to your interests, travel
            style, and time in Davao Oriental.
          </p>

          <div className="pt-2">
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Get Recommendations
            </a>
          </div>
        </div>

        <div className="mt-6 w-full max-w-md lg:mt-0">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/40 bg-slate-950/60 p-4 shadow-xl shadow-sky-900/60 backdrop-blur">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
              <span className="font-medium text-emerald-300">
                Live Trip Preview
              </span>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[11px] text-sky-200">
                DavOr Coastline
              </span>
            </div>

            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-tr from-sky-500/20 via-emerald-500/10 to-slate-900">
              <div className="flex h-full flex-col justify-between p-4 text-xs text-slate-100">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                    Suggested route
                  </p>
                  <p className="text-sm font-medium text-sky-100">
                    Dahican Beach → Aliwagwag Falls → Cape San Agustin
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-[11px]">
                  <div className="rounded-xl bg-slate-900/70 p-3">
                    <p className="text-slate-400">Trip style</p>
                    <p className="mt-1 font-medium text-emerald-300">
                      Relaxed Scenic
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-3">
                    <p className="text-slate-400">Days</p>
                    <p className="mt-1 font-medium text-sky-300">3–4</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-3">
                    <p className="text-slate-400">Best time</p>
                    <p className="mt-1 font-medium text-emerald-300">
                      Dec – May
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

