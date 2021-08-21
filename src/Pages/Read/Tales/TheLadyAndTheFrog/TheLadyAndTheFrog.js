import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./TheLadyAndTheFrog.scss";
import image1 from "./images/IMG_3651.jpg";
import image2 from "./images/IMG-3646.jpg";
import image3 from "./images/IMG_3645.jpg";
import image4 from "./images/IMG_3654.jpg";
import image5 from "./images/IMG_3800.jpg";
import image6 from "./images/IMG_3642.jpg";
import image7 from "./images/IMG_3643.jpg";
import image8 from "./images/IMG_3649.jpg";
import image9 from "./images/IMG_3648.jpg";

/**
 * @namespace TheLadyAndTheFrog
 * @function TheLadyAndTheFrog
 * @description A horizontal scroll animation. This was originally created using
 * HTML and jQuery so it does not follow React best practices.
 * @author Alexander Burdiss
 * @since 5/14/21
 * @version 2.2.0
 * @component
 * @example
 * <TheLadyAndTheFrog />
 */
export default function TheLadyAndTheFrog() {
  useEffect(
    function setupComponent() {
      // Set window width based on width of content
      let windowWidth = 0;

      let cards = document.querySelectorAll(".TheLadyAndTheFrogWrapper .Card");
      cards.forEach((card) => {
        windowWidth += card.offsetWidth;
      });

      let main = document.querySelector(".TheLadyAndTheFrogWrapper main");
      main.style.width = `${windowWidth + 2000}px`;

      document.addEventListener("resize", function (e) {
        this.location.reload(false);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [image1, image2, image3, image4, image5, image6, image7, image8, image9]
  );

  return (
    <div className="TheLadyAndTheFrogWrapper">
      <Helmet>
        <title>The Lady and the Frog | The Bedtime Project</title>
      </Helmet>
      <main>
        <div className="Story">
          <div className="Card">
            <div className="Title">
              <h1>The Lady and the Frog</h1>
              <h2>By Daniel Stigmon</h2>
              <h3>Illustrated by AJ Maniglia</h3>
            </div>
            <div>
              <div className="frame">
                <img
                  src={image1}
                  alt="A frog catching a fly with its tongue while in a garden"
                />
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>There once was a lady who wanted to grow</p>
              <p>Pumpkin and carrot and jalapeno.</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img
                src={image2}
                alt="A lady in a yellow raincoat with purple hair and a small shovel in her hand."
              />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>She plotted the garden and marked it with log,</p>
              <p>What she didn’t see is there was a small little frog.</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img src={image3} alt="A small green frog" />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>This frog had nested just left of the orchids</p>
              <p>Thinking someday that she would have more kids.</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>But a tall fence had cut her off from her home</p>
              <p>It seems that the little frog might have to go roam...</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img src={image4} alt="A small green frog next to a fence" />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>The garden was mighty and kept growing out</p>
              <p>And soon the young frog just had to head out</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>Meanwhile the woman was having some trouble</p>
              <p>The pest in her garden were starting to double</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>“What should I do?</p>
              <p>Oh, I can’t kill my plants…</p>
              <p>With pesticides. WHY ARE THERE SO MANY ANTS?</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>She new that the chemicals caused such pollution</p>
              <p>Oh there must be something…</p>
              <p>Oh… whats the solution?</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>The frog and the lady both sat in the shade</p>
              <p>Thinking of new plans that had to be made</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img
                src={image5}
                alt="A frog sitting on a log looking at a woman"
              />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>They thought for so long they needed a snack</p>
              <p>The frog searched for bugs</p>
              <p>The lady looked in her sack</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>Ms. frog found a fly in a “thwoop” and one swallow</p>
              <p>The lady an egg that somehow was hollow.</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img src={image6} alt="A lady looking at a broken empty egg" />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>As she looked at the egg a fly flew right by</p>
              <p>It buzzed in her ears in her nose and her eye</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>“Shoo little bug, you irk me enough.”</p>
              <p>But, a solution was growing, and so, soon enough</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>With a “thwoop” and a swallow Ms. Frog caught that fly</p>
              <p>Now the frog and the lady were looking eye to eye.</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img
                src={image7}
                alt="A frog with a very long tongue catching a fly"
              />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>Ms. Frog blinked twice and started hopping away.</p>
              <p>Then the lady had an idea “Oh miss frog? Won’t you stay?</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>The little frog stopped stone cold in her tracks</p>
              <p>“Why on earth would she be calling me back?</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>Why should i help her she pushed me away</p>
              <p>But her heart was ok with forgiveness today.</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>So she hopped on back over saying “What can i do?”</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>“The bugs are all over</p>
              <p>They chew through the leaves</p>
              <p>I know that I nearly forced you to leave</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>But I have a garden and you need to eat</p>
              <p>You need a home and I have bugs to defeat."</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>The little frog thought and nodded her head</p>
              <p>“Wonderful! I will start making your bed!”</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>The frog and the lady worked all through the day</p>
              <p>Building a house and a bed she could lay.</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img
                src={image8}
                alt="A frog inside a house made of vegetables."
              />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>And the great garden grows mighty big and quite strong</p>
              <p>Because friendship has won, and the pests are all gone.</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>The lady can garden without any worry</p>
              <p>And the frog has a family, little Frogette and Murray</p>
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <p>They eat together no less than three times a week.</p>
              <p>Sometimes they even eat by a creek!</p>
            </div>
          </div>

          <div className="Card">
            <div className="frame">
              <img
                src={image9}
                alt="A silhouette of a woman and a frog watching the sunset."
              />
            </div>
          </div>

          <div className="Card">
            <div className="Text">
              <h2>The End</h2>
              <Link to="/read/tales" className="Back-Button">
                Back to site
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
