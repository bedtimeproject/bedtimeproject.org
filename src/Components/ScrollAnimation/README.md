# The Bedtime Project - Animated Story Module

## Data Structure

```js
const Stanzas = [
  {
    stanza:
      <div>
        <p>It's that time of day, it's the time we sit down</p>
        <p>And watch the sun fall on our small mountain town</p>
      </div>,
    images: [
      {
        component: <img src={Town} alt={"Town"} />,
        positionX: 'center',
        positionY: 'center',
        animation: 'fade',
        stanzaCount: 1,
      }
    ],
    backgroundColor: '#C80F90',
  },
  ...
];
```

## Example

```js
// Where Stanzas is the Story Data, organized as above.
<ScrollAnimation bodyStyleMinHeight={`${Stanzas.length * 100}vh`}>
  <Title background={stanzaBackgroundColor} author="Daniel Stigmon">
    The Guide to Sunset
  </Title>
  {Stanzas.map((stanza, index) => {
    return (
      <React.Fragment>
        <Stanza
          index={index + 1}
          background={stanzaBackgroundColor}
          stanzaCount={Stanzas.length}
        >
          {stanza[0]}
        </Stanza>
        <StanzaImage index={index + 1} stanzaCount={Stanzas.length}>
          {stanza[1]}
        </StanzaImage>
      </React.Fragment>
    );
  })}
  <Attribution background={stanzaBackgroundColor} stanzaCount={Stanzas.length}>
    <p>Written by Daniel Stigmon</p>
    <p>Animated by Alexander Burdiss</p>
  </Attribution>
</ScrollAnimation>
```
