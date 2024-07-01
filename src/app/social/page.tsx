import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import gfg from "@/assets/gfg.svg";
import leetcode from "@/assets/leetcode.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="flex min-h-screen items-center justify-center space-y-8 bg-gradient-to-r from-blue-100 to-purple-100 p-8 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-3xl transform rounded-lg bg-white p-8 shadow-xl transition-transform hover:shadow-2xl dark:bg-gray-800">
        <H1 className="mb-6 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-center text-5xl font-extrabold text-transparent dark:from-purple-300 dark:to-blue-500">
          Social Media
        </H1>
        <section className="space-y-6">
          <H2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">
            My Channels
          </H2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hi, I&apos;m Aditya Dev, a software engineer with a passion for web
            development and artificial intelligence. I upload my projects on my
            GitHub account and solve problems on Leetcode and GeeksForGeeks.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Links to all my social accounts:
          </p>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex transform cursor-pointer items-center justify-center space-x-3 rounded-lg bg-slate-700 py-3 text-white transition-transform hover:-translate-y-1 hover:bg-slate-900">
              <Github />
              <a
                href="https://github.com/AdityaDev564"
                className="text-center font-semibold text-primary text-white no-underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex transform cursor-pointer items-center justify-center space-x-3 rounded-lg bg-slate-700 py-3 text-white transition-transform hover:-translate-y-1 hover:bg-slate-900">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/aditya-dev-b0860521a/"
                className="text-center font-semibold text-primary text-white no-underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex transform cursor-pointer items-center justify-center space-x-3 rounded-lg bg-slate-700 py-3 text-white transition-transform hover:-translate-y-1 hover:bg-slate-900">
              <Image
                src={gfg}
                alt="GFG"
                width={30}
                className="rounded-full bg-white p-1 text-white"
              />
              <a
                href="https://www.geeksforgeeks.org/user/aditya2190nl/"
                className="text-center font-semibold text-primary text-white no-underline"
              >
                GeeksForGeeks
              </a>
            </li>
            <li className="flex transform cursor-pointer items-center justify-center space-x-3 rounded-lg bg-slate-700 py-3 text-white transition-transform hover:-translate-y-1 hover:bg-slate-900">
              <Image
                src={leetcode}
                alt="GFG"
                width={30}
                className="rounded-full bg-white p-1 text-white"
              />
              <a
                href="https://leetcode.com/u/Aditya564/"
                className="text-center font-semibold text-primary text-white no-underline"
              >
                Leetcode
              </a>
            </li>
          </ul>
          <hr className="mt-8 border-t border-gray-300 dark:border-gray-600" />
        </section>
      </div>
    </section>
  );
}
