import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./Data";

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}
