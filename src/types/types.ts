export interface ISize {
    width: number,
    height: number
}

export interface ElectivePageProps {
    elective?: IElective,
    reviews?: IReview | null,
    tags?: ITag
}

export interface IReview {
    title?: string,
    login?: string,
    message?: string,

    // @ts-ignore
    map(arg0: (tag: any) => void)
}

export interface ITag {
    // @ts-ignore
    map(arg0: (tag: any) => void)

    // @ts-ignore
    forEach(arg0: (tag: any) => void)
    electiveId?: number,
    title?: string,
    // @ts-ignore
    sort(param: (a: string, b: string) => number)
}

export interface IElective {
    length: number;
    authors?: Array<IAuthor>,
    electiveId?: string,
    full_description?: string,
    minor?: string,
    short_description?: string,
    tags?: Array<ITag>,
    title?: string

    // @ts-ignore
    map(element: (el) => JSX.Element);
    // @ts-ignore
    filter(param: (el) => any): IElective;
}

export interface IAuthor {
    electiveId: number,
    name: string,
    description: string

    // @ts-ignore
    map(element: (el: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => JSX.Element);
}

