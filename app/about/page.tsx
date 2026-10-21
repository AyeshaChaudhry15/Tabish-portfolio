import CTA from "@/components/about/cta";
import Hero from "@/components/about/hero";
import Journey from "@/components/about/journey";
import MyApproach from "@/components/about/my-approach";
import MyStory from "@/components/about/my-story";
import Solutions from "@/components/about/solutions";

const page = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#071225",
        overflow: "hidden",
      }}
    >
      <Hero />
      <MyStory />
      <Journey />
      <Solutions />
      <MyApproach />
      <CTA />
    </div>
  );
};

export default page;
