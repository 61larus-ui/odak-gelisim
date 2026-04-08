import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çocuğum okuyor ama anlamıyor | Odak Gelişim",
  description:
    "Çocuğunuz okuyor ama anlamıyorsa sebebi ve çözümü. Okuma ve anlama gelişimi için etkili yöntemler.",
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-slate-50/90 to-slate-100/80 px-4 py-12 text-slate-900 antialiased md:py-16">
      <article className="mx-auto w-full max-w-[700px]">
        <h1 className="text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl">
          Çocuğum okuyor ama anlamıyor, ne yapmalıyım?
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700">
          <p>Birçok veli aynı soruyu soruyor:</p>
          <p>“Çocuğum kitap okuyor ama sorduğumda hiçbir şey anlatamıyor.”</p>
          <p>Bu durum sandığınızdan çok daha yaygın.</p>
          <p>
            Ve çoğu zaman sorun, çocuğun isteksizliği değil… yanlış okuma alışkanlığıdır.
          </p>

          <hr className="border-slate-200/80" />

          <p>Çocuklar genelde iki şekilde okur:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>sadece gözleriyle (yüzeysel okuma)</li>
            <li>anlayarak ve zihinsel olarak (gerçek okuma)</li>
          </ul>
          <p>Eğer çocuk:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>hızlı geçiyorsa</li>
            <li>geri dönüp tekrar okuyorsa</li>
            <li>okuduğunu anlatamıyorsa</li>
          </ul>
          <p>bu, okuma var ama anlama yok demektir.</p>

          <hr className="border-slate-200/80" />

          <p>Bunun birkaç temel sebebi vardır:</p>
          <ul className="list-none space-y-2 pl-0">
            <li>Odak eksikliği</li>
            <li>Kelimeyi okur, anlamı kurmaz</li>
            <li>Okuma bir görev gibi yapılır</li>
          </ul>

          <hr className="border-slate-200/80" />

          <p>Velilerin yaptığı en büyük hata:</p>
          <p>“Daha çok kitap oku” demek.</p>
          <p>Ama sorun miktar değil, yöntemdir.</p>

          <hr className="border-slate-200/80" />

          <p>Çözüm:</p>
          <p>çocuğun okuma biçimini değiştirmektir.</p>

          <hr className="border-slate-200/80" />

          <p>Doğru sistem:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>birebir takip içerir</li>
            <li>çocuğa özel ilerler</li>
            <li>gelişim ölçülür</li>
            <li>anlama geliştirilir</li>
          </ul>

          <hr className="border-slate-200/80" />

          <p>Her çocuk okuyabilir.</p>
          <p>Ama doğru şekilde okumayı öğrenmelidir.</p>

          <hr className="border-slate-200/80" />

          <p>
            Eğer siz de çocuğunuzun gelişmesini istiyorsanız, Odak Gelişim bu süreci
            birebir takip eder.
          </p>
        </div>
      </article>
    </main>
  );
}
