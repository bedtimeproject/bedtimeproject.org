import React from "react";
import DailyLimerickButton from "../Components/Buttons/DailyLimerickButton/DailyLimerickButton";
import PageTitle from "../Components/Structural/PageTitle/PageTitle";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home-Container">
      <PageTitle>The Bedtime Project</PageTitle>
      <div className="Home-Tagline">A fun and engaging way to hit the hay</div>
      <DailyLimerickButton />
    </div>
  );
}
