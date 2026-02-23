import cls from './BrandCardList.module.css';
import { BrandCard } from '../BrandCard/BrandCard.jsx';

export const BrandCardList = ({ cards }) => {
  return (
    <div className={cls.cardList}>
      {cards.map((card, index) => (
        <BrandCard card={card} key={index} />
      ))}
    </div>
  );
};

export default BrandCardList;
