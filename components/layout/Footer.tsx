import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ProductSuite: [
    { label: "VeriBatch™ (Batch Review)", href: "/product?tab=veribatch#veribatch" },
    { label: "ChangeSure™ (Change Control)", href: "/product?tab=changesure#changesure" },
  ],
  Contact: [
    { label: "+91 8668806982", href: "tel:+918668806982" },
    { label: "info.ailifexlabs@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=info.ailifexlabs@gmail.com" },
    { label: "Request a Demo", href: "/contact" },
    { label: "Get in Touch", href: "/contact#form" },
  ],
};

export default function Footer() {
  return (
    <footer style={{background: "#0f0a1e", color: "#a8a5b8"}}>
      {/* Main Footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/images/logo.png"
                alt="LifeScienceX AI Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-xl shadow-sm transition-transform group-hover:scale-105"
              />
              <div>
                <span className="text-[16px] font-bold text-white font-jakarta block leading-tight">
                  LifeScienceX AI
                </span>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-purple-400 leading-tight">
                  Life Sciences Technology
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed" style={{color: "#6b6880"}}>
              Enterprise software for smarter Life Sciences operations.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color: "#6c3fc5"}}>
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => {
                  const isExternal =
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto") ||
                    link.href.startsWith("tel");
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors hover:text-white"
                          style={{color: "#6b6880"}}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm transition-colors hover:text-white"
                          style={{color: "#6b6880"}}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 mt-12 pt-6"
          style={{borderTop: "1px solid rgba(255,255,255,0.06)"}}
        >
          <p className="text-xs" style={{color: "#4a4760"}}>
            © {new Date().getFullYear()} LifeScienceX AI. All rights reserved.
          </p>
          <p className="text-xs" style={{color: "#4a4760"}}>
            Life Sciences Technology · Pharmaceutical Software
          </p>
        </div>
      </div>
    </footer>
  );
}
