import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExperienceItem } from "@/components/experience-item";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-8">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 md:px-12">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="max-w-[64rem] space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I&apos;m <span className="text-primary">Himanshu</span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              A passionate web developer crafting beautiful digital experiences
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="#projects">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Himanshu6868"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/himanshu0506?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/Himanshu_ydv05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:himanshuyadav3519@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-24 md:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Hello! I&apos;m a passionate and hardworking web developer
                  with 8 months of internship experience and 6 months of
                  professional experience specializing in Next.js development.
                </p>
                <p>
                  I enjoy building modern, responsive, and scalable web
                  applications with a strong focus on solving real-world
                  problems efficiently. I specialize in React, Next.js, and
                  TypeScript, with a keen eye for creating clean user interfaces
                  and smooth user experiences.
                </p>
                <p>
                  I thrive on challenges, continuously learning new
                  technologies, and finding innovative solutions to complex
                  problems. Outside of coding, I love exploring new ideas,
                  reading about tech innovations, and improving my skills every
                  day.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
                <img src="/coder.jpeg" alt="Profile" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
              My Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Flashy Fox"
                description="Worked on building an AI-powered clothing design platform where users can generate unique designs using AI, customize them on apparel like T-shirts, and place orders seamlessly. Developed dynamic, responsive UI components with Next.js, and ensuring a smooth and engaging user experience."
                tags={["Next.js", "Stripe", "Tailwind CSS"]}
                image="/flashyfox.png"
                link="http://flashyfox.in/"
              />
              <ProjectCard
                title="Festi - Fest management system"
                description="Built a full-stack event management web app where users can explore events, register for free or paid events, upload payment proofs, and track registration status. Organizers can create events, manage attendees, and approve or reject event registrations."
                tags={["Next.js", "TypeScript", "Supabase", "Tailwind CSS"]}
                image="/festi.png"
                link="https://festi.social/events"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-24 md:py-32">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="HTML & CSS" />
            <SkillBadge name="JavaScript" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="React" />
            <SkillBadge name="Next.js" />
            <SkillBadge name="Tailwind CSS" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="Express" />
            <SkillBadge name="MongoDB" />
            <SkillBadge name="MySQL" />
            <SkillBadge name="Git" />
            <SkillBadge name="Figma" />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
              Work Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              <ExperienceItem
                title="Frontend Developer Intern"
                company="DGLiger Consulting Pvt.Ltd."
                period="July 2024 - Present"
                description="Worked on building modern, user-friendly interfaces using Next.js. Integrated REST APIs to deliver dynamic and data-driven features. Contributed to enhancing UI/UX, improving usability, and ensuring responsive design across various devices."
                skills={[
                  "Next.js",
                  "React",
                  "REST APIs",
                  "TypeScript",
                  "Tailwind CSS",
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/80 backdrop-blur py-8 mt-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Himanshu Yadav
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Himanshu6868"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/himanshu0506?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/Himanshu_ydv05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:himanshuyadav3519@gmail.com">
              {" "}
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
