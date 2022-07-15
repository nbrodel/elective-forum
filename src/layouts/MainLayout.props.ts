import {ReactNode} from "react";

export default interface MainLayoutProps {
    children: ReactNode,
    title?: string,
    keywords?: string,
    description?: string
}
