import { DashboardIcon, type DashboardIconName } from "./dashboard-icons";

export type DashboardStat = {
  label: string;
  value: string;
  helper: string;
  icon: DashboardIconName;
  tone: "indigo" | "emerald" | "sky" | "amber";
};

const toneStyles = {
  indigo: "bg-indigo-400/10 text-indigo-300",
  emerald: "bg-emerald-400/10 text-emerald-300",
  sky: "bg-sky-400/10 text-sky-300",
  amber: "bg-amber-400/10 text-amber-300",
} satisfies Record<DashboardStat["tone"], string>;

export function StatCard({ stat }: { stat: DashboardStat }) {
  return (
    <article className="rounded-xl border border-white/[0.08] bg-[#101014] p-5 transition-colors hover:border-white/[0.14]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium text-zinc-400">{stat.label}</p>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${toneStyles[stat.tone]}`}>
          <DashboardIcon name={stat.icon} className="h-[18px] w-[18px]" />
        </span>
      </div>
      <p className="mt-5 text-2xl font-semibold tracking-tight text-zinc-100">
        {stat.value}
      </p>
      <p className="mt-1 text-[11px] text-zinc-500">{stat.helper}</p>
    </article>
  );
}
