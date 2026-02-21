import {Button} from "../Button";
import cls from "./Header.module.css"
import ReactLogo from "../../assets/react.svg";

export const Header = () => {
 return (
  <header className={cls.header}>
     <p>
      <img src={ReactLogo} alt={ 'React Logo' }></img>
      <span>React Cars</span>
     </p>

   <div className={ cls.headerButtons}>
    <Button isDisabled>Add Brand</Button>
    <Button>Login</Button>
   </div>

   </header>
 );
}

export default Header;