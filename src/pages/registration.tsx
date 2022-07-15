import React from "react";
import type {NextPage} from 'next'

import MainLayout from "../layouts/MainLayout";
import LoginBlock from "../components/ui-components/LoginBlock/LoginBlock";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const Authorization: NextPage = () => {

    return (
        <MainLayout>
            <LoginBlock>
                <RegistrationForm />
            </LoginBlock>
        </MainLayout>
    )
}

export default Authorization
