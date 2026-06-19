"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/icons/Logo";
import { DEFAULT_CONTENT, THERAPY_ICONS, type SiteContent, type TherapyIcon } from "@/lib/content";

const ICON_LABELS: Record<TherapyIcon, string> = {
  needle: "Needle",
  point: "Point",
  cup: "Cup",
  hand: "Hand",
  energy: "Energy",
  wave: "Wave",
  flame: "Flame",
};

function RemoveButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-dark-sage/60 transition hover:bg-red-50 hover:text-red-600"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-soft-green sm:p-8">
      <h2 className="text-lg font-semibold text-dark-sage">{title}</h2>
      {description && <p className="mt-1 text-sm text-dark-sage/70">{description}</p>}
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-soft-green px-3 py-2 text-sm text-dark-sage outline-none transition-colors focus:border-sage";
const labelClass = "text-sm font-medium text-dark-sage";
const addButtonClass =
  "rounded-full border border-sage px-4 py-2 text-sm font-semibold text-sage transition hover:bg-sage hover:text-white";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [storageConfigured, setStorageConfigured] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "error"; message: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/content")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setContent(data.content);
        setStorageConfigured(data.storageConfigured);
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleSave() {
    if (!content) return;
    setSaving(true);
    setStatus(null);
    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setSaving(false);
    if (res.ok) {
      setStatus({ type: "ok", message: "Changes saved — the live site is updated." });
    } else {
      const data = await res.json().catch(() => null);
      setStatus({ type: "error", message: data?.error || "Failed to save changes." });
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  if (loading) {
    return <main className="flex min-h-screen items-center justify-center bg-warm-grey text-dark-sage">Loading…</main>;
  }

  if (!content) {
    return null;
  }

  return (
    <main className="min-h-screen bg-warm-grey pb-24">
      <header className="sticky top-0 z-10 border-b border-soft-green bg-warm-grey/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-2 px-4 py-3 sm:px-6 sm:py-4">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="text-sm font-medium text-dark-sage transition hover:text-sage">
              View site ↗
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-soft-green px-3 py-2 text-sm font-semibold text-dark-sage transition hover:bg-soft-green sm:px-4"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        {!storageConfigured && (
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Storage isn&apos;t connected yet, so changes can&apos;t be saved. Ask your developer to connect a
            KV/Redis database to this project in the Vercel dashboard (Storage tab), then redeploy.
          </p>
        )}

        <Section title="Welcome Section" description="The introduction text shown on the homepage.">
          <div>
            <label className={labelClass}>Tagline</label>
            <input
              className={`mt-1 ${inputClass}`}
              value={content.site.tagline}
              onChange={(e) => setContent({ ...content, site: { ...content.site, tagline: e.target.value } })}
            />
          </div>
          <div>
            <label className={labelClass}>Welcome paragraphs</label>
            <div className="mt-1 space-y-3">
              {content.site.welcomeParagraphs.map((para, i) => (
                <div key={i} className="flex gap-2">
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={para}
                    onChange={(e) => {
                      const next = [...content.site.welcomeParagraphs];
                      next[i] = e.target.value;
                      setContent({ ...content, site: { ...content.site, welcomeParagraphs: next } });
                    }}
                  />
                  <RemoveButton
                    label="Remove paragraph"
                    onClick={() => {
                      const next = content.site.welcomeParagraphs.filter((_, idx) => idx !== i);
                      setContent({ ...content, site: { ...content.site, welcomeParagraphs: next } });
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className={`mt-3 ${addButtonClass}`}
              onClick={() =>
                setContent({
                  ...content,
                  site: { ...content.site, welcomeParagraphs: [...content.site.welcomeParagraphs, ""] },
                })
              }
            >
              + Add paragraph
            </button>
          </div>
        </Section>

        <Section title="Therapies" description="Cards shown in the Therapies section.">
          {content.therapies.map((therapy, i) => (
            <div key={i} className="rounded-xl border border-soft-green p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="grid w-full gap-3 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      className={`mt-1 ${inputClass}`}
                      value={therapy.name}
                      onChange={(e) => {
                        const next = [...content.therapies];
                        next[i] = { ...next[i], name: e.target.value };
                        setContent({ ...content, therapies: next });
                      }}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Photo</label>
                    <select
                      className={`mt-1 ${inputClass}`}
                      value={therapy.icon}
                      onChange={(e) => {
                        const next = [...content.therapies];
                        next[i] = { ...next[i], icon: e.target.value as TherapyIcon };
                        setContent({ ...content, therapies: next });
                      }}
                    >
                      {THERAPY_ICONS.map((icon) => (
                        <option key={icon} value={icon}>
                          {ICON_LABELS[icon]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <RemoveButton
                  label="Remove therapy"
                  onClick={() => setContent({ ...content, therapies: content.therapies.filter((_, idx) => idx !== i) })}
                />
              </div>
              <div className="mt-3">
                <label className={labelClass}>Description</label>
                <textarea
                  rows={3}
                  className={`mt-1 ${inputClass}`}
                  value={therapy.description}
                  onChange={(e) => {
                    const next = [...content.therapies];
                    next[i] = { ...next[i], description: e.target.value };
                    setContent({ ...content, therapies: next });
                  }}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className={addButtonClass}
            onClick={() =>
              setContent({
                ...content,
                therapies: [...content.therapies, { name: "", description: "", icon: "needle" }],
              })
            }
          >
            + Add therapy
          </button>
        </Section>

        <Section title="Conditions We Treat" description="The list of conditions shown on the homepage.">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {content.conditions.map((condition, i) => (
              <div key={i} className="flex gap-2">
                <input
                  className={inputClass}
                  value={condition}
                  onChange={(e) => {
                    const next = [...content.conditions];
                    next[i] = e.target.value;
                    setContent({ ...content, conditions: next });
                  }}
                />
                <RemoveButton
                  label="Remove condition"
                  onClick={() => setContent({ ...content, conditions: content.conditions.filter((_, idx) => idx !== i) })}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className={addButtonClass}
            onClick={() => setContent({ ...content, conditions: [...content.conditions, ""] })}
          >
            + Add condition
          </button>
        </Section>

        <Section title="Price List" description="Treatment, duration and price shown on the homepage.">
          <div className="space-y-3">
            {content.priceList.map((row, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="grid w-full gap-2 sm:grid-cols-3">
                  <input
                    placeholder="Treatment"
                    className={inputClass}
                    value={row.treatment}
                    onChange={(e) => {
                      const next = [...content.priceList];
                      next[i] = { ...next[i], treatment: e.target.value };
                      setContent({ ...content, priceList: next });
                    }}
                  />
                  <input
                    placeholder="Duration"
                    className={inputClass}
                    value={row.duration}
                    onChange={(e) => {
                      const next = [...content.priceList];
                      next[i] = { ...next[i], duration: e.target.value };
                      setContent({ ...content, priceList: next });
                    }}
                  />
                  <input
                    placeholder="Price"
                    className={inputClass}
                    value={row.price}
                    onChange={(e) => {
                      const next = [...content.priceList];
                      next[i] = { ...next[i], price: e.target.value };
                      setContent({ ...content, priceList: next });
                    }}
                  />
                </div>
                <RemoveButton
                  label="Remove price row"
                  onClick={() => setContent({ ...content, priceList: content.priceList.filter((_, idx) => idx !== i) })}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className={addButtonClass}
            onClick={() =>
              setContent({ ...content, priceList: [...content.priceList, { treatment: "", duration: "", price: "" }] })
            }
          >
            + Add row
          </button>
        </Section>

        <Section title="Disclaimer">
          <textarea
            rows={4}
            className={inputClass}
            value={content.disclaimer}
            onChange={(e) => setContent({ ...content, disclaimer: e.target.value })}
          />
        </Section>

        <Section title="Contact Details" description="Shown in the Contact section and footer.">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Phone</label>
              <input
                className={`mt-1 ${inputClass}`}
                value={content.contact.phone}
                onChange={(e) => setContent({ ...content, contact: { ...content.contact, phone: e.target.value } })}
              />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                className={`mt-1 ${inputClass}`}
                value={content.contact.email}
                onChange={(e) => setContent({ ...content, contact: { ...content.contact, email: e.target.value } })}
              />
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <input
                className={`mt-1 ${inputClass}`}
                value={content.contact.address}
                onChange={(e) => setContent({ ...content, contact: { ...content.contact, address: e.target.value } })}
              />
            </div>
            <div>
              <label className={labelClass}>Opening hours</label>
              <input
                className={`mt-1 ${inputClass}`}
                value={content.contact.hours}
                onChange={(e) => setContent({ ...content, contact: { ...content.contact, hours: e.target.value } })}
              />
            </div>
            <div>
              <label className={labelClass}>Instagram URL</label>
              <input
                className={`mt-1 ${inputClass}`}
                value={content.contact.instagram}
                onChange={(e) => setContent({ ...content, contact: { ...content.contact, instagram: e.target.value } })}
              />
            </div>
            <div>
              <label className={labelClass}>Facebook URL</label>
              <input
                className={`mt-1 ${inputClass}`}
                value={content.contact.facebook}
                onChange={(e) => setContent({ ...content, contact: { ...content.contact, facebook: e.target.value } })}
              />
            </div>
          </div>
        </Section>

        <button
          type="button"
          className="rounded-full border border-dark-sage/30 px-4 py-2 text-sm text-dark-sage/70 transition hover:bg-soft-green"
          onClick={() => setContent(DEFAULT_CONTENT)}
        >
          Reset all fields to defaults
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-soft-green bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          {status ? (
            <p className={`text-sm ${status.type === "ok" ? "text-sage" : "text-red-600"}`}>{status.message}</p>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="rounded-full bg-sage px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-dark-sage disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </main>
  );
}
