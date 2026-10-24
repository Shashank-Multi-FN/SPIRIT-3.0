import { DashboardIcon } from "./dashboard-icons";

export function DashboardHeader({ email }: { email: string }) {
  const initials = email.slice(0, 1).toUpperCase() || "U";

  return (
    <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-white/[0.07] px-5 sm:px-8">
      <div className="min-w-0">
        <h1 className="truncate text-lg font-semibold tracking-tight text-zinc-100">
          Master Dashboard
        </h1>
        <p className="hidden text-xs text-zinc-500 sm:block">
          Platform overview and administration
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <label className="hidden h-9 w-52 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 sm:flex lg:w-64">
          <DashboardIcon name="search" className="h-4 w-4 shrink-0 text-zinc-500" />
          <input
            aria-label="Search dashboard"
            type="search"
            placeholder="Search..."
            className="min-w-0 flex-1 bg-transparent text-xs text-zinc-200 outline-none placeholder:text-zinc-600"
          />
          <span className="rounded border border-white/[0.08] px-1 py-0.5 text-[10px] text-zinc-600">
            /
          </span>
        </label>

        <button
          type="button"
          aria-label="Notifications"
          title="No new notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-100"
        >
          <DashboardIcon name="bell" className="h-[18px] w-[18px]" />
        </button>

        <div className="hidden h-8 w-px bg-white/[0.08] sm:block" />
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-zinc-800 text-xs font-semibold text-zinc-200"
          aria-label={`Signed in as ${email}`}
          title={email}
        >
          {initials}
        </div>
      </div>
    </header>
  );
}
