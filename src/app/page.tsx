import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
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

      {/* Intro Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Learning to Code Should Be Fun
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            At CodeSprouts, children discover the joy of coding through creative projects,
            games, and collaborative learning. Our community-based approach ensures every
            child feels supported as they explore technology at their own pace.
          </p>
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

      {/* Why CodeSprouts */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
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
      </section>
    </>
  );
}
