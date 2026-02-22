import { Button } from '../Button/index.jsx';
import cls from './BrandCard.module.css';
import { useNavigate } from 'react-router-dom';

export const BrandCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>Year founded {card.editDate}</div>
      <div>{card.brand}</div>

      <h5 className={cls.cardTitle}>{card.car}</h5>

      <div className={cls.cardModel}>
        <label>some text</label>
        <p className={cls.cardModels}>{card.otherCars}</p>
      </div>

      <Button onClick={() => navigate(`/brand/${card.id}`)}>Show</Button>
    </div>
  );
};

export default BrandCard;
