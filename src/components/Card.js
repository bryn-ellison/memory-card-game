export const Card = ({ card }) => {
  return (
    <div className="card" id={card.id}>
      <h3>{card.charName}</h3>
      <p>Likes: {card.likes}</p>
      <p>Dislikes: {card.dislikes}</p>
    </div>
  );
};
