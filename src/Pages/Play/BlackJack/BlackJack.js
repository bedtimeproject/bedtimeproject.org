import { useEffect } from "react";
import "./BlackJack.scss";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import Waves from "../../../Components/Background/Waves/Waves";

/**
 * @function BlackJack
 * @description Manages all the logic for the game Blackjack.
 * @author Alexander Burdiss
 * @since 7/31/20
 * @component
 * @example
 * ```jsx
 * <BlackJack />
 * ```
 */
export default function BlackJack() {
  useEffect(function createGame() {
    const suites = ["Spade", "Heart", "Diamond", "Club"];
    const ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const scores = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 10,
      Q: 10,
      K: 10,
    };

    let cards = [];
    let userCards = [];
    let computerCards = [];
    let discards = [];

    // DOM elements
    const table = document.querySelector(".Card-Table");
    const userHand = document.querySelector(".Hand-User-Cards");
    const computerHand = document.querySelector(".Hand-Computer-Cards");

    const userScoreContainer = document.querySelector(".Score-User");
    const computerScoreContainer = document.querySelector(".Score-Computer");

    const hitButton = document.querySelector(".JS-Hit");
    const stayButton = document.querySelector(".JS-Stay");

    const bustModal = document.querySelector(".Bust-Modal");
    const bustModalMessageContainer = document.querySelector(
      ".Bust-Modal-Message"
    );

    const blackjackModal = document.querySelector(".Blackjack-Modal");
    const blackjackModalMessageContainer = document.querySelector(
      ".Blackjack-Modal-Message"
    );

    // Add Event listeners to buttons
    hitButton.addEventListener("click", dealToUser);
    stayButton.addEventListener("click", stay);

    bustModal.addEventListener("click", resetGame);
    blackjackModal.addEventListener("click", resetGame);

    // Beginning the game
    initializeDeck();

    dealToUser();
    dealToUser();

    /**
     * @description Initializes a full deck of cards, and shuffles.
     */
    function initializeDeck() {
      let suitesIndex, ranksIndex;

      for (suitesIndex = 0; suitesIndex < suites.length; suitesIndex++) {
        for (ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
          cards.push({
            suite: suites[suitesIndex],
            rank: ranks[ranksIndex],
          });
        }
      }
      shuffle(cards);
    }

    /**
     * @description Takes in a deck and shuffles using the Fisher-Yates Shuffle
     *
     * @param {card[]} deck
     */
    function shuffle(deck) {
      let randomCard, temp, index;

      for (index = deck.length - 1; index > -1; index--) {
        randomCard = Math.floor(Math.random() * index);
        temp = deck[index];
        deck[index] = deck[randomCard];
        deck[randomCard] = temp;
      }
    }

    /**
     * @description re-shuffles the discards, and places them back in the deck.
     */
    function redeal() {
      cards = cards.concat(discards);
      discards = [];
      shuffle(cards);
    }

    /**
     * @description Creates a card element that is renderable to the screen.
     * @param {card} card The card to create
     * @param {boolean} flipped The flipped state of the card.
     */
    function createPrintCard(card, flipped) {
      let newCard = document.createElement("div");
      if (flipped) {
        newCard.classList.add("Flipped");
      }
      newCard.innerHTML = `<span>${card.rank}</span>`;
      newCard.classList.add(card.suite);
      return newCard;
    }

    /**
     * @description Removes one card from the deck, and adds it to the player's
     * hand.
     */
    function dealToUser() {
      if (cards.length === 0) {
        redeal();
      }

      let card = cards.shift();
      userCards.push(card);

      userHand.appendChild(createPrintCard(card));

      // The computer may play a turn after the user.
      playComputerTurn();

      updateScores();
    }

    /**
     * @description The logic for determining whether a computer will stay or
     * hit.
     */
    function playComputerTurn() {
      let randomLimit, computerScore;
      // get a random limit between 15 and 18
      randomLimit = 15 + Math.floor(Math.random() * 3);
      computerScore = calculateScore(computerCards);

      if (computerScore < randomLimit) {
        dealToComputer();
      }
    }

    /**
     * @description Removes one card from the deck, and adds it to the
     * computer's hand.
     */
    function dealToComputer() {
      if (cards.length === 0) {
        redeal();
      }

      let card = cards.shift();
      computerCards.push(card);

      computerHand.appendChild(createPrintCard(card, true));
    }

    /**
     * @description
     */
    function stay() {
      playComputerTurn();
      playComputerTurn();

      let userScore = calculateScore(userCards);
      let computerScore = calculateScore(computerCards);

      if (computerScore <= 21) {
        if (userScore === computerScore) {
          bust("It's a tie, but the computer still wins");
        } else if (userScore < computerScore) {
          bust("Learn to take better risks.");
        } else {
          blackjack("Congrats. You played well.");
        }
      } else {
        blackjack("Congratulations. You lucked out.");
      }
    }

    /**
     * @description Calculates the score of one hand.
     * @param {card[]} cards The deck to calculate score
     * @returns the score of the hand passed in
     */
    function calculateScore(cards) {
      let userScore = 0,
        index,
        hasAce = false;

      for (index = 0; index < cards.length; index++) {
        let currentValue = cards[index].rank;
        if (currentValue !== "A") {
          userScore += scores[currentValue];
        } else {
          hasAce = true;
        }
      }

      if (hasAce) {
        if (userScore <= 10) {
          userScore += 11;
        } else {
          userScore += 1;
        }

        // If the user had two aces, the hand will only sum 11 at this point,
        // and need one extra point for the other ace.
        if (userScore === 11) {
          userScore += 1;
        }
      }

      return userScore;
    }

    /**
     * @description Calculates the scores of both players and updates the
     * display.
     */
    function updateScores() {
      let userScore;
      // let computerScore;

      userScore = calculateScore(userCards);
      // computerScore = calculateScore(computerCards);

      userScoreContainer.innerText = userScore;
      checkScore(userScore);
    }

    /**
     * @description Checks to make sure the user's score isn't over 21. Shows
     * Bust modal if over.
     */
    function checkScore(userScore) {
      if (userScore === 21) {
        blackjack("Nice one.");
      } else if (userScore > 21) {
        bust("Better luck next time.");
      }
    }

    /**
     * @description Function called when the user hits blackjack.
     */
    function blackjack(message) {
      blackjackModal.classList.toggle("Blackjack-Modal-Active");
      blackjackModalMessageContainer.innerText = message;
      showComputerHand();
    }

    /**
     * @description Function called when the user busts.
     */
    function bust(message) {
      bustModal.classList.toggle("Bust-Modal-Active");
      bustModalMessageContainer.innerText = message;
      showComputerHand();
    }

    function showComputerHand() {
      computerScoreContainer.innerText = calculateScore(computerCards);

      let index;
      const flippedCards = document.querySelectorAll(".Flipped");

      for (index = 0; index < flippedCards.length; index++) {
        flippedCards[index].classList.remove("Flipped");
      }
    }

    /**
     * @description discards computer and user cards, and deals more cards.
     */
    function resetGame() {
      // Clear Modals
      if (bustModal.classList.contains("Bust-Modal-Active")) {
        bustModal.classList.remove("Bust-Modal-Active");
      }
      if (blackjackModal.classList.contains("Blackjack-Modal-Active")) {
        blackjackModal.classList.remove("Blackjack-Modal-Active");
      }

      discards = discards.concat(userCards, computerCards);

      while (userHand.hasChildNodes()) {
        userHand.firstChild.remove();
      }

      while (computerHand.hasChildNodes()) {
        computerHand.firstChild.remove();
      }

      userCards = [];
      computerCards = [];

      computerScoreContainer.innerText = "?";

      dealToUser();
      dealToUser();
    }

    /**
     * @description Displays the entire deck of cards to the screen. Used for
     * testing purposes.
     */
    // eslint-disable-next-line no-unused-vars
    function printDeck() {
      let index;

      for (index = 0; index < cards.length; index++) {
        let newCard = createPrintCard(cards[index]);

        table.appendChild(newCard);
      }
    }
  }, []);

  return (
    <main className="BlackJack-Container">
      <Waves />
      <PageTitle>BlackJack</PageTitle>
      <div className="Card-Table">
        <div className="Hand-Container">
          <div className="Hand Hand-User">
            <div>
              User
              <div className="Score Score-User">8</div>
            </div>
            <div className="Hand-User-Cards"></div>
          </div>
          <div className="Hand Hand-Computer">
            <div>
              Computer
              <div className="Score Score-Computer">?</div>
            </div>
            <div className="Hand-Computer-Cards"></div>
          </div>
        </div>
      </div>

      <div className="Button-Container">
        <button className="Hit JS-Hit">Hit</button>
        <button className="Stay JS-Stay">Stay</button>
      </div>

      <div className="Bust-Modal">
        <div className="Bust-Modal-Text">
          <h2>You Lose!</h2>
          <p className="Bust-Modal-Message"></p>
        </div>
      </div>
      <div className="Blackjack-Modal">
        <div className="Bust-Modal-Text">
          <h2>You Win!</h2>
          <p className="Blackjack-Modal-Message"></p>
        </div>
      </div>
    </main>
  );
}
