import { useState, type FormEvent } from "react";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;

    if (!name || !email) {
      setError(true);
      return;
    }

    setSubmitted(true);
    setError(false);
  };

  if (submitted) {
    return (
      <div className="card-surface text-center">
        <div className="mb-4 text-4xl">🎉</div>
        <p className="text-lg font-bold text-energy">{messages.formSuccess}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "card-surface"}>
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-bold">{messages.trialCta}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{messages.noCommitment}</p>
        </div>
      )}
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input name="name" placeholder="Your Name" required className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-energy focus:outline-none" />
        <input name="email" type="email" placeholder="Email Address" required className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-energy focus:outline-none" />
        <input name="phone" type="tel" placeholder="Phone Number" className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-energy focus:outline-none" />
        <select name="goal" className="rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:border-energy focus:outline-none">
          <option value="">Select Your Goal</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
          <option value="general-fitness">General Fitness</option>
          <option value="sports-performance">Sports Performance</option>
        </select>
      </div>
      {error && <p className="mt-3 text-sm text-destructive">{messages.formError}</p>}
      <button type="submit" className="btn-energy mt-6 w-full">
        {buttons.submitTrial.text}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">{messages.urgency}</p>
    </form>
  );
}
