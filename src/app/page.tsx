import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <Image
            src="/logo.png"
            alt="CodeSprouts Logo"
            width={120}
            height={120}
            className="mx-auto h-28 w-auto"
          />
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            CodeSprouts
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl">
            Inspiring the next generation of creators through fun, hands-on coding experiences.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
            Community coding clubs and classes for children aged 6-16 in Dublin.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/clubs"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Coding Clubs
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section with Photo */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Learning to Code Should Be Fun
              </h2>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                At CodeSprouts, children discover the joy of coding through creative projects,
                games, and collaborative learning. Our community-based approach ensures every
                child feels supported as they explore technology at their own pace.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/1740999998034.jpeg"
                alt="Kids learning to code at CodeSprouts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What We Offer
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Coding Clubs */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl">💻</div>
              <h3 className="text-xl font-bold text-gray-900">Coding Clubs</h3>
              <p className="mt-2 text-gray-600">
                Free weekly sessions where kids learn coding fundamentals through
                fun projects and games.
              </p>
            </div>

            {/* Classes & Workshops */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl">📚</div>
              <h3 className="text-xl font-bold text-gray-900">Classes & Workshops</h3>
              <p className="mt-2 text-gray-600">
                Structured learning experiences covering Scratch, Python, web development,
                and more.
              </p>
            </div>

            {/* Community Events */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl">🎉</div>
              <h3 className="text-xl font-bold text-gray-900">Community Events</h3>
              <p className="mt-2 text-gray-600">
                Special events, showcases, and hackathons where kids can share their
                creations and learn together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            See Our Community in Action
          </h2>
          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3">
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/1707415013354.jpeg"
                alt="CodeSprouts session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/1713040935462.jpeg"
                alt="Kids coding together"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md col-span-2 md:col-span-1">
              <Image
                src="/1719079747026.jpeg"
                alt="Learning at CodeSprouts"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why CodeSprouts */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/1740999998069.jpeg"
                alt="CodeSprouts community"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Why CodeSprouts?
              </h2>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-emerald-500">✓</span>
                  <div>
                    <strong className="text-gray-900">Beginner-Friendly</strong>
                    <p className="text-gray-600">
                      No prior experience needed. We meet every child where they are.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-emerald-500">✓</span>
                  <div>
                    <strong className="text-gray-900">Volunteer-Supported</strong>
                    <p className="text-gray-600">
                      Passionate mentors who love sharing their knowledge with young learners.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-emerald-500">✓</span>
                  <div>
                    <strong className="text-gray-900">Safe Learning Environment</strong>
                    <p className="text-gray-600">
                      All volunteers are Garda vetted. Parents are welcome to stay.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
