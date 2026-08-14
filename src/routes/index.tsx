import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { ContactFooter } from "@/components/contact-footer";
import heroBoard from "@/assets/hero-board.jpg";
import modeAdventure from "@/assets/mode-adventure.jpg";
import modeSpelling from "@/assets/mode-spelling.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const title = "NewColorGame — The Color + Alphabet Board Game from Nigeria";
const description =
  "NewColorGame is a color and alphabet board game invented in Nigeria. Two ways to play, for kids, teens and adults. Easy to learn, fun to play, hard to master.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <header className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Invented in Nigeria
              </span>
              <div className="flex gap-0.5">
                <div className="w-2 h-3 bg-naija" />
                <div className="w-2 h-3 bg-white" />
                <div className="w-2 h-3 bg-naija" />
              </div>
            </div>
            <h1 className="font-display text-7xl md:text-9xl leading-[0.9] mb-6">
              LEARN. PLAY. <span className="text-game-red">WIN.</span> REPEAT.
            </h1>
            <p className="text-lg text-white/60 max-w-md mb-8 leading-relaxed">
              The color + alphabet board game that's sweeping the nation. Easy to learn, fun to
              play, but hard to master.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#ways-to-play"
                className="bg-game-red px-8 py-4 rounded-lg font-display text-2xl tracking-wide hover:scale-105 transition-transform"
              >
                EXPLORE THE GAME
              </a>
              <div className="flex items-center gap-4 px-6 border border-white/20 rounded-lg">
                <span className="text-xs font-bold uppercase">Ages 5 to 99+</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-20 bg-game-red/20 blur-[120px] rounded-full" />
            <img
              src={heroBoard}
              width={1200}
              height={1200}
              alt="Top-down view of the NewColorGame board with colored letter tiles, tokens and color cards"
              className="relative w-full aspect-square object-cover border border-white/10 rounded-2xl"
            />
          </div>
        </div>
      </header>

      <section id="ways-to-play" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-5xl mb-4 italic">TWO WAYS TO PLAY</h2>
              <p className="text-white/40">
                Choose your challenge. Whether you're racing through the alphabet or spelling your
                way to victory, every move counts.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="size-4 bg-game-red rounded-full" />
              <div className="size-4 bg-game-yellow rounded-full" />
              <div className="size-4 bg-game-green rounded-full" />
              <div className="size-4 bg-game-blue rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-game-yellow transition-colors">
              <div className="text-game-yellow font-display text-2xl mb-4">MODE 01</div>
              <h3 className="text-3xl font-bold mb-4">Adventure: School to Home</h3>
              <p className="text-white/60 mb-8">
                Be the first to move from A to Z. Throw color cards to match the path and leapfrog
                your opponents.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <span className="size-2 bg-game-red rounded-full" /> Strategic card management
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="size-2 bg-game-green rounded-full" /> Alphabetical progression
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="size-2 bg-game-blue rounded-full" /> 2-4 Players
                </li>
              </ul>
              <img
                src={modeAdventure}
                loading="lazy"
                width={1200}
                height={800}
                alt="Game tokens moving along the A to Z path of colored letter tiles"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-game-red transition-colors">
              <div className="text-game-red font-display text-2xl mb-4">MODE 02</div>
              <h3 className="text-3xl font-bold mb-4">Spelling: Learn Words</h3>
              <p className="text-white/60 mb-8">
                Pick a word and match the colors to the letters. A fast-paced educational race that
                builds vocabulary.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <span className="size-2 bg-game-magenta rounded-full" /> Builds spelling skills
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="size-2 bg-game-yellow rounded-full" /> Vocabulary expansion
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="size-2 bg-game-green rounded-full" /> Perfect for kids
                </li>
              </ul>
              <img
                src={modeSpelling}
                loading="lazy"
                width={1200}
                height={800}
                alt="Color cards next to letter tiles spelling a word"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <h2 className="font-display text-6xl leading-tight">
                THE GAME
                <br />
                IN ACTION
              </h2>
            </div>
            {[
              { src: gallery1, alt: "School children playing NewColorGame together" },
              { src: gallery2, alt: "Hands holding colored playing cards over the board" },
              { src: gallery3, alt: "Close-up of the colorful alphabet board grid" },
              { src: gallery4, alt: "A family playing NewColorGame at the dining table" },
            ].map((image) => (
              <img
                key={image.src}
                src={image.src}
                loading="lazy"
                width={900}
                height={900}
                alt={image.alt}
                className="aspect-square object-cover border border-white/10 rounded-2xl"
              />
            ))}
            <div className="col-span-2 flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl py-10">
              <Link
                to="/gallery"
                className="font-display text-2xl tracking-widest hover:text-game-yellow"
              >
                VIEW FULL GALLERY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
