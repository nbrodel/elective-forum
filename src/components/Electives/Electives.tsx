import React, {FC} from 'react';
import {observer} from "mobx-react-lite";

import Elective from "../Elective/Elective";

import {ElectivesProps} from "./Electives.props";

import styles from './Electives.module.css'
import {inject} from "mobx-react";

const Electives: FC<ElectivesProps> = ({onChangeTag, electives, currentTag}) => {
    const handleChangeTag = (value: string) => {
        onChangeTag(value)
    }

    const electiveItems = electives.map(el => {
        return <Elective key={Math.random()} {...el} onChangeTag={handleChangeTag} />
    })

    return (
        <div>
            {electiveItems.length > 0 ?
                <div className={styles.electives}>
                    {electiveItems}
                </div> : <h1>Элективов нет</h1>}
        </div>
    );
};

export default (Electives);
