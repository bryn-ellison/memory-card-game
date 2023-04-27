import { useState } from "react";
import { Card } from "./Card";

export const CardDeck = () => {
  const sunnyCards = [
    {
      charName: "Charlie",
      likes: "Ghouls",
      dislikes: "Dennis, because he is bastard man",
      id: 1,
    },
    { charName: "Mac", likes: "Chase Utley", dislikes: "Blasphemers", id: 2 },
    {
      charName: "Dennis",
      likes: "Sports Utility Vehicles",
      dislikes: "Alimony payments",
      id: 3,
    },
    {
      charName: "Dee",
      likes: "Crack",
      dislikes: "Travelling on the bus",
      id: 4,
    },
    {
      charName: "Frank",
      likes: "Blasting",
      dislikes: "Alimony payments",
      id: 5,
    },
  ];
  const [cardState, setCardState] = useState(sunnyCards);

  const handleClick = () => {
    const unshuffled = [...cardState];
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardState(shuffled);
  };

  return (
    <div>
      {cardState.map((card) => {
        return <Card card={card} key={card.id} handleClick={handleClick} />;
      })}
    </div>
  );
};
