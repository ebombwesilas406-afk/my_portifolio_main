import Hero from "@/components/Hero";
import SiteFrame from "@/components/SiteFrame";

export default function HomePage() {
  return (
    <main id="hero">
      <SiteFrame>
        <Hero />
      </SiteFrame>
    </main>
  );
}
