import {IElective} from "../../types/types";
import {MouseEventHandler} from "react";

export interface ElectivesProps {
    electives: IElective,
    onChangeTag: (tag: string) => void,
    currentTag: string
}
