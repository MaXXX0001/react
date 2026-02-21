import cls from "./Button.module.css"
import { ReactNode } from 'react';

export const Button = (props) => {
    const { isActive, isDisabled, onClick, children } = props;

    return (
        <button
            className={`${cls.btn} ${isActive ? cls.primary : ""}`}
            onClick={ onClick }
            disabled={ isDisabled }
        >
            {children }
        </button>
    )
}