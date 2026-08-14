import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import { SiteNav } from "@/components/site-nav";
import { ContactFooter } from "@/components/contact-footer";
import heroBoard from "@/assets/hero-board.jpg";
import modeAdventure from "@/assets/mode-adventure.jpg";
import modeSpelling from "@/assets/mode-spelling.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const title = "Gallery — NewColorGame in Action";
const description =
  "Photos of the NewColorGame board, cards and tokens, plus families and school children playing the game across Nigeria.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: heroBoard, alt: "Top-down view of the full NewColorGame board", caption: "The board" },
  { src: gallery3, alt: "Close-up of colored alphabet tiles", caption: "Letter tiles" },
  { src: gallery2, alt: "Hands holding colored playing cards", caption: "Color cards" },
  { src: modeAdventure, alt: "Tokens along the A to Z path", caption: "Adventure mode" },
  { src: modeSpelling, alt: "Cards and letter tiles spelling a word", caption: "Spelling mode" },
  { src: gallery1, alt: "School children playing NewColorGame", caption: "School to home" },
  { src: gallery4, alt: "A family playing NewColorGame at a table", caption: "Family night" },
];

function GalleryPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <h1 className="font-display text-7xl md:text-8xl leading-[0.9] mb-6">
          THE GAME <span className="text-game-yellow">IN ACTION</span>
        </h1>
        <p className="text-lg text-white/60 max-w-xl">
          Board, cards, tokens and the people playing them — from classrooms to living rooms.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden border border-white/10 rounded-2xl bg-white/5"
            >
              <img
                src={photo.src}
                loading="lazy"
                width={900}
                height={900}
                alt={photo.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}