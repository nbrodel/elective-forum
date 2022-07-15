import React, {useState} from 'react';
import {useRouter} from "next/router";

import Input from "../ui-components/Input/Input";
import LoginButton from "../ui-components/LoginButton/LoginButton";

import AuthStore from "../../store/AuthStore";
import {RegExp} from "../../utils/constants/constants";

import styles from './AuthorizationForm.module.css'

const AuthorizationForm = () => {
    const router = useRouter()

    const [isValidLogin, setIsValidLogin] = useState<boolean | undefined>(false);
    const [isPasswordLogin, setIsPasswordLogin] = useState<boolean | undefined>(false);

    const handleChangeValidation = (name: string | undefined, value: string) => {
        if(name === 'login') {
            if(RegExp.username.test(value)) {
                setIsValidLogin(true)
            } else {
                setIsValidLogin(false)
            }
        } else if(name === 'password') {
            if(value.length > 8) {
                setIsPasswordLogin(true)
            } else {
                setIsPasswordLogin(false)
            }
        }
    }

    const handleUsernameChange = (value: string) => {
        if(isValidLogin && isPasswordLogin) {
            console.log(value)
            AuthStore.setUsername(value)
        }
    }

    const handlePasswordChange = (value: string) => {
        if(isValidLogin && isPasswordLogin) {
            console.log(value)
            AuthStore.setPassword(value)
        }
    }

    return (
        <div className={styles.authorization}>
            <div className={styles.authorization__header}>
                <span className={styles["authorization__header-title"]}>авторизация</span>
                <button className={styles["authorization__header-redirect"]} onClick={() => router.push('/registration')}>создать аккаунт</button>
            </div>

            <form className={styles.authorization__inputs}>
                <Input
                    name={'login'}
                    title={'имя пользователя'}
                    placeholder={'придумайте имя пользователя'}
                    onChange={handleUsernameChange}
                    onValidChange={handleChangeValidation}
                />

                <Input
                    name={'password'}
                    title={'пароль'}
                    placeholder={'придумайте пароль'}
                    onChange={handlePasswordChange}
                    onValidChange={handleChangeValidation}
                />

                <LoginButton title={'авторизоваться'} />
            </form>


        </div>
    );
};

export default AuthorizationForm;
