import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classes - CodeSprouts",
  description: "Learn about CodeSprouts coding classes and workshops for children aged 6-16. Scratch, Python, Web Development, and more.",
};

export default function ClassesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Coding Classes</h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              CodeSprouts offers structured coding classes and workshops designed to take
              children from complete beginners to confident coders.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="img0.png"
              alt="Kids in a coding class"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Age Ranges */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Who Can Attend?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our classes are designed for children aged <strong>6 to 16</strong>. We group
            learners by age and experience level to ensure everyone gets the right level
            of challenge and support.
          </p>
        </section>

        {/* Topics */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">What We Teach</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-2xl">🐱</span>
              <div>
                <strong className="text-gray-900">Scratch</strong>
                <p className="text-gray-600">
                  Visual block-based programming perfect for beginners. Create games,
                  animations, and interactive stories.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">🌐</span>
              <div>
                <strong className="text-gray-900">Web Basics</strong>
                <p className="text-gray-600">
                  Learn HTML, CSS, and JavaScript to build your own websites and web apps.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">🐍</span>
              <div>
                <strong className="text-gray-900">Python</strong>
                <p className="text-gray-600">
                  A friendly text-based language used by professionals. Great for games,
                  data projects, and more.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">🤖</span>
              <div>
                <strong className="text-gray-900">Robotics</strong>
                <p className="text-gray-600">
                  Hands-on experience with physical computing using micro:bit and other
                  hardware.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Photo break */}
        <div className="mt-12 relative h-64 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="1740999998069.jpeg"
            alt="CodeSprouts workshop in progress"
            fill
            className="object-cover"
          />
        </div>

        {/* Schedule Note */}
        <section className="mt-12 rounded-2xl bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">Class Schedules</h2>
          <p className="mt-2 text-gray-700">
            Classes run at different times throughout the year. Contact us to find out
            about current and upcoming class schedules, availability, and pricing.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors"
          >
            Contact Us to Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
