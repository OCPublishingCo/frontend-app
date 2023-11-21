import "./ComponentPricingCard.css";

const ComponentPricingCard = ({
  title,
  price,
  priceContent,
  isActive,
  planId,
  onClick,
}) => {
  console.log("isActive", isActive);
  return (
    <div
      className={isActive ? "price-card active-price-card" : "price-card"}
      onClick={() => {
        onClick(planId);
      }}
    >
      <h4>{title}</h4>
      <h6>{price}</h6>
      <ul>
        {priceContent[0]?.priceContentData.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ComponentPricingCard;
