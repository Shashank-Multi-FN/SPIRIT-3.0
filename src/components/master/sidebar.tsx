import { signOut } from "../../app/master/actions";
import { DashboardIcon, type DashboardIconName } from "./dashboard-icons";

const navigation: {
  label: string;
  icon: DashboardIconName;
  href: string;
  active?: boolean;
}[] = [
  { label: "Overview", icon: "dashboard", href: "#overview", active: true },
  { label: "CRM Instances", icon: "crm", href: "#crm-instances" },
  { label: "Organizations", icon: "building", href: "#organizations" },
  { label: "Users", icon: "users", href: "#quick-actions" },
  { label: "Analytics", icon: "analytics", href: "#statistics" },
  { label: "Activity", icon: "activity", href: "#recent-activity" },
  { label: "Settings", icon: "settings", href: "#quick-actions" },
];

function NavigationLinks() {
  return (
    <nav aria-label="Dashboard navigation" className="space-y-1">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            item.active
              ? "bg-indigo-400/10 font-medium text-indigo-200"
              : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100"
          }`}
        >
          <DashboardIcon
            name={item.icon}
            className={`h-[18px] w-[18px] ${
              item.active
                ? "text-indigo-300"
                : "text-zinc-500 group-hover:text-zinc-300"
            }`}
          />
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function UserFooter({ email }: { email: string }) {
  const initials = email.slice(0, 1).toUpperCase() || "U";

  return (
    <div className="border-t border-white/[0.07] p-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-zinc-800 text-xs font-semibold text-zinc-200">
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-zinc-200">{email}</p>
          <p className="mt-0.5 text-[11px] text-zinc-500">Workspace admin</p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-md px-2 py-1.5 text-xs text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  );
}

export function Sidebar({ email }: { email: string }) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-white/[0.07] bg-[#0b0b0e] md:flex">
        <a href="/master" className="flex h-[72px] items-center gap-3 px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-sm font-bold text-white">
            G
          </span>
          <span className="text-sm font-semibold tracking-[0.16em]">
            GANGLION<span className="text-indigo-400">.OS</span>
          </span>
        </a>
        <div className="px-4 pt-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
            Workspace
          </p>
          <NavigationLinks />
        </div>
        <div className="mt-auto">
          <UserFooter email={email} />
        </div>
      </aside>

      <details className="group relative md:hidden">
        <summary
          aria-label="Open dashboard navigation"
          className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-lg border border-white/[0.08] text-zinc-300 hover:bg-white/[0.05] [&::-webkit-details-marker]:hidden"
        >
          <DashboardIcon name="menu" />
        </summary>
        <div className="absolute right-0 top-14 z-50 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl border border-white/[0.1] bg-[#101014] shadow-2xl">
          <div className="p-4">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Workspace
            </p>
            <NavigationLinks />
          </div>
          <UserFooter email={email} />
        </div>
      </details>
    </>
  );
}
