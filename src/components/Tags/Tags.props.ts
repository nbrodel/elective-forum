import {ITag} from "../../types/types";

export interface TagsProps {
    tags: ITag,
    onChangeTag: (tag: string) => void,
    currentTag?: string
}
