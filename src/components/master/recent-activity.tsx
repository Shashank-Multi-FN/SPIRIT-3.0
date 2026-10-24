import { DashboardIcon } from "./dashboard-icons";

export type ActivityRecord = {
  id: string;
  description: string;
  createdAt: string;
};

export function RecentActivity({ items }: { items: ActivityRecord[] }) {
  return (
    <section
      id="recent-activity"
      aria-labelledby="recent-activity-title"
      className="rounded-xl border border-white/[0.08] bg-[#101014]"
    >
      <div className="border-b border-white/[0.07] px-5 py-4 sm:px-6">
        <h2 id="recent-activity-title" className="text-sm font-semibold text-zinc-100">
          Recent Activity
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          Latest changes across your workspace
        </p>
      </div>
      {items.length > 0 ? (
        <ul className="divide-y divide-white/[0.06] px-5 sm:px-6">
          {items.map((item) => (
            <li key={item.id} className="flex gap-3 py-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-zinc-400">
                <DashboardIcon name="activity" className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-zinc-300">{item.description}</span>
                <span className="mt-1 block text-[11px] text-zinc-500">{item.createdAt}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center px-5 py-10 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-500">
            <DashboardIcon name="activity" />
          </span>
          <p className="mt-3 text-xs font-medium text-zinc-300">
            No recent activity
          </p>
          <p className="mt-1 text-[11px] text-zinc-500">
            Workspace events will appear here.
          </p>
        </div>
      )}
    </section>
  );
}
