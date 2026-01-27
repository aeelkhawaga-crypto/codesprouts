import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code Sprouts CoderDojo - CodeSprouts",
  description: "Join our community coding club at UCD Science Centre. Free weekly sessions for kids to learn programming.",
};

export default function CodeSproutsCoderDojoPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Code Sprouts CoderDojo</h1>
            <p className="mt-4 text-xl text-gray-600">
              Community coding club for kids, supported by volunteers.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/1719079747026.jpeg"
              alt="Code Sprouts CoderDojo session"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Club Info */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="font-semibold text-gray-900">Location</h2>
            <p className="mt-2 text-gray-600">
              UCD Science Centre East<br />
              Belfield, Dublin 4<br />
              D04 V1W8
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="font-semibold text-gray-900">When</h2>
            <p className="mt-2 text-gray-600">
              Wednesdays<br />
              18:00 - 19:30
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="font-semibold text-gray-900">Contact</h2>
            <p className="mt-2">
              <a
                href="mailto:smiles@codesprouts.ie"
                className="text-emerald-600 hover:text-emerald-700"
              >
                smiles@codesprouts.ie
              </a>
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="font-semibold text-gray-900">Website</h2>
            <p className="mt-2">
              <a
                href="https://codesprouts.ie"
                className="text-emerald-600 hover:text-emerald-700"
              >
                codesprouts.ie
              </a>
            </p>
          </div>
        </section>

        {/* What to Bring */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">What to Bring</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-2xl">💻</span>
              <div>
                <strong className="text-gray-900">Laptop</strong>
                <p className="text-gray-600">
                  Bring your own if possible. We have a limited number available to borrow.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">👨‍👩‍👧</span>
              <div>
                <strong className="text-gray-900">Parent/Guardian</strong>
                <p className="text-gray-600">
                  Required for younger children. Parents are welcome to stay for all sessions.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <strong className="text-gray-900">Curiosity and Ideas</strong>
                <p className="text-gray-600">
                  Come ready to learn, experiment, and have fun!
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Photo */}
        <div className="mt-12 relative h-64 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/img1.png"
            alt="Kids at CoderDojo"
            fill
            className="object-cover"
          />
        </div>

        {/* Who Can Attend */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Who Can Attend?</h2>
          <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <strong>Beginners welcome</strong> - No prior coding experience needed
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <strong>No prior experience required</strong> - We&apos;ll help you get started
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <strong>All skill levels</strong> - From first-timers to experienced coders
              </li>
            </ul>
          </div>
        </section>

        {/* Affiliation */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Part of a Global Community</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Code Sprouts CoderDojo is affiliated with the Code Club network, part of the
            Raspberry Pi Foundation. This global community of coding clubs shares resources,
            best practices, and a commitment to making coding accessible to all young people.
          </p>
        </section>

        {/* CTAs */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-center text-lg font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors"
          >
            Contact Us to Attend
          </Link>
          <a
            href="https://codeclub.org/en/clubs/cf050ae9-dfd0-4d73-9da4-ce4259c483e8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-emerald-600 px-8 py-3 text-center text-lg font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            Visit Code Club Page
          </a>
        </div>
      </div>
    </div>
  );
}
