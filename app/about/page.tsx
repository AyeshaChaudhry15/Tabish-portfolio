import CTA from "@/components/about/cta";
import Hero from "@/components/about/hero";
import Journey from "@/components/about/journey";
import MyApproach from "@/components/about/my-approach";
import MyStory from "@/components/about/my-story";
import Solutions from "@/components/about/solutions";

export default function Page() {
  return (
    <main
      className="min-h-screen w-full overflow-hidden"
      style={{ background: "#071225" }}
    >
      <Hero />
      <MyStory />
      <Journey />
      <Solutions />
      <MyApproach />
      <CTA />
    </main>
  );
}