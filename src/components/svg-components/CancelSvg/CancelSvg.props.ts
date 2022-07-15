import {Dispatch, SetStateAction} from "react";

export interface CancelSvgProps {
    color: string,
    isActive: boolean | undefined,
    setIsActive: Dispatch<SetStateAction<boolean>>
}
