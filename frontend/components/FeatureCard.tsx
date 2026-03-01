import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/40 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-emerald-500/25">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
    </div>
  );
}

