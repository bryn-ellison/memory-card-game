export const Card = ({ card, handleClick }) => {
  return (
    <div className="Card" id={card.id} onClick={() => handleClick(card.id)}>
      <img src={card.image} alt={card.charName} height={230} width={230}></img>
      <h3>{card.charName}</h3>
      <p>Likes: {card.likes}</p>
      <p>Dislikes: {card.dislikes}</p>
    </div>
  );
};
