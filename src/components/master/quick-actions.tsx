import { DashboardIcon, type DashboardIconName } from "./dashboard-icons";

const actions: {
  label: string;
  description: string;
  icon: DashboardIconName;
}[] = [
  {
    label: "Create CRM",
    description: "Launch a workspace",
    icon: "crm",
  },
  {
    label: "Add Organization",
    description: "Set up an organization",
    icon: "building",
  },
  {
    label: "Manage Users",
    description: "Review team access",
    icon: "users",
  },
  {
    label: "View Analytics",
    description: "Explore platform metrics",
    icon: "chart",
  },
];

export function QuickActions() {
  return (
    <section
      id="quick-actions"
      aria-labelledby="quick-actions-title"
      className="rounded-xl border border-white/[0.08] bg-[#101014] p-5 sm:p-6"
    >
      <h2 id="quick-actions-title" className="text-sm font-semibold text-zinc-100">
        Quick actions
      </h2>
      <div className="mt-4 space-y-2">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            disabled
            title="This action will be available when workspace features are connected."
            className="group flex w-full items-center gap-3 rounded-lg border border-transparent px-2.5 py-2.5 text-left transition hover:border-white/[0.07] hover:bg-white/[0.025] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-400 transition group-hover:text-zinc-200">
              <DashboardIcon name={action.icon} className="h-[17px] w-[17px]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium text-zinc-200">
                {action.label}
              </span>
              <span className="mt-1 block text-[11px] text-zinc-500">
                {action.description}
              </span>
            </span>
            <DashboardIcon name="chevron" className="h-4 w-4 text-zinc-600" />
          </button>
        ))}
      </div>
    </section>
  );
}
