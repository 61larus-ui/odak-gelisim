"use client";

import { Playfair_Display } from "next/font/google";

const brandWordmark = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const WHATSAPP_NUMBER = "905349104947";
const INSTAGRAM_URL = "https://www.instagram.com/odak.gelisimm/";
const MAPS_URL = "https://maps.google.com/";
const HERO_IMAGE = "/images/hero-education-visual.jpg";

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_BILGI_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Merhaba%2C%20Odak%20Gelişim%20hakkında%20bilgi%20almak%20istiyorum.`;
const WHATSAPP_ON_GORUSME_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Merhaba%2C%20ön%20görüşme%20talep%20etmek%20istiyorum.`;
const WHATSAPP_TELEFON_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Merhaba%2C%20telefonla%20görüşmek%20istiyorum.`;

const waNewTab = { target: "_blank" as const, rel: "noopener noreferrer" };

const ctaPrimaryClass =
  "inline-flex items-center justify-center rounded-xl bg-slate-900 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

const ctaSecondaryClass =
  "inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 px-7 py-3.5 text-center text-sm font-semibold text-slate-800 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-amber-200/60 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400";

const ctaDarkPrimaryClass =
  "inline-flex items-center justify-center rounded-xl bg-white px-9 py-4 text-center text-base font-semibold text-slate-900 shadow-lg shadow-black/25 transition-all duration-300 hover:bg-stone-50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99]";

const ctaDarkSecondaryClass =
  "inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-9 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:border-amber-200/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/50";

const programs = [
  { title: "Anlayarak Hızlı Okuma", badge: "HIZ & ANLAMA" },
  { title: "Akıcı Okuma", badge: "AKICILIK" },
  { title: "Okuma Güçlendirme", badge: "TEMEL GÜÇ" },
  { title: "Hata Analizi ve Takip", badge: "TAKIP" },
] as const;

function EducatorImageSlot() {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-2xl md:mx-0">

      <img
        src="/educator.jpg"
        alt="Okuma ve anlama gelişimi üzerine eğitmen ile yüz yüze eğitim"
        className="h-full w-full object-cover object-center"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

    </div>
  );
}

const navLinks = [
  { href: "#programlar", label: "Programlar" },
  { href: "#surec", label: "Süreç" },
  { href: "#video", label: "Video" },
  { href: "#egitmen", label: "Eğitmen" },
  { href: "#sss", label: "S.S.S." },
  { href: WHATSAPP_HREF, label: "İletişim", external: true },
] as const;

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-stone-50 via-slate-50/90 to-slate-100/80 pb-28 text-slate-900 antialiased md:pb-0">

      {/* STICKY ANCHOR NAV */}
      <nav
        aria-label="Sayfa bölümleri"
        className="sticky top-0 z-40 border-b border-slate-200/70 bg-stone-50/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-2.5">
          <div className="min-w-0 shrink-0 self-center text-center lg:self-auto lg:text-left">
            <p
              className={`${brandWordmark.className} inline-block max-w-[17rem] py-1 pl-0.5 pr-2 text-slate-900 sm:py-2 sm:pr-4 lg:py-3.5 lg:pr-6`}
            >
              <span className="block text-[1.05rem] font-semibold leading-[1.08] tracking-[0.032em] sm:text-[1.2rem] lg:text-[1.31rem] lg:leading-[1.06] lg:tracking-[0.038em] xl:text-[1.42rem]">
                Şeyma Mazlum
              </span>
              <span className="mt-[0.08em] block text-[0.95rem] font-normal leading-[1.08] tracking-[0.038em] text-slate-600 sm:text-[1.02rem] lg:mt-[0.1em] lg:text-[1.06rem] lg:leading-[1.05] lg:tracking-[0.042em] lg:text-slate-600 xl:text-[1.12rem]">
                Alemdağ
              </span>
            </p>
          </div>
          <ul className="flex min-h-[44px] w-full min-w-0 flex-nowrap items-center justify-start gap-1 overflow-x-auto overscroll-x-contain pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center lg:w-auto lg:justify-end lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <li key={link.label} className="shrink-0">
                <a
                  href={link.href}
                  {...("external" in link && link.external ? waNewTab : {})}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-2.5 py-2 text-[11px] font-medium text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 sm:px-3 sm:text-xs"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="scroll-mt-28 mx-auto w-full max-w-6xl px-4 pt-8 pb-6 sm:px-6 md:pt-12 md:pb-10 lg:pt-16 lg:pb-12">
        <div className="grid items-center gap-6 min-[480px]:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="min-w-0 max-w-3xl">
            <h1 className="text-[1.65rem] font-bold leading-[1.12] tracking-tight text-slate-900 min-[400px]:text-3xl sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl">
              Okuma sadece hız değil,
              <br /> doğru anlama ve gelişim sürecidir.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-7 sm:text-lg">
              Odak Gelişim, ilkokul, ortaokul ve yetişkinler için;
              anlayarak hızlı okuma, akıcı okuma ve okuma güçlendirme
              süreçlerini bireysel seviyeye göre planlayan bir eğitim yaklaşımı sunar.
            </p>

            <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_BILGI_HREF} {...waNewTab} className={`${ctaPrimaryClass} w-full min-h-[48px] sm:w-auto sm:min-h-0`}>
                Bilgi Al
              </a>
              <a href={WHATSAPP_ON_GORUSME_HREF} {...waNewTab} className={`${ctaSecondaryClass} w-full min-h-[48px] sm:w-auto sm:min-h-0`}>
                Ön Görüşme Talep Et
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full min-w-0 max-h-[min(400px,52vh)] overflow-hidden rounded-2xl bg-gray-200 shadow-lg sm:aspect-auto sm:h-[min(360px,48vh)] sm:max-h-[400px] md:h-[400px] md:max-h-none">
            <img
              src="/hero-reading-session.jpg"
              alt="Çocuk ile birebir okuma geliştirme eğitimi"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-slate-200/70 bg-white/50 py-8 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur-md md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-4 text-sm text-slate-600 sm:gap-3 sm:px-6 md:justify-start">
          {[
            { icon: "🧠", text: "Bireysel yaklaşım" },
            { icon: "📊", text: "Seviye odaklı ilerleme" },
            { icon: "🎯", text: "Hata analizi desteği" },
          ].map((item) => (
            <span
              key={item.text}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-stone-50/90 border border-slate-200/80 shadow-sm shadow-slate-900/5"
            >
              <span className="text-base opacity-90" aria-hidden>{item.icon}</span>
              <span className="text-slate-700">{item.text}</span>
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:py-12 lg:py-16">
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Çocuğunuz bu sorunlardan birini yaşıyor olabilir
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
          Her öğrenci farklı bir tempoda ilerler; okumayla ilgili ihtiyaçlar kişiden kişiye değişebilir.
          Bu liste, tanıdık gelebilecek durumları hatırlatmak içindir — endişe yerine, birlikte netleştirebileceğimiz bir başlangıç noktası olarak düşünebilirsiniz.
        </p>

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
          {[
            "Yavaş okuma",
            "Okuduğunu anlamada zorlanma",
            "Dikkat dağılması",
            "Okuma hataları",
            "Akıcılık eksikliği",
            "Sınavlarda süre problemi",
          ].map((item) => (
            <div
              key={item}
              className="group min-w-0 rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-slate-300/80 hover:shadow-md sm:p-6"
            >
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 ring-1 ring-slate-200/80"
                  aria-hidden
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className="min-w-0 break-words pt-0.5 leading-snug text-slate-800">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VELİ — ortak mesaj */}
      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-8 lg:py-10">
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Velilerin en sık yaşadığı durum
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
          Çocuk okuyor gibi görünse de, asıl sorun çoğu zaman okuma biçimidir.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
          <div className="min-w-0 rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-sm shadow-slate-900/5 sm:p-6">
            <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
              Sadece okumak yetmez
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Birçok çocuk satırları takip eder ama metnin anlamını kuramaz. Bu yüzden okuma var
              gibi görünür, fakat gerçek öğrenme oluşmaz.
            </p>
          </div>
          <div className="min-w-0 rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-sm shadow-slate-900/5 sm:p-6">
            <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
              Sorun çoğu zaman çocuk değil, yöntemdir
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Daha çok okumak her zaman çözüm olmaz. Yanlış alışkanlık tekrar ettikçe çocuk
              zorlanır, sıkılır ve özgüveni düşebilir.
            </p>
          </div>
          <div className="min-w-0 rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-sm shadow-slate-900/5 sm:p-6">
            <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
              Doğru sistemle gelişim mümkündür
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Odak, anlama ve birebir takip birlikte ilerlediğinde çocuk sadece okumaz; anlar,
              yorumlar ve gelişimini hissetmeye başlar.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programlar" className="scroll-mt-28 border-y border-slate-200/50 bg-gradient-to-b from-slate-100/40 to-slate-50/60 py-8 md:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Eğitim Alanlarımız
          </h2>

          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:h-[220px] sm:rounded-[28px] md:h-[320px]">
            <img
              src="/program-hero.png"
              alt="Odak Gelişim eğitim alanları — hızlı okuma, akıcılık ve okuma güçlendirme programları"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((item) => (
              <div
                key={item.title}
                className="group min-w-0 cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-6"
              >
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                  {item.badge}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mt-3">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="surec" className="scroll-mt-28 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:py-12 lg:py-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:mb-8">
          Nasıl İlerliyoruz?
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
          {[
            "Ön görüşme",
            "Seviye değerlendirme",
            "Kişiye uygun plan",
            "Takip ve geri bildirim",
          ].map((step) => (
            <div
              key={step}
              className="p-6 border border-slate-200/80 rounded-2xl text-center bg-white/90 shadow-sm shadow-slate-900/5"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="scroll-mt-28 border-t border-slate-200/50 bg-stone-50/80 py-8 md:py-12 lg:py-16">
        <div className="mx-auto w-full min-w-0 max-w-[800px] px-4 sm:px-6">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.22em]">
            İnceleme
          </p>
          <h2 className="mt-2 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Eğitim sürecini yakından inceleyin
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-slate-600 leading-relaxed">
            Burada ne yapıldığını açıkça görebilirsiniz — süreç, yaklaşım ve uygulamaya dair net bir ön izleme.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_8px_32px_rgba(15,23,42,0.08)] sm:p-4 md:p-6">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/video/video-poster.jpg"
              className="aspect-video w-full max-w-full rounded-xl"
            >
              <source src="/video/odak-tanitim.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="mt-4 text-center text-sm leading-relaxed text-slate-500">
            Programın yaklaşımını ve ilerleme sürecini kısa videoda izleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* EDUCATOR */}
      <section id="egitmen" className="scroll-mt-28 border-t border-slate-200/50 bg-gradient-to-b from-slate-100/50 to-stone-50/90 py-8 md:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10 lg:gap-12">
            <div className="flex min-w-0 justify-center md:justify-start">
              <EducatorImageSlot />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Eğitmen Yaklaşımı
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Eğitmen</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Türk Dili ve Edebiyatı öğretmeni olarak, öğrencinin okuma sürecini
                bireysel ihtiyaçlarına göre planlayan ve gelişimi takip eden bir yaklaşım benimsenir.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "bireysel seviyeye göre planlama",
                  "düzenli takip yaklaşımı",
                  "okuma sürecine bütüncül bakış",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="scroll-mt-28 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:py-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:mb-8">
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Eğitimler birebir mi grup mu?",
              a: "Hem birebir hem grup seçenekleri sunulmaktadır.",
            },
            {
              q: "Eğitimler nerede yapılıyor?",
              a: "Tüm eğitimler Trabzon'da yüz yüze gerçekleştirilmektedir.",
            },
            {
              q: "Ne kadar sürede gelişim görülür?",
              a: "Her öğrencinin seviyesi farklıdır, süreç bireysel ilerler.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm shadow-slate-900/5"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="min-w-0 flex-1 break-words pr-1 font-semibold leading-snug text-slate-900 sm:pr-2">
                  {item.q}
                </h3>
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-slate-50 text-slate-400 text-lg font-light leading-none"
                  aria-hidden
                >
                  +
                </span>
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8 text-center text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:px-6 md:py-12 lg:py-16">
        <p className="mx-auto max-w-xl text-sm font-medium text-slate-300/95">
          Trabzon&apos;da yüz yüze eğitim — önce dinleme, sonra net bir yol haritası.
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-[2rem]">
          Çocuğunuzun okuma sürecini birlikte değerlendirelim
        </h2>

        <div className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <a href={WHATSAPP_HREF} {...waNewTab} className={`${ctaDarkPrimaryClass} w-full min-h-[48px] sm:w-auto sm:min-h-0`}>
            WhatsApp ile iletişim
          </a>
          <a href={WHATSAPP_ON_GORUSME_HREF} {...waNewTab} className={`${ctaDarkSecondaryClass} w-full min-h-[48px] sm:w-auto sm:min-h-0`}>
            Ön görüşme al
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-slate-400">
          Size uygun eğitim sürecini birlikte değerlendirebiliriz.
        </p>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="scroll-mt-28 border-t border-slate-200/60 bg-stone-50/90 px-4 py-8 sm:px-6 md:py-12 lg:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Sorularınız için buradayız
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Trabzon&apos;da yüz yüze eğitim süreci hakkında bilgi almak veya ön görüşme planlamak için aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-amber-700/80" aria-hidden>·</span>
                bireysel değerlendirme
              </li>
              <li className="flex gap-2">
                <span className="text-amber-700/80" aria-hidden>·</span>
                yüz yüze süreç
              </li>
              <li className="flex gap-2">
                <span className="text-amber-700/80" aria-hidden>·</span>
                bilgi alma ve ön görüşme
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-1 shadow-lg shadow-slate-900/8">
            <ul className="divide-y divide-slate-100 rounded-xl overflow-hidden">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  {...waNewTab}
                  className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-slate-400"
                >
                  <span>WhatsApp</span>
                  <span className="text-xs font-normal text-slate-500">Mesaj gönder</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_TELEFON_HREF}
                  {...waNewTab}
                  className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-slate-400"
                >
                  <span>Telefon</span>
                  <span className="text-xs font-normal text-slate-500">Ara</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-slate-400"
                >
                  <span>Instagram</span>
                  <span className="text-xs font-normal text-slate-500">Profili aç</span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start gap-1 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-slate-400"
                >
                  <span className="text-sm font-medium text-slate-800">Konum / harita</span>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    Konum bilgisi görüşme sırasında paylaşılacaktır.
                  </span>
                  <span className="text-xs font-medium text-slate-600 mt-1">Haritayı aç →</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-white/95 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-lg gap-2 sm:gap-3">
          <a
            href={WHATSAPP_HREF}
            {...waNewTab}
            className="flex min-h-[48px] min-w-0 flex-1 items-center justify-center rounded-xl bg-slate-900 px-2 py-3 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/20 transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            WhatsApp
          </a>
          <a
            href={WHATSAPP_TELEFON_HREF}
            {...waNewTab}
            className="flex min-h-[48px] min-w-0 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-2 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          >
            Ara
          </a>
        </div>
      </div>

    </main>
  );
}
