import React from "react";
import TestimonialCard from "@/app/components/testimonial-card";
import { Marquee } from "@/components/ui/marquee";

const TestiOne = () => {
  const reviews = [
    {
      name: "Apurv",
      username: "@apurv_h",
      percentile: "101 %ile",
      collegeName: "Harvard",
      body: "The personalized curriculum was a game-changer. I went from struggling with logic to mastering it in weeks.",
      imageUrl: "https://avatar.vercel.sh/apurv",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Harvard_Business_School_shield_logo.svg/250px-Harvard_Business_School_shield_logo.svg.png",
        name: "Harvard",
      },
    },
    {
      name: "Sarah",
      username: "@sarah_j",
      percentile: "99.8 %ile",
      collegeName: "Stanford",
      body: "Absolutely brilliant mentorship. The community here pushes you to be your absolute best version.",
      imageUrl: "https://avatar.vercel.sh/sarah",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Stanford_University_seal_2003.svg/250px-Stanford_University_seal_2003.svg.png",
        name: "Stanford",
      },
    },
    {
      name: "Kenji",
      username: "@kenji_w",
      percentile: "100 %ile",
      collegeName: "MIT",
      body: "The depth of the technical modules is unmatched. It feels like getting a master's degree in record time.",
      imageUrl: "https://avatar.vercel.sh/kenji",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/250px-MIT_logo.svg.png",
        name: "MIT",
      },
    },
    {
      name: "Elena",
      username: "@elena_v",
      percentile: "99.9 %ile",
      collegeName: "Oxford",
      body: "I finally understood the 'why' behind the concepts, not just the 'how'. Truly transformative experience.",
      imageUrl: "https://avatar.vercel.sh/elena",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/250px-Oxford-University-Circlet.svg.png",
        name: "Oxford",
      },
    },
    {
      name: "Marcus",
      username: "@marcus_dev",
      percentile: "98.5 %ile",
      collegeName: "Cambridge",
      body: "The interface is slick and the content is even slicker. This is the gold standard of learning platforms.",
      imageUrl: "https://avatar.vercel.sh/marcus",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_arms_of_the_University_of_Cambridge.svg/250px-Coat_of_arms_of_the_University_of_Cambridge.svg.png",
        name: "Cambridge",
      },
    },
    {
      name: "Priya",
      username: "@priya_stats",
      percentile: "99.5 %ile",
      collegeName: "Wharton",
      body: "If you are serious about your career trajectory, this is the best investment you will make this year.",
      imageUrl: "https://avatar.vercel.sh/priya",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wharton_Logo.svg/250px-Wharton_Logo.svg.png",
        name: "Wharton",
      },
    },
  ];
  return (
    <section className="w-full pb-20">
      <div className="flex flex-col gap-10">
        {/* First Row */}
        <Marquee pauseOnHover className="[--duration:40s]">
          {reviews.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Optional: Second Row (Reverse) for more visual density */}
        <Marquee reverse pauseOnHover className="[--duration:45s]">
          {reviews
            .slice()
            .reverse()
            .map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestiOne;
