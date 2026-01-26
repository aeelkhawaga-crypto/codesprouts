import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - CodeSprouts",
  description: "Learn about CodeSprouts, our mission, and our community-focused approach to teaching kids to code.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero with photo */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">About CodeSprouts</h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              CodeSprouts is a community-driven initiative dedicated to introducing children
              aged 6-16 to the world of coding and technology.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/1713040935462.jpeg"
              alt="CodeSprouts community session"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* What We Are */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">What is CodeSprouts?</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We run free coding clubs and affordable workshops across Dublin, making
            programming accessible to all young learners regardless of their background.
            Our sessions are designed to spark curiosity and build confidence in young minds.
          </p>
        </section>

        {/* Why We Exist */}
        <section className="mt-12 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/1707415013354.jpeg"
              alt="Kids learning at CodeSprouts"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-gray-900">Why We Exist</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              In today&apos;s digital world, understanding technology is as fundamental as
              reading and writing. We believe every child deserves the opportunity to learn
              these skills in a supportive, fun environment.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              CodeSprouts was founded to bridge the gap between curiosity and capability,
              helping children discover that they can be creators of technology, not just consumers.
            </p>
          </div>
        </section>

        {/* Community Focus */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Our Community</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            At the heart of CodeSprouts is our amazing community. We&apos;re powered by
            dedicated volunteers—software developers, educators, and tech enthusiasts—who
            generously share their time and expertise. Parents, schools, and local
            organizations partner with us to bring coding education to more children.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We&apos;re proud to be part of the global Code Club network, supported by the
            Raspberry Pi Foundation. This connection gives us access to world-class
            resources and a community of like-minded clubs around the world.
          </p>
        </section>

        {/* Philosophy with photo */}
        <section className="mt-12 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Learning by Doing</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We believe children learn best when they&apos;re actively engaged and having fun.
              Our approach focuses on hands-on projects that let kids create things they care
              about—games, animations, websites, and more. There are no boring lectures or
              rote memorization here.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Every child works at their own pace, supported by mentors who are there to
              guide rather than instruct. Mistakes are celebrated as learning opportunities,
              and creativity is encouraged at every turn.
            </p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/1719079747026.jpeg"
              alt="Hands-on learning at CodeSprouts"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
