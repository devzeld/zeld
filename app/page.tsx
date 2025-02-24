import TypeWriter from "@/components/type-writer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <section>
      <Hero>
        <h1>
          Hi, I am <TypeWriter text="zeld" delay={200} />
        </h1>
      </Hero>
    </section>
  );
}
