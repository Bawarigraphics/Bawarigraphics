import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Facebook, MessageCircleMore, Send } from "lucide-react";

const translations = {
  ps: {
    title: "ستاسو د خیالونو ډیزاین ځای!",
    description: "موږ تاسو ته په لاندي برخو کي انلاين خدمات وړاندي کوو:\n🟠 هر ډول پوسټرونه ډيزاينول د ټولنيزو رسنيو لپاره\n🔵 هر ډول لوګو ډيزاينول\n⚪ هر ډول پروپايلونو ډيزاينول.",
    cards: ["سندونه", "سوانح", "پروفایل عکسونه"],
    contact: "زموږ سره اړیکه ونیسئ",
    whatsapp: "واټساپ",
    facebook: "فېسبوک پاڼه",
    telegram: "ټیلیګرام چینل",
    logoUploadLabel: "زموږ لوګو پورته کړئ",
    footer: "© 2025 باوري ګرافېکس. ټول حقونه خوندي دي."
  },
  dr: {
    title: "محل طراحی ایده های شما!",
    description: "ما خدمات آنلاین در زمینه های زیر ارائه می دهیم:\n🟠 طراحی انواع پوسترها برای شبکه های اجتماعی\n🔵 طراحی انواع لوگو\n⚪ طراحی انواع پروفایل ها.",
    cards: ["اسناد", "زندگینامه", "تصاویر پروفایل"],
    contact: "با ما تماس بگیرید",
    whatsapp: "واتساپ",
    facebook: "صفحه فیسبوک",
    telegram: "کانال تلگرام",
    logoUploadLabel: "لوگوی ما را آپلود کنید",
    footer: "© 2025 باوری گرافیکس. کلیه حقوق محفوظ است."
  },
  en: {
    title: "The Place for Your Design Dreams!",
    description: "We offer you online services in the following areas:\n🟠 Designing all kinds of posters for social media\n🔵 Designing all kinds of logos\n⚪ Designing all kinds of profiles.",
    cards: ["Certificates", "Biographies", "Profile Pictures"],
    contact: "Contact Us",
    whatsapp: "WhatsApp",
    facebook: "Facebook Page",
    telegram: "Telegram Channel",
    logoUploadLabel: "Upload Our Logo",
    footer: "© 2025 Bawari Graphics. All rights reserved."
  }
};

export default function Home() {
  const [lang, setLang] = useState("ps");
  const t = translations[lang];

  const onLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById("logo-img").src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white p-6">
      <header className="flex items-center justify-between py-4">
        <motion.div
          className="text-3xl font-bold flex items-center gap-2 font-bahijtitree"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            id="logo-img"
            src="/logo.png"
            alt="Bawari Graphics Logo"
            className="h-12"
          />
          باوري ګرافېکس
        </motion.div>
        <button
          className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg font-bahijbadr"
          onClick={() => alert("اړیکه: 93745724503")}
        >
          اړیکه ونیسئ
        </button>
      </header>

      {/* Language Selector */}
      <section className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setLang("ps")}
          className={`px-4 py-1 rounded-full font-semibold ${
            lang === "ps" ? "bg-purple-700" : "bg-purple-400"
          }`}
        >
          پښتو
        </button>
        <button
          onClick={() => setLang("dr")}
          className={`px-4 py-1 rounded-full font-semibold ${
            lang === "dr" ? "bg-purple-700" : "bg-purple-400"
          }`}
        >
          دري
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-1 rounded-full font-semibold ${
            lang === "en" ? "bg-purple-700" : "bg-purple-400"
          }`}
        >
          English
        </button>
      </section>

      {/* Main Content */}
      <section className="text-center mt-8">
        <motion.h1
          className="text-5xl font-extrabold mb-4 font-bahijtitree"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mx-auto whitespace-pre-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t.description}
        </motion.p>
      </section>

      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-6 mt-16">
        {t.cards.map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
          >
            <div className="card bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center">
              <Sparkles className="mx-auto mb-4" size={32} />
              <h2 className="text-2xl font-bold mb-2 font-bahijtitree">{title}</h2>
              <p className="text-sm">د باوري ګرافېکس ځانګړی کار او ښکلا.</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4 font-bahijtitree">{t.contact}</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/93745724503"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full hover:bg-green-500"
          >
            <MessageCircleMore size={20} /> {t.whatsapp}
          </a>
          <a
            href="https://www.facebook.com/share/19MMj3zSF3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500"
          >
            <Facebook size={20} /> {t.facebook}
          </a>
          <a
            href="https://t.me/BAWARIGRAPHIC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-500 px-4 py-2 rounded-full hover:bg-sky-400"
          >
            <Send size={20} /> {t.telegram}
          </a>
        </div>
      </section>

      {/* Logo Upload */}
      <section className="mt-10 text-center">
        <label
          htmlFor="logo-upload"
          className="cursor-pointer inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          {t.logoUploadLabel}
        </label>
        <input
          id="logo-upload"
          type="file"
          accept="image/*"
          onChange={onLogoChange}
          className="hidden"
        />
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-white/80 font-bahijbadr">
        {t.footer}
      </footer>
    </main>
  );
}