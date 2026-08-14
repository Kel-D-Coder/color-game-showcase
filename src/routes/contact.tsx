import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { ContactFooter } from "@/components/contact-footer";

const title = "Contact NewColorGame — Orders & Business Enquiries";
const description =
  "Reach the NewColorGame team on WhatsApp 08079088854 or giddlink@gmail.com for orders, stocking, schools and tournaments.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <h1 className="font-display text-7xl md:text-8xl leading-[0.9] mb-6">
          TALK TO <span className="text-game-red">US</span>
        </h1>
        <p className="text-lg text-white/60 max-w-xl">
          Orders, school sets, stockists and tournaments — strictly for business. We reply fastest
          on WhatsApp.
        </p>
      </header>

      <ContactFooter />
    </div>
  );
}