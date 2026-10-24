import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./sign-out-button";

const sections = [
  {
    name: "Organizations",
    description: "Manage the organizations in your workspace.",
  },
  {
    name: "Team access",
    description: "Review members and manage their access.",
  },
  {
    name: "Platform settings",
    description: "Configure your master workspace.",
  },
];

export default async function MasterPage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error && error.name !== "AuthSessionMissingError") {
    throw error;
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a href="/master" className="text-sm font-semibold tracking-[0.2em]">
            GANGLION<span className="text-indigo-400">.OS</span>
          </a>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="hidden text-sm text-zinc-400 sm:inline">
                  {user.email}
                </span>
                <SignOutButton />
              </>
            ) : (
              <a
                href="/login"
                className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Sign in
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <section className="mb-10">
          <p className="mb-3 text-sm font-medium text-indigo-300">
            MASTER WORKSPACE
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome back
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-400">
            You’re signed in to your master workspace. Manage your platform
            from one place.
          </p>
        </section>

        <section
          aria-label="Workspace management"
          className="grid gap-4 md:grid-cols-3"
        >
          {sections.map((section) => (
            <article
              key={section.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6"
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <h2 className="font-medium">{section.name}</h2>
                <span className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
                  Coming soon
                </span>
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                {section.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
