import React, {FC} from 'react';
import clsx from "clsx";

import Tag from "../Tag/Tag";
import ReviewSvg from "../svg-components/ReviewSvg/ReviewSvg";

import ThemeContext from "../../contexts/ThemeProvider";
import {getThemeColor} from "../../utils/functions/functions";

import {ElectivePageProps, IReview} from "../../types/types";

import styles from './ElectivePage.module.css'

const ElectivePage:FC<ElectivePageProps> = ({elective, reviews}) => {
    const handleChangeTag = () => {
        return
    }

    const tags = elective?.tags?.map(tag => {
        // @ts-ignore
        return <Tag key={Math.random()} title={tag?.title.toLowerCase()} onClickTag={handleChangeTag} />
    })

    const authors = elective?.authors?.map(el => {
        return <div key={Math.random()} className={styles.description__author}>
            <span className={styles['description__author-name']}>{el.name}</span>
            <span className={styles['description__author-description']}>{el.description}</span>
        </div>
    })


    const reviewsElements = reviews?.map((review: IReview) => {
        const key = Math.random()

        return <ThemeContext.Consumer key={key}>{contextValue =>
                <div key={key} className={styles.review}>
                    <div className={styles.review__heading}>
                        <ReviewSvg color={getThemeColor(contextValue.isDarkTheme)} />

                        <div className={styles['review__author']}>
                            <div className={styles['review__author-title']}>
                                <div className={styles['review__author-title-text']}>{review.login}</div>
                                <div className={styles['review__author-description']}>написал об элективе <span className={styles['elective__title-review']}>
                                    {elective?.title?.trim()}</span> отзыв:
                                </div>
                            </div>

                            <div className={styles['review__author-bottom']} >
                                <div className={styles['review__author-line']} />
                            </div>
                        </div>
                    </div>

                    <span className={styles['review-title']}>{review.title}</span>
                </div>
        }</ThemeContext.Consumer>
    })

    return <ThemeContext.Consumer>{contextValue =>
        <>
            <div className={styles.elective}>
                <div className={styles.elective__title}>{elective?.title?.toLowerCase()}</div>

                <div className={clsx(styles['elective__full-description'], contextValue.isDarkTheme && styles.dark)}>
                    <div className={clsx(styles['full-description__main'], contextValue.isDarkTheme && styles.dark)}>
                        <h2>содержание курса: </h2>
                        <p className={styles['full-description__title']}>
                            {elective?.full_description}
                        </p>
                    </div>

                    <div className={styles['full-description__other']}>
                        <div className={styles.description__author}>
                            <h2>автор курса:</h2>
                            {authors}
                        </div>
                        <div className={styles.description__tags}>
                            направления: {tags}
                        </div>

                        {elective?.minor
                            ? <div className={clsx(styles.card__minor, contextValue.isDarkTheme && styles.dark)}>
                                <span>minor:</span> {elective?.minor}
                            </div>
                            : <></>
                        }
                    </div>
                </div>
            </div>


            <div className={styles.reviews__title}>отзывы</div>

            <div className={clsx(styles.reviews, contextValue.isDarkTheme && styles.dark)}>
                {reviewsElements}
            </div>
        </>
    }</ThemeContext.Consumer>
};

export default ElectivePage;
