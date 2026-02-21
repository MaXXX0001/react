import cls from "./MainLayout.module.css"
import {Outlet} from "react-router-dom";
import {Header} from "../Header/index.jsx";
export const MainLayout = () => {
   const currentYear = new Date().getFullYear();
    return (
        <div className={cls.mainLayout}>
            <Header/>
            <div className={cls.mainWrapper}>
                <main className={cls.main}>
                    <Outlet/>
                </main>
             <footer className={cls.footer}>
                 React Cars Poh+Poh hub | { currentYear }
             </footer>
            </div>
        </div>
    );
}

export default MainLayout;