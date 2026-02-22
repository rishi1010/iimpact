import React from "react";
import { TeamCard } from "../components/team-card";
import ScribbleArrow from "../components/scribble-arrow";

const Teams = () => {
  return (
    <section
      id="teams"
      className=" relative overflow-visible w-full max-w-7xl mx-auto h-[100dvh] bg-[#F6F4F0] p-12"
    >
      <div className="w-full h-full flex flex-col items-center gap-24">
        {/* title and subheading */}
        <div className="flex flex-col gap-5 items-center justify-between w-full">
          <div className="text-7xl italic w-full text-center font-playfair text-impact-blue">
            Meet Team <span className="text-impact-orange">IIMPact</span>
          </div>
          <p className="text-xl text-impact-orange font-sans font-semibold">
            Trusted by 5000+ successful aspirants
          </p>
        </div>
        {/* Teams */}
        <div className="flex w-full justify-between gap-5">
          <div className="text-7xl w-1/2  font-poppins uppercase font-semibold tracking-wide text-balance text-impact-blue">
            From{" "}
            <div className="underline decoration-impact-orange">toppers </div>{" "}
            to{" "}
            <div className="underline decoration-impact-orange">mentors </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <div className="text-impact-blue/80 text-xl font-sans font-medium text-center w-full">
              They cracked it. Now they'll help you
            </div>
            <div className="flex gap-9">
              <TeamCard
                imageUrl="/dg.png"
                name="Divyansh Gupta"
                percentile="100"
                examLabel="CAT 19"
                collegeName="FMS Delhi"
                companyName="Kearney"
                logos={[
                  {
                    url: "https://media.licdn.com/dms/image/v2/C510BAQGrnX7wBlptUA/company-logo_200_200/company-logo_200_200/0/1631347235309?e=2147483647&v=beta&t=y5LAzPv_kycav92CzR2Iwii_5uTAkpxtFw93FmQX7Sg",
                    name: "FMS Delhi",
                  },
                  {
                    url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1280px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
                    name: "IIT Delhi",
                  },
                  {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkRp5QqqJlg3gZPrLB_Xff2nThWeZdsPNww&s",
                    name: "Kearney",
                  },
                ]}
                scribble={{
                  text: "Qa + Varc wizard",
                  side: "left",
                  color: "impact-orange",
                }}
              />
              <TeamCard
                imageUrl="/rm.png"
                name="Rishi Mittal"
                percentile="100"
                examLabel="CAT 19"
                collegeName="IIM B'lore"
                companyName="Accenture"
                logos={[
                  {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqa6_0RDjMesXoOyykCnNhjlGleeRMO86MQ&s",
                    name: "IIM Bangalore",
                  },
                  {
                    url: "https://upload.wikimedia.org/wikipedia/en/1/1b/NIT_Surat_Logo.svg",
                    name: "NIT Surat",
                  },
                  {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ercDncGsEV9NkGdp78EyagH6U3ZFKiLyfQ&s",
                    name: "Accenture",
                  },
                ]}
                scribble={{
                  text: "Qa + Dilr strategist",
                  side: "right",
                  color: "impact-blue",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
