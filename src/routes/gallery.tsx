import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  beforeLoad: () => {
    throw redirect({ href: "/static/gallery.html", reloadDocument: true });
  },
});
