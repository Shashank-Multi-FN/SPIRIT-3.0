import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { CRMInstances, type CRMInstance } from "@/components/master/crm-instances";
import { DashboardHeader } from "@/components/master/dashboard-header";
import { QuickActions } from "@/components/master/quick-actions";
import { RecentActivity, type ActivityRecord } from "@/components/master/recent-activity";
import { Sidebar } from "@/components/master/sidebar";
import { StatCard, type DashboardStat } from "@/components/master/stat-card";

export const instant = false;

const stats: DashboardStat[] = [
  {
    label: "Total CRM Instances",
    value: "—",
    helper: "No data source connected",
    icon: "crm",
    tone: "indigo",
  },
  {
    label: "Active CRM Instances",
    value: "—",
    helper: "No data source connected",
    icon: "activity",
    tone: "emerald",
  },
  {
    label: "Total Organizations",
    value: "—",
    helper: "No data source connected",
    icon: "building",
    tone: "sky",
  },
  {
    label: "Total Users",
    value: "—",
    helper: "No data source connected",
    icon: "users",
    tone: "amber",
  },
];

const crmInstances: CRMInstance[] = [];
const recentActivity: ActivityRecord[] = [];

export default async function MasterPage() {
  await connection();

  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error && error.name !== "AuthSessionMissingError") {
    throw error;
  }

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Sidebar email={user.email ?? "Account"} />

      <div className="md:pl-64">
        <div className="flex h-[72px] items-center justify-between border-b border-white/[0.07] px-5 md:hidden">
          <a href="/master" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
              G
            </span>
            <span className="text-xs font-semibold tracking-[0.14em]">
              GANGLION<span className="text-indigo-400">.OS</span>
            </span>
          </a>
          <Sidebar email={user.email ?? "Account"} />
        </div>

        <DashboardHeader email={user.email ?? "Account"} />

        <main id="overview" className="mx-auto max-w-[1600px] px-5 py-7 sm:px-8 sm:py-9">
          <div className="mb-6">
            <p className="text-xs leading-5 text-zinc-500">
              A clear view of your platform and workspace
            </p>
          </div>

          <section
            id="statistics"
            aria-label="Platform statistics"
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </section>

          <div className="mt-6 grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <CRMInstances instances={crmInstances} />
            <QuickActions />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <RecentActivity items={recentActivity} />
            <section
              id="organizations"
              aria-labelledby="workspace-status-title"
              className="rounded-xl border border-white/[0.08] bg-[#101014] p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="workspace-status-title"
                    className="text-sm font-semibold text-zinc-100"
                  >
                    Workspace status
                  </h2>
                  <p className="mt-1 text-xs text-zinc-500">
                    Your platform foundation
                  </p>
                </div>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[10px] text-zinc-400">
                  Ready to configure
                </span>
              </div>
              <p className="mt-6 text-xs leading-5 text-zinc-400">
                Your master workspace is ready. Connect your organization and
                CRM data when those features are configured.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
