import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coding Clubs - CodeSprouts",
  description: "Join our free community coding clubs for children. Learn programming in a fun, supportive environment.",
};

export default function ClubsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Coding Clubs</h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Our coding clubs are free, community-run sessions where children can explore
              programming at their own pace with the support of volunteer mentors.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/1707415013354.jpeg"
              alt="Kids at a CodeSprouts coding club"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* What is a Coding Club */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">What is a Coding Club?</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A coding club is an informal, drop-in session where young people come together
            to learn programming. Unlike traditional classes, there&apos;s no set curriculum
            or tests. Children choose their own projects and learn by doing, with mentors
            available to help when needed.
          </p>
        </section>

        {/* How Clubs Work */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">How Our Clubs Work</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-emerald-500 text-xl font-bold">1</span>
              <div>
                <strong className="text-gray-900">Show up</strong>
                <p className="text-gray-600">
                  Bring a laptop if you have one (we have some to borrow). Parents should
                  accompany younger children.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-emerald-500 text-xl font-bold">2</span>
              <div>
                <strong className="text-gray-900">Choose a project</strong>
                <p className="text-gray-600">
                  Pick from our library of projects or work on your own ideas. There&apos;s
                  something for every skill level.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-emerald-500 text-xl font-bold">3</span>
              <div>
                <strong className="text-gray-900">Code and create</strong>
                <p className="text-gray-600">
                  Work at your own pace. Mentors are there to help when you get stuck or
                  want to try something new.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-emerald-500 text-xl font-bold">4</span>
              <div>
                <strong className="text-gray-900">Share and celebrate</strong>
                <p className="text-gray-600">
                  Show off what you&apos;ve made! We love seeing creative solutions and
                  celebrating achievements.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Photo */}
        <div className="mt-12 relative h-64 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/1713040935462.jpeg"
            alt="Coding club session in action"
            fill
            className="object-cover"
          />
        </div>

        {/* Clubs vs Classes */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Clubs vs Classes</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Clubs</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Classes</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 text-gray-700">Cost</td>
                  <td className="px-4 py-3 text-gray-600">Free</td>
                  <td className="px-4 py-3 text-gray-600">Small fee</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Structure</td>
                  <td className="px-4 py-3 text-gray-600">Self-directed</td>
                  <td className="px-4 py-3 text-gray-600">Curriculum-based</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Commitment</td>
                  <td className="px-4 py-3 text-gray-600">Drop-in</td>
                  <td className="px-4 py-3 text-gray-600">Weekly attendance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Best for</td>
                  <td className="px-4 py-3 text-gray-600">Exploration</td>
                  <td className="px-4 py-3 text-gray-600">Structured learning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Our Clubs */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Our Clubs</h2>
          <div className="mt-6">
            <Link
              href="/clubs/code-sprouts-coderdojo"
              className="block rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 hover:border-emerald-400 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900">Code Sprouts CoderDojo</h3>
              <p className="mt-2 text-gray-600">
                Our flagship club at UCD Science Centre. Wednesdays, 18:00-19:30.
              </p>
              <span className="mt-4 inline-block text-emerald-600 font-medium">
                View details →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
