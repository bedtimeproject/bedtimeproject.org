import React, { useEffect, useState } from "react";
import Lighthouse from "../../Components/Background/Lighthouse/Lighthouse";
import "./Construction.scss";

import QuipPopup from "../../Components/General/QuipPopup/QuipPopup";

/**
 * @namespace Construction
 * @function Construction
 * @author Alexander Burdiss
 * @since 10/10/21
 * @version 1.0.0
 * @component
 */
export default function Construction() {
  const [quips, setQuips] = useState([]);
  /**
   * @async
   * @function Quips~fetchQuips
   * @description Fetches All of the quips from the drupal backend and adds
   * them to the state variable in this component.
   * @author Alexander Burdiss
   * @since 5/27/21
   * @version 1.1.0
   */
  function fetchQuips() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/quips")
      .then((resp) => resp.json())
      .then((data) => setQuips(data));
  }
  useEffect(() => {
    fetchQuips();
  }, []);
  console.log(quips);
  return (
    <div className="Construction-Container">
      <div className="Text-Container">
        <h1>The Bedtime Project</h1>
        <div>Coming December 1, 2021</div>
      </div>
      <Lighthouse />
      <QuipPopup quip={quips[1]} className="Quip1" />
      <QuipPopup quip={quips[0]} className="Quip2" />
    </div>
  );
}
