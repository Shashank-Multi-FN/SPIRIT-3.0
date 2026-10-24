import { DashboardIcon } from "./dashboard-icons";

export type CRMInstance = {
  id: string;
  name: string;
  organization: string;
  status: "Active" | "Paused";
  createdAt: string;
};

export function CRMInstances({
  instances,
}: {
  instances: CRMInstance[];
}) {
  return (
    <section
      id="crm-instances"
      aria-labelledby="crm-instances-title"
      className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#101014]"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 sm:px-6">
        <div>
          <h2 id="crm-instances-title" className="text-sm font-semibold text-zinc-100">
            CRM Instances
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Manage your deployed CRM workspaces
          </p>
        </div>
        <button
          type="button"
          disabled
          title="CRM creation will be available when workspace data is connected."
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3.5 py-2 text-xs font-medium text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <DashboardIcon name="plus" className="h-4 w-4" />
          Create CRM
        </button>
      </div>

      {instances.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-xs">
            <thead className="text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              <tr>
                <th className="px-6 py-3 font-medium">CRM name</th>
                <th className="px-6 py-3 font-medium">Organization</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Created</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {instances.map((instance) => (
                <tr key={instance.id}>
                  <td className="px-6 py-4 font-medium text-zinc-200">{instance.name}</td>
                  <td className="px-6 py-4 text-zinc-400">{instance.organization}</td>
                  <td className="px-6 py-4">{instance.status}</td>
                  <td className="px-6 py-4 text-zinc-400">{instance.createdAt}</td>
                  <td className="px-6 py-4">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center px-5 py-12 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-500">
            <DashboardIcon name="crm" />
          </span>
          <h3 className="mt-4 text-sm font-medium text-zinc-200">
            No CRM instances yet
          </h3>
          <p className="mt-1.5 max-w-sm text-xs leading-5 text-zinc-500">
            CRM instances will appear here after you connect your workspace data.
          </p>
          <button
            type="button"
            disabled
            title="CRM creation will be available when workspace data is connected."
            className="mt-5 rounded-lg border border-white/[0.1] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Create your first CRM
          </button>
        </div>
      )}
    </section>
  );
}
