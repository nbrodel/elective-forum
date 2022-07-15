import {IAuthor, ITag} from "../../types/types";

export interface ElectiveProps {
    electiveId: number,
    authors: IAuthor,
    short_description: string,
    tags: ITag,
    title: string,
    minor_title: string,
    onChangeTag: (tag: string) => void
}
