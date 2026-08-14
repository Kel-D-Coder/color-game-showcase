export function ContactFooter() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="font-display text-5xl mb-8">BRING THE GAME HOME</h2>
            <p className="text-white/50 mb-12 text-lg">
              Interested in stocking NewColorGame or hosting a tournament? Get in touch with our
              team today.
            </p>
            <div className="space-y-6">
              <a href="https://wa.me/2348079088854" className="flex items-center gap-4">
                <div className="size-12 shrink-0 rounded-full bg-game-green/20 flex items-center justify-center text-game-green text-[9px] font-bold uppercase">
                  Chat
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">
                    WhatsApp — for business
                  </div>
                  <div className="text-xl">08079088854</div>
                </div>
              </a>
              <a href="mailto:giddlink@gmail.com" className="flex items-center gap-4">
                <div className="size-12 shrink-0 rounded-full bg-game-blue/20 flex items-center justify-center text-game-blue text-[9px] font-bold uppercase">
                  Mail
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">
                    Direct inquiry
                  </div>
                  <div className="text-xl">giddlink@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 tracking-widest">
          <div>© 2026 NEWCOLORGAME. CREATED BY GIDEON ZION.</div>
          <div className="flex gap-8">
            <a href="https://instagram.com/newcolorgame" className="hover:text-white">
              INSTAGRAM
            </a>
            <a href="https://facebook.com/newcolorgame" className="hover:text-white">
              FACEBOOK
            </a>
            <a href="https://tiktok.com/@newcolorgame" className="hover:text-white">
              TIKTOK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const fieldClass =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-game-yellow";
const labelClass =
  "block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2";

export function ContactForm() {
  return (
    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
      <form
        className="space-y-4"
        action="mailto:giddlink@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" rows={4} required className={fieldClass} />
        </div>
        <button
          type="submit"
          className="w-full bg-game-yellow text-black font-display text-2xl py-4 rounded-lg hover:bg-white transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}