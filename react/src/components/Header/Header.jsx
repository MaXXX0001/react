import {Button} from "../Button";
import cls from "./Header.module.css"
import ReactLogo from "../../assets/react.svg";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
 return (
  <header className={cls.header}>
     <p onClick={() => navigate('/')}>
      <img src={ReactLogo} alt={ 'React Logo' }></img>
      <span>React Cars</span>
     </p>

   <div className={ cls.headerButtons}>
    <Button onClick={() => navigate('/addbrand')}>Add Brand</Button>
    <Button>Login</Button>
   </div>

   </header>
 );
}

export default Header;