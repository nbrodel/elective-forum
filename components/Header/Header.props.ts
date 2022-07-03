import {Dispatch, SetStateAction} from "react";

export default interface HeaderProps {
    isAuth?: boolean,
    isActive?: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}
