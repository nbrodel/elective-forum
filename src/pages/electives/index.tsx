import React, {useState} from 'react';
import {NextPage} from "next";
import MainLayout from "../../layouts/MainLayout";
import Catalog from "../../components/Catalog/Catalog";
import {IElective, ITag} from "../../types/types";
import {ElectivePageProps} from "../../components/ElectivePage/ElectivePage.props";
import {inject} from "mobx-react";
import {observer} from "mobx-react-lite";

const Index = observer(({electives, tags}: ElectivePageProps) => {
    return (
        <MainLayout>
            <Catalog tags={tags} electives={electives} />
        </MainLayout>
    );
});

export default inject('TagStore')(Index);

export async function getServerSideProps() {
    const response = await fetch('https://elective-forum-backend.herokuapp.com/api/electives')
    const electives = await response.json()

    const res = await fetch('https://elective-forum-backend.herokuapp.com/api/tags')
    const tags = await res.json()

    return {
        props: {
            electives,
            tags
        },
    }
}
