import {Dispatch, SetStateAction} from "react";

export interface MobileMenuProps {
    isActive?: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}
