export const Card = ({ card, handleClick }) => {
  return (
    <div className="card" id={card.id} onClick={() => handleClick(card.id)}>
      <h3>{card.charName}</h3>
      <img src={card.image} alt={card.charName} height={200} width={200}></img>
      <p>Likes: {card.likes}</p>
      <p>Dislikes: {card.dislikes}</p>
    </div>
  );
};
