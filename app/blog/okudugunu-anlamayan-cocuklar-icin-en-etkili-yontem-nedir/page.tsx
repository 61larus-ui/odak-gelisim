import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Okuduğunu anlamayan çocuklar için en etkili yöntem nedir? | Odak Gelişim",
  description:
    "Okuduğunu anlamayan çocuklar için en etkili yöntemler, dikkat ve anlama gelişimi üzerine sade bir rehber.",
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-slate-50/90 to-slate-100/80 px-4 py-12 text-slate-900 antialiased md:py-16">
      <article className="mx-auto w-full max-w-[700px]">
        <h1 className="text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl">
          Okuduğunu anlamayan çocuklar için en etkili yöntem nedir?
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700">
          <p>Birçok çocuk okur.</p>
          <p>Ama çok azı gerçekten anlayarak okur.</p>
          <p>
            Bu fark, sadece ders başarısını değil, çocuğun özgüvenini ve öğrenme
            hızını da doğrudan etkiler.
          </p>
          <p>Peki okuduğunu anlamayan bir çocuk için en etkili yöntem nedir?</p>

          <hr className="border-slate-200/80" />

          <p>Genelde problem şu şekilde başlar:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>çocuk metni hızlı geçer</li>
            <li>cümleleri birbirine bağlayamaz</li>
            <li>okuduğunu anlatamaz</li>
            <li>kısa sürede sıkılır</li>
          </ul>
          <p>
            Bu noktada okuma, öğrenme aracı olmaktan çıkar ve bir zorunluluk haline
            gelir.
          </p>

          <hr className="border-slate-200/80" />

          <p>Veliler genelde şunu dener:</p>
          <p>“Biraz daha dikkatli oku”</p>
          <p>“Yavaş oku”</p>
          <p>“Tekrar oku”</p>
          <p>Ama bu yöntemler kalıcı çözüm üretmez.</p>
          <p>Çünkü çocuk nasıl okuyacağını bilmez.</p>

          <hr className="border-slate-200/80" />

          <p>Etkili bir sistem 3 temel üzerine kuruludur:</p>

          <p>1. Odak geliştirme</p>
          <p>Çocuk metni görür ama zihni başka yerde olabilir.</p>
          <p>Bu yüzden ilk adım:</p>
          <p>zihinsel odak oluşturmaktır.</p>

          <hr className="border-slate-200/80" />

          <p>2. Anlamlandırma becerisi</p>
          <p>Okumak anlamak değildir.</p>
          <p>Çocuk,</p>
          <p>kelimeleri değil,</p>
          <p>anlamı takip etmeyi öğrenmelidir.</p>

          <hr className="border-slate-200/80" />

          <p>3. Aktif okuma</p>
          <p>Pasif okuma:</p>
          <p>sadece gözle takip</p>
          <p>Aktif okuma:</p>
          <ul className="list-none space-y-1 pl-0">
            <li>sorgulama</li>
            <li>zihinsel takip</li>
            <li>içten tekrar</li>
          </ul>
          <p>Bu fark, gelişimin anahtarıdır.</p>

          <hr className="border-slate-200/80" />

          <p>Her çocuk aynı şekilde öğrenmez.</p>
          <p>
            Bu yüzden standart grup eğitimleri çoğu zaman yetersiz kalır. Birebir
            takip gelişimi hızlandırır.
          </p>
          <p>
            Çünkü çocuğun zayıf noktası net görülür ve süreç ona göre şekillenir.
          </p>

          <hr className="border-slate-200/80" />

          <p>Gerçek gelişim şunlarla ölçülür:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>okuduğunu anlatabilme</li>
            <li>yorum yapabilme</li>
            <li>dikkat süresinin artması</li>
            <li>özgüvenin yükselmesi</li>
          </ul>

          <hr className="border-slate-200/80" />

          <p>Okuduğunu anlamayan çocuk için çözüm:</p>
          <p>daha fazla okumak değil,</p>
          <p>doğru şekilde okumayı öğrenmektir.</p>

          <hr className="border-slate-200/80" />

          <p>Eğer çocuğunuz:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>okuduğunu anlamakta zorlanıyorsa</li>
            <li>derslerde geri kalıyorsa</li>
            <li>özgüven kaybı yaşıyorsa</li>
          </ul>
          <p>bu durum değişebilir.</p>
          <p>Doğru sistemle, her çocuk ilerler.</p>
          <p>
            Odak Gelişim’de süreç, her öğrenciye özel ve birebir takip edilerek
            yürütülür.
          </p>
        </div>
      </article>
    </main>
  );
}
