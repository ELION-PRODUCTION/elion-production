import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function Hero({ eyebrow, title, description, actions }: HeroProps) {
  return (
    <section className="hero">
      <div className="shell">
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className="hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
