import BlueFlowers from "./images/BlueFlowers.svg";
import CaveEntrance from "./images/CaveEntrance.svg";
import CherryPie from "./images/CherryPie.svg";
import Constellation1 from "./images/Constellation1.svg";
import Kite from "./images/BlueKite.svg";
import Ramen from "./images/Ramen.svg";
import Town from "./images/Town.svg";
import Treasure from "./images/Treasure.svg";
import Mountain from "../../../../assets/images/Mountain.svg";
import Sun from "../../../../assets/images/Sun.svg";

export default {
  defaultBackgroundColor: "#EEEEEE",
  stanzaBackgroundColor: "#8bc9e4",
  titleBackground: "#0000FF",
  attributionBackground: "#0000FF",
  animationOverlap: "false",
  title: "The Guide to Sunset",
  author: "C.A. Moonbloom",
  titleCard: "default",
  attributionCard: "default",
  stanzaCard: "default",
  attribution: "Written by C.A. Moonbloom\nAnimated by Captain Code",
  body: [
    {
      stanza: (
        <div>
          <p>It's that time of day, it's the time we sit down</p>
          <p>And watch the sun fall on our small mountain town</p>
        </div>
      ),
      images: [
        {
          component: <img src={Sun} alt={"Sun"} />,
          positionX: "right",
          positionY: "top",
          animation: "slidedown",
          stanzaCount: 1,
        },
        {
          component: <img src={Mountain} alt={"Mountain"} />,
          positionX: "center",
          positionY: "center",
          animation: "fade",
          stanzaCount: 2,
        },
        {
          component: <img src={Town} alt={"Town"} />,
          positionX: "center",
          positionY: "center",
          animation: "fade",
          stanzaCount: 1,
        },
        {
          component: (
            <img
              src={Mountain}
              alt={"Mountain"}
              style={{ transform: "scaleX(-1)" }}
            />
          ),
          positionX: "left",
          positionY: "bottom",
          animation: "fade",
          stanzaCount: 4,
        },
      ],
      background: "#8bc9e4",
    },

    {
      stanza: (
        <div>
          <p>No ones in bed, the lights barely around</p>
          <p>In this time of day there are secrets to be found.</p>
        </div>
      ),
      images: [
        {
          component: <img src={Constellation1} alt={"Constellation"} />,
          positionX: "left",
          positionY: "top",
          animation: "slideupleft",
          stanzaCount: 1,
        },
        {
          component: (
            <img
              src={BlueFlowers}
              alt={"Blue Flowers"}
              style={{
                transform: "scale(-0.4)  translateX(55%) translateY(-55%)",
              }}
            />
          ),
          positionX: "left",
          positionY: "bottom",
          animation: "fade",
          stanzaCount: 2,
        },
      ],
      background: "#41a6d3",
    },

    {
      stanza: (
        <div>
          <p>You might walk up Mt. Snark where the blue pongos grow</p>
          <p>And find an old lion with a hat made of snow</p>
        </div>
      ),
      images: [],
      background: "#c5e4f1",
    },

    {
      stanza: (
        <div>
          <p>And if you ask him real nicely he might let you through</p>
          <p>And then Into the ancient old cave of Mardue</p>
        </div>
      ),
      images: [
        {
          component: <img src={CaveEntrance} alt={"Cave Entrance"} />,
          positionX: "center",
          positionY: "bottom",
          animation: "fade",
          stanzaCount: 1,
        },
      ],
      background: "#c5e4f1",
    },

    {
      stanza: (
        <div>
          <p>Where a gentle wind guides you, you might have to run,</p>
          <p>To a secret gold room, that shows only in sun. </p>
        </div>
      ),
      images: [],
      background: "#ffef99",
    },

    {
      stanza: (
        <div>
          <p>For a minute a day the door will glow bright</p>
          <p>For a minute a day, all that gold is in sight.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Or if you like water instead of hard gold</p>
          <p>There's a lake right below it, called Carrigans Hold.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Where the water is clear as a piece of cut glass</p>
          <p>where the fish will sing songs to you, carp and the bass</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>saying “Hi there young traveller what is your name?</p>
          <p>What is your secret, your dream and your game”</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>And from these three things they’ll write such a tune</p>
          <p>For you and you only, or… you and the moon. </p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Or</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>If you don’t like the dark, and would rather more playtime</p>
          <p>There's a crooked old ladder that goes straight up to daytime.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <div>
            <p>The higher you climb, the higher the chances</p>
            <p>Of seeing the rarest of thunder cloud dances.</p>
          </div>
          ,
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>They call it the Stratus, it comes once a storm</p>
          <p>And the lighting, it causes the air to be warm</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>The dancing at first may not be what it seems</p>
          <p>But to see two clouds dancing is a sight from a dream</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Don’t get too close though, not even by dare</p>
          <p>For too close will put quite a frizz in your hair.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Three more clouds up from those thunderstorm dancers</p>
          <p>Is cloud 85 where one always finds answers</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>For on this cloud sits the great Faelyn the wise</p>
          <p>The wisest and slyest of all in the skies.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>“You’ll ask, where should i go, and oh what should I do?”</p>
          <p>“She’ll say, that answer is one that belongs only to you.”</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>“But i can recommend a good place to get pie</p>
          <p>Theres a cloud right above you called “ Pie in the Sky”</p>
        </div>
      ),
      images: [
        {
          component: <img src={CherryPie} alt={"Cherry Pie"} />,
          positionX: "center",
          positionY: "center",
          animation: "fade",
          stanzaCount: 1,
        },
      ],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>But pie is not best to have right before bed. </p>
          <p>So save it and have it for breakfast instead</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>If you want to climb higher above the pie place</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Be careful…</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>For too high you might spend the night up in space.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Now, back down on earth there is lots more to find</p>
          <p>Like Mrs. Cronkilver, whose so very kind</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>She’ll give you a penny for nothing at all</p>
          <p>Saying this is for luck and to help you walk tall.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>And Mr. Cronkilver, in dark lost his kite</p>
          <p>He’ll ask, “Please could you go ask the sun for more light?”</p>
        </div>
      ),
      images: [
        {
          component: <img src={Kite} alt={"Kite"} />,
          positionX: "center",
          positionY: "center",
          animation: "fade",
          stanzaCount: 1,
        },
      ],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>But...</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>The suns nearly gone now, the world has gone blue,</p>
          <p>There is light though, and so there is still much to do.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>You can try to be quick, try to find the first star</p>
          <p>at this time of night, no one knows where they are.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>They pop one by one from the haze of the sky</p>
          <p>This can be slow, good thing you have pie!</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>If you find the first one, oh, then what celebration</p>
          <p>You might get your very own star constellation.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>And now the wind blows just as gently as ever</p>
          <p>It’s Cooling off flowers that think they are clever</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>It’s Cooling off poodles, and freshly baked strudels</p>
          <p>And Cooling down noodles and brown labradoodles</p>
        </div>
      ),
      images: [
        {
          component: <img src={Ramen} alt={"Ramen"} />,
          positionX: "left",
          positionY: "top",
          animation: "fade",
          stanzaCount: 1,
        },
      ],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>It’s Cooling the world ‘till just it's just about cold</p>
          <p>And Cooling the trees and the room full of gold</p>
        </div>
      ),
      images: [
        {
          component: <img src={Treasure} alt={"Treasure"} />,
          positionX: "right",
          positionY: "bottom",
          animation: "fade",
          stanzaCount: 1,
        },
      ],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Then Cooling the fish at old carrigans hold</p>
          <p>And Cooling the rungs of the ladder you hold</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>You can taste the last bit of the sun as it goes</p>
          <p>They say all the red makes it taste like a rose. </p>
          <p>See if you smell it someday with your nose.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>The world is cold now, but one place is warm</p>
          <p>In Here far away from that big dancing storm.</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>And Under your blanket, you’ve trapped some sunlight</p>
          <p>New adventures at sunrise, but for now</p>
        </div>
      ),
      images: [],
      background: "",
    },

    {
      stanza: (
        <div>
          <p>Goodnight</p>
        </div>
      ),
      images: [],
      background: "",
    },
  ],
};
