import { useEffect, useState } from "react";
import { Card } from "./Card";
import charlie from "../images/charlie.png";
import mac from "../images/mac.webp";
import dennis from "../images/dennis.webp";
import dee from "../images/dee.jpg";
import frank from "../images/frank.jpg";
import cricks from "../images/cricks.jpg";
import gail from "../images/gail.jpeg";
import waitress from "../images/waitress.png";
import liam from "../images/liam.jpg";
import zee from "../images/zee.png";

export const CardDeck = ({ addScore }) => {
  const sunnyCards = [
    {
      charName: "Charlie",
      likes: "Ghouls, The Waitress",
      dislikes: "People's knees",
      id: 1,
      image: charlie,
    },
    {
      charName: "Mac",
      likes: "Chase Utley",
      dislikes: "Blasphemers",
      id: 2,
      image: mac,
    },
    {
      charName: "Dennis",
      likes: "Sports Utility Vehicles",
      dislikes: "Alimony payments",
      id: 3,
      image: dennis,
    },
    {
      charName: "Dee",
      likes: "Crack",
      dislikes: "Travelling on the bus",
      id: 4,
      image: dee,
    },
    {
      charName: "Frank",
      likes: "Blasting",
      dislikes: "Alimony payments",
      id: 5,
      image: frank,
    },
    {
      charName: "Rickedy Cricket",
      likes: "PCP",
      dislikes: "Not having PCP",
      id: 6,
      image: cricks,
    },
    {
      charName: "Gail the Snail",
      likes: "Raves",
      dislikes: "Saltings",
      id: 7,
      image: gail,
    },
    {
      charName: "The Waitress",
      likes: "Dennis",
      dislikes: "Charlie",
      id: 8,
      image: waitress,
    },
    {
      charName: "Liam McPoyle",
      likes: "Brotherly love",
      dislikes: "The Gang",
      id: 9,
      image: liam,
    },
    {
      charName: "Zee",
      likes: "Jean shorts",
      dislikes: "Bust jean shorts",
      id: 10,
      image: zee,
    },
  ];
  const [cardState, setCardState] = useState(sunnyCards);

  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const hasDuplicate = clickedCards.some(
      (val, i) => clickedCards.indexOf(val) !== i
    );
    if (hasDuplicate) {
      setClickedCards([]);
    } else {
      addScore(clickedCards.length);
    }
  }, [clickedCards, addScore]);

  const handleClick = (id) => {
    const unshuffled = [...cardState];
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardState(shuffled);
    setClickedCards((prevArray) => [...prevArray, id]);
  };

  return (
    <div className="CardDeck">
      {cardState.map((card) => {
        return <Card card={card} key={card.id} handleClick={handleClick} />;
      })}
    </div>
  );
};
