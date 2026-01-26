import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CodeSprouts",
  description: "Learn about CodeSprouts, our mission, and our community-focused approach to teaching kids to code.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-gray-900">About CodeSprouts</h1>

        {/* What We Are */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">What is CodeSprouts?</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            CodeSprouts is a community-driven initiative dedicated to introducing children
            aged 6-16 to the world of coding and technology. We run free coding clubs and
            affordable workshops across Dublin, making programming accessible to all young
            learners regardless of their background.
          </p>
        </section>

        {/* Why We Exist */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Why We Exist</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            In today&apos;s digital world, understanding technology is as fundamental as
            reading and writing. We believe every child deserves the opportunity to learn
            these skills in a supportive, fun environment. CodeSprouts was founded to
            bridge the gap between curiosity and capability, helping children discover
            that they can be creators of technology, not just consumers.
          </p>
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

        {/* Philosophy */}
        <section className="mt-12">
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
            and creativity is encouraged at every turn. The goal isn&apos;t just to teach
            coding—it&apos;s to nurture problem-solvers, creative thinkers, and confident
            learners.
          </p>
        </section>
      </div>
    </div>
  );
}
