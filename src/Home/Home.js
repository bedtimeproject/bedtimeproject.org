import React from "react";
import DailyLimerickButton from "../Components/Buttons/DailyLimerickButton/DailyLimerickButton";
import PageTitle from "../Components/Structural/PageTitle/PageTitle";
import "./Home.css";

/**
 * @function Home
 * @description The contents to render on the front page of the website.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Home />
 * ```
 */
export default function Home() {
  return (
    <div className="Home-Container">
      <PageTitle>The Bedtime Project</PageTitle>
      <div className="Home-Tagline">A fun and engaging way to hit the hay</div>
      <DailyLimerickButton />
    </div>
  );
}
