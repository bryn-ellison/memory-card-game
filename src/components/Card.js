export const Card = ({ card, handleClick }) => {
  return (
    <div className="card" id={card.id} onClick={() => handleClick()}>
      <h3>{card.charName}</h3>
      <p>Likes: {card.likes}</p>
      <p>Dislikes: {card.dislikes}</p>
    </div>
  );
};
