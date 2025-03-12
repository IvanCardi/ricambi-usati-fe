import Link from "next/link";

interface SiteMapSection {
  title: string;
  links: { label: string; url: string }[];
}

export default function SiteMap() {
  const siteMapSections: SiteMapSection[] = [
    {
      title: "Esplora",
      links: [
        { label: "Home", url: "/" },
        { label: "Shop", url: "/" },
        { label: "Contatti", url: "/" },
        { label: "Profilo", url: "/" },
        { label: "Accedi", url: "/" },
        { label: "Registrati", url: "/" },
        { label: "Whishlist", url: "/" },
        { label: "Carrello", url: "/" },
      ],
    },
    {
      title: "Informazioni",
      links: [
        { label: "Informativa privacy", url: "/" },
        { label: "Informativa sui cookies", url: "/" },
        { label: "Condizioni generali di vendita", url: "/" },
        { label: "Diventa Partner", url: "/" },
      ],
    },
    {
      title: "Shop",
      links: [
        { label: "Meccanica", url: "/" },
        { label: "Motori", url: "/" },
        { label: "Carrozzeria", url: "/" },
        { label: "Interni", url: "/" },
        { label: "Sicurezza", url: "/" },
        { label: "Cerchi", url: "/" },
        { label: "Pneumatici", url: "/" },
        { label: "Moto", url: "/" },
      ],
    },
  ];

  return (
    <div className="hidden md:flex md:flex-row w-full justify-center gap-24">
      {siteMapSections.map((section, index) => (
        <div key={index} className="flex flex-col items-center gap-5">
          <span className="text-2xl text-[#0BB489] font-inter font-bold">
            {section.title}
          </span>
          <div className="flex flex-col justify-between items-center gap-3">
            {section.links.map((link, i) => (
              <Link key={i} href={link.url}>
                <span className="flex text-2xl text-center text-white font-inter font-light">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
