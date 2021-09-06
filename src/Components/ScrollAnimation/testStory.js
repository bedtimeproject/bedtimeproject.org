export const testStory = {
  defaultBackgroundColor: "#DDDDDD",
  stanzaBackgroundColor: "#8bc9e4",
  animationOverlap: "true",
  title: "A Scroll Animation",
  author: "FostyWally",
  titleCard: "default",
  titleBackground: "#FF0000",
  attributionBackground: "#00FF00",
  attributionCard: "default",
  stanzaCard: "default",
  attribution: "Written by FostyWally\nAnimated by Captain Code 😎",
  body: [
    {
      stanza:
        "It's that time of day, it's the time we sit down.\n\nAnd watch the sun fall on our small mountain town",
      images: [
        {
          component: "Sun",
          positionX: "right",
          positionY: "top",
          animation: "slidedown",
          stanzaCount: 1,
        },
        {
          component: "Mountain",
          positionX: "center",
          positionY: "center",
          animation: "fade",
          stanzaCount: 2,
        },
        {
          component: "Town",
          positionX: "center",
          positionY: "center",
          animation: "fade",
          stanzaCount: 1,
        },
        {
          component: "Mountain",
          positionX: "left",
          positionY: "bottom",
          animation: "fade",
          stanzaCount: 4,
        },
      ],
      background: "#8bc9e4",
    },

    {
      stanza:
        "No ones in bed, the lights barely around.\n\nIn this time of day there are secrets to be found.",
      images: [
        {
          component: "Constellation 1",
          positionX: "left",
          positionY: "top",
          animation: "slideupleft",
          stanzaCount: 1,
        },
        {
          component: "Blue Flowers",
          positionX: "left",
          positionY: "bottom",
          animation: "fade",
          stanzaCount: 2,
        },
      ],
      background: "#41a6d3",
    },

    {
      stanza:
        "You might walk up Mt. Snark where the blue pongos grow\n\nAnd find an old lion with a hat made of snow",
      images: [],
      background: "#c5e4f1",
    },
  ],
};
