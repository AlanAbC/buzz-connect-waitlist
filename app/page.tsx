"use client";
import EmailForm from "@/components/EmailFom";
import { Toaster } from "react-hot-toast";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SlideItem } from "./slide-item";

const itemsContent = [
  {
    title: "Matchmaking for Modern Collaborations",
    description:
      "Connect seamlessly with vetted creators and brands. Our platform bridges the gap between marketing campaigns and creative talent, transforming collaboration from complex to effortless",
    imageUrl: "/match.svg",
  },
  {
    title: "Campaign Discovery Reimagined",
    description:
      " Browse dynamic campaign opportunities tailored to your expertise. Creators can instantly view, filter, and apply to projects that align with their unique skills and audience, while businesses discover precisely matched creative partners.",
    imageUrl: "/discovery.svg",
  },
  {
    title: "Trust Secured, Collaboration Guaranteed",
    description:
      "We're your neutral mediator, protecting both businesses and creators. Our platform holds payment in escrow, verifies deliverables, and ensures complete project satisfaction before funds are released—creating a safe, transparent environment for every collaboration.",
    imageUrl: "/money.svg",
  },
];
export default function Home() {
  const handleDragStart = (e: any) => e.preventDefault();
  const slides = itemsContent.map((item, index) => (
    <SlideItem key={index} slide={{ ...item, handleDragStart }} />
  ));
  return (
    <>
      <Toaster />
      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-gradient-to-tr from-[#b21800] via-[#cf421f] to-[#fffb22] relative overflow-hidden items-center justify-center flex">
          <img
            src="/buzz-connect-logo.svg"
            className="w-[50px] absolute top-5 left-5 md:top-10 md:left-10"
          />
          <AliceCarousel disableButtonsControls mouseTracking items={slides} />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Power Your Campaigns:
            <br /> Get Early Entry!
          </h1>
          <p className="text-gray-500">
            Join the waitlist to be notified when our app is available!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
