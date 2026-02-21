import {Button} from "../Button/index.jsx";
import cls from "./BrandCard.module.css"

export const BrandCard = () => {
 return (
  <div className={cls.card}>
     <div className={cls.cardLabels}>Year founded</div>
     <div>Country</div>

      <h5 className={cls.cardTitle}>Brand Name</h5>

      <div className={cls.cardModel}>
            <label>some text</label>
            <p className={cls.cardModels}>Lorem ipsum dolor sit amet.</p>
      </div>

      <Button onClick={() => console.log('clicked')}>Show</Button>
  </div>
 );
}

export default BrandCard;