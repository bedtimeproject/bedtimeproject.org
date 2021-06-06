import React, { useEffect, useState } from "react";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Contributor from "./Contributor/Contributor";

import AlexBio from "./bios/Alex.md";
import DanielBio from "./bios/Daniel.md";
import user from "./user.svg";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <About />
 * ```
 */
export default function About() {
  const [bios, setBios] = useState({});
  useEffect(
    /**
     * @function About~useEffect~getBio
     * @description Collects the bios from the Markdown, and displays them in
     * the component.
     * @author Alexander Burdiss
     * @since 6/6/21
     * @version 1.0.0
     */
    function getBio() {
      /**
       * @function About~useEffect~getBio~fetchBios
       * @description An async function that handles parsing the markdown from
       * the bios files.
       * @author Alexander Burdiss
       * @since 6/6/21
       * @version 1.0.0
       */
      async function fetchBios() {
        let bios = {};
        let resp = await fetch(AlexBio);
        let text = await resp.text();
        bios["Alex"] = text;

        resp = await fetch(DanielBio);
        text = await resp.text();
        bios["Daniel"] = text;

        setBios(bios);
      }

      fetchBios();
    },
    []
  );

  return (
    <div>
      <PageTitle>About</PageTitle>
      <div>
        The Bedtime Project aims at helping you get to sleep, or just have a fun
        evening with stories and games.
      </div>
      <div>Here are the people who make this site possible:</div>
      <div className="All-Contributors-Container">
        <Contributor name="Captain Code" bio={bios["Alex"]} image={user} />
        <Contributor name="FostyWally" bio={bios["Daniel"]} image={user} />
      </div>
    </div>
  );
}
