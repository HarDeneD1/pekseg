import React from "react";

const AboutPage = () => {
  return (
    <section className="relative mx-auto max- w-3xl px-6 py-16 text-center min-h-screen">
      <h2 className="text-4xl md:text-5xl font-extrabold text-amber-800 tracking-tight mb-4">
        Rólunk
      </h2>
      <h3 className="text-xl md:text-2xl font-medium text-gray-600 italic mb-8">
        &quot;`A liszt nálunk nem csak alapanyag – ez a történetünk
        kezdete.&quot;`
      </h3>
      <p className="text-md md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        Minden egy régi nagymama receptfüzetével kezdődött, amit egy poros
        dobozban találtunk a padláson, még 2012 őszén.
        <br /> <br />
        Nem sokkal később, egy pici kemencével, két kezes dagasztással és egy
        álommal megnyitottuk első pékségünket a város szélén.
        <br /> <br />
        Azóta is minden hajnalban elsőként gyújtjuk be a sütőt, hogy a kenyér ne
        csak friss legyen – hanem történetet meséljen.
        <br /> <br />
        Sütünk, mert hisszük, hogy a legjobb dolgok egyszerű hozzávalókból,
        szeretettel készülnek.
      </p>
      <p className="text-4xl m-10">Ez még csak ai</p>
    </section>
  );
};

export default AboutPage;
