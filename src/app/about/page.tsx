import me from "@/assets/me.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Aditya Dev and his work.",
};

export default function Page() {
  return (
    <section className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-3xl p-6">
        <H1>About Me</H1>

        <section className="mt-8 space-y-6">
          <div className="space-y-3">
            <H2>Who am I?</H2>
            <p className="text-lg leading-relaxed">
              My name is Aditya Dev, a self-taught software developer from
              India. I started programming in 2020, at the age of 18, and have
              been building web applications and APIs since then.
            </p>
            <p className="text-lg leading-relaxed">
              I&apos;m passionate about building applications and websites and
              sharing what I learn with my friends and fellow programmers.
            </p>
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          <div className="space-y-3">
            <H2>Skills</H2>
            <p className="text-lg leading-relaxed">
              I&apos;m a full-stack web developer specializing in{" "}
              <strong className="text-primary">React</strong>,{" "}
              <strong className="text-primary">Next.js</strong>, and{" "}
              <strong className="text-primary">Node.js</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              I am constantly learning new technologies and frameworks to stay
              up to date with the latest trends in web development.
            </p>
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          <div className="space-y-3">
            <H2>Side projects</H2>
            <p className="text-lg leading-relaxed">
              In my free time, I work on side projects to keep my skills sharp
              and try out new technologies. Here are a couple of my current
              projects:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <a
                  href="https://note-taking-app-one-taupe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Jotion
                </a>{" "}
                - A productivity app to organize tasks and goals
              </li>
              <li>
                <Link
                  href="https://techstack-iota.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  TechStack
                </Link>{" "}
                - A web app for different tech stacks
              </li>
            </ul>
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          <div className="space-y-3">
            <H2>Hobbies</H2>
            <p className="text-lg leading-relaxed">
              Besides programming, I enjoy sports like weightlifting and
              running. I also love watching cricket and spending time outdoors.
            </p>
            <p className="text-lg leading-relaxed">
              I believe having hobbies outside of coding is important for mental
              health and well-being.
            </p>
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <div className="border-1 overflow-hidden rounded-full border-primary object-cover shadow-lg dark:border-gray-800">
            <Image
              src={me}
              alt="Aditya Dev"
              className="rounded-full"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
