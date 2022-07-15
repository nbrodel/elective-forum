import {MouseEventHandler} from "react";

export interface TagProps {
    currentTag?: string,
    title: string,
    onClickTag: (e: MouseEventHandler<HTMLButtonElement>) => void
}
