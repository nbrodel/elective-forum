import React, {FC} from 'react';

import Tag from "../Tag/Tag";

import {TagsProps} from "./Tags.props";

import styles from './Tags.module.css'


const Tags:FC<TagsProps>  = ({tags, onChangeTag, currentTag}) => {
    const tagsArr = ['все']

    tags.map(tag => {
        tagsArr.push(tag.title.toLowerCase())
    })

    const handleChangeTag = (value: string) => {
        onChangeTag(value)
    }


    return (
        <div className={styles.tags}>
            {tagsArr.map(tag =>
                // @ts-ignore
                <Tag currentTag={currentTag} key={Math.random()} title={tag} onClickTag={handleChangeTag} />
            )}
        </div>
    );
}

export default Tags;
