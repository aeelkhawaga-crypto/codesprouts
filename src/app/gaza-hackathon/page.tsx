import type { Metadata } from "next";
import Image from "next/image";
import DonateButton from "@/components/DonateButton";

export const metadata: Metadata = {
  title: "Support the Gaza Youth Tech Hackathon - CodeSprouts",
  description:
    "CodeSprouts is proudly supporting the Gaza Youth Tech Hackathon. Help us raise €5,000 to give young Gazan makers the hardware, internet, mentorship, and prizes they need to build what Gaza needs next.",
  openGraph: {
    title: "Support the Gaza Youth Tech Hackathon",
    description:
      "Help us raise €5,000 to support young Gazan makers building apps, robotics, and Arduino projects. Every donation goes toward hardware, internet, mentorship, and prizes.",
    type: "website",
  },
};

const FUNDS = [
  {
    icon: "💻",
    title: "Hardware",
    body: "Laptops, Arduino boards, sensors, and components so every team can build a real, working prototype.",
  },
  {
    icon: "🌐",
    title: "Internet Access",
    body: "Reliable connectivity so young makers in Gaza can research, collaborate, and submit their projects.",
  },
  {
    icon: "🧑‍🏫",
    title: "Mentorship",
    body: "Coaching and pitch support from experienced engineers who guide teams from idea to demo day.",
  },
  {
    icon: "🏆",
    title: "Prizes",
    body: "Recognition and rewards that celebrate the courage, creativity, and technical ambition of the finalists.",
  },
];

const TRACKS = [
  { icon: "📱", label: "Mobile Apps" },
  { icon: "🤖", label: "Robotics" },
  { icon: "🔌", label: "Arduino & IoT" },
  { icon: "🌍", label: "Community Tools" },
];

export default function GazaHackathonPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-200 to-teal-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
                Fundraiser
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Support the Gaza Youth Tech Hackathon
              </h1>
              <p className="mt-6 text-xl leading-relaxed">
                A youth hackathon shaped by Gaza, powered by partnership, and open
                to ideas that deserve a bigger stage.
              </p>
              <p className="mt-4 text-lg opacity-90">
                CodeSprouts is a proud supporter of this event, run by our friends
                at Code Sprouts Palestine and Tech From Palestine. We&apos;re
                helping raise the funds that make it possible.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <DonateButton variant="light" />
                <a
                  href="https://gazatechhackathon.tech/#home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Visit the Hackathon Site
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/15 p-8 text-center backdrop-blur">
              <p className="text-lg font-medium uppercase tracking-wide opacity-90">
                Our Goal
              </p>
              <p className="mt-2 text-6xl font-extrabold">€5,000</p>
              <p className="mt-4 text-lg opacity-90">
                Every euro goes directly toward giving young Gazan builders the
                tools, connectivity, mentorship, and prizes they need to take part.
              </p>
              <div className="mt-6">
                <DonateButton variant="light" className="w-full">
                  Donate to the Hackathon
                </DonateButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                What is the Gaza Youth Tech Hackathon?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                It&apos;s a youth contest for apps, robotics, Arduino builds, and
                local problem solving — built for teenagers and younger makers with
                energy, originality, and a real desire to create. A finished product
                isn&apos;t required; a strong concept and a clear technical
                direction are enough.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                It&apos;s a launchpad for young builders with local ideas and
                technical courage — a chance to build what Gaza needs next.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {TRACKS.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 font-medium text-emerald-700"
                  >
                    <span aria-hidden>{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg md:h-80">
              <Image
                src="/1719079747026.jpeg"
                alt="Young makers working together on a coding project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What your donation enables */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What Your Donation Makes Possible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Your support reaches young people directly. Here&apos;s where every
            contribution goes.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FUNDS.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 text-4xl">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's behind it */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900">Who&apos;s Behind It</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Tech From Palestine
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                A nonprofit founded in Gaza to expand access to quality technology
                education and global opportunity for Palestinian youth and
                engineers. Through hands-on training in programming, robotics,
                electronics, and embedded systems, it has supported more than{" "}
                <strong className="text-gray-900">1,000 engineers</strong>,
                connected{" "}
                <strong className="text-gray-900">100+ professionals</strong> with
                international opportunities, and introduced{" "}
                <strong className="text-gray-900">500+ children and youth</strong>{" "}
                to the world of technology.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Code Sprouts Palestine
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Helps establish volunteer-led coding clubs by training volunteers,
                sharing learning materials, and supporting clubs that are managed
                independently by their local teams. Its decentralized model
                encourages leadership, peer learning, creativity, and long-term
                community ownership — giving children and teens welcoming spaces to
                explore coding, problem solving, robotics, and technology with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Help Us Reach €5,000</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            A small contribution goes a long way. Together we can give young Gazan
            makers the tools and encouragement to build their ideas — and their
            future.
          </p>
          <div className="mt-8 flex justify-center">
            <DonateButton variant="light" />
          </div>
          <p className="mt-4 text-sm opacity-80">
            Payments are processed securely by Stripe.
          </p>
        </div>
      </section>
    </div>
  );
}
