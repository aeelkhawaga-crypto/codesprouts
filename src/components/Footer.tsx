import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/clubs", label: "Clubs" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
  { href: "/gaza-hackathon", label: "Support Gaza" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CodeSprouts Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-emerald-400">CodeSprouts</h3>
            </div>
            <p className="mt-2 text-gray-400">
              Community coding clubs and classes for children aged 6-16.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-gray-200">Contact Us</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:smiles@codesprouts.ie"
                  className="hover:text-emerald-400 transition-colors"
                >
                  smiles@codesprouts.ie
                </a>
              </li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-200">Connect</h4>
            <div className="mt-2 flex gap-4">
              <a
                href="https://codeclub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Code Club
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551944964126"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CodeSprouts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
