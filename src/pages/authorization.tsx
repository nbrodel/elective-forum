import React from "react";
import type {NextPage} from 'next'

import MainLayout from "../layouts/MainLayout";
import LoginBlock from "../components/ui-components/LoginBlock/LoginBlock";
import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";


const Authorization: NextPage = () => {
    return (
        <MainLayout>
            <LoginBlock>
                <AuthorizationForm />
            </LoginBlock>
        </MainLayout>
    )
}

export default Authorization
