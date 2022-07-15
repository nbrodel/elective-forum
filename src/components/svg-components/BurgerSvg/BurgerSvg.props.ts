import {Dispatch, SetStateAction} from "react";

export interface BurgerSvgProps {
    color: string,
    isActive: boolean | undefined,
    setIsActive: Dispatch<SetStateAction<boolean>>;
}
