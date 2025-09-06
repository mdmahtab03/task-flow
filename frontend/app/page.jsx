import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen max-w-5xl mx-auto px-8 gap-8">
      <Header />
      <main className="h-full space-y-12">
        <section className="max-w-xl">
          <h1 className="text-3xl font-semibold text-primary">Welcome to TaskFlow</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Your simple way to manage tasks.
          </p>
          <div className="mt-6">
            <Link
              href="/todo"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md hover:opacity-90 transition"
            >
              Get Started <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary">Features</h2>
          <ul className="mt-2 list-disc list-inside space-y-2 marker:text-primary text-muted-foreground leading-relaxed">
            <li>Add and organize your tasks</li>
            <li>Mark tasks as complete</li>
            <li>Simple & fast UI</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-primary">My Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Card />            
            <Card />
            <Card />
          </div>
        </section>
      </main>
      <div>Hello how are you</div>
      <Footer />
    </div>
  );
}
