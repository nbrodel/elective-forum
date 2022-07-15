import React from "react";

import MainLayout from '../../layouts/MainLayout';
import ElectivePage from "../../components/ElectivePage/ElectivePage";

import {ElectivePageProps} from "../../types/types";

const Elective = ({elective, reviews}: ElectivePageProps) => {
    return (
        <MainLayout>
            <ElectivePage elective={elective} reviews={reviews?.message ? null : reviews} />
        </MainLayout>
    )
}

// @ts-ignore
export async function getServerSideProps({params}) {
    const response = await fetch(`https://elective-forum-backend.herokuapp.com/api/electives/${params.id}`)
    const {message, ...elective} = await response.json()

    const res = await fetch(`https://elective-forum-backend.herokuapp.com/api/reviews/${params.id}`)
    const review = await res.json()

    if(message) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            elective: elective,
            reviews: review
        }
    }
}

export default Elective
