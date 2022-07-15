import React, {FormEvent, useState} from 'react';
import styles from './RegistrationForm.module.css'
import Input from "../ui-components/Input/Input";
import LoginButton from "../ui-components/LoginButton/LoginButton";
import {useRouter} from "next/router";
import clsx from "clsx";
import ThemeContext from "../../contexts/ThemeProvider";
import {inject} from "mobx-react";
import AuthStore from "../../store/AuthStore";
import {RegExp, ROUTES} from "../../utils/constants/constants";

const RegistrationForm = () => {
    const router = useRouter();

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(isValidLogin, isPasswordLogin)
        if(isValidLogin && isPasswordLogin) {
            AuthStore.register()

            router.push(ROUTES.HOME)
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

    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.authorization}>
            <div className={styles.authorization__header}>
                <span className={styles["authorization__header-title"]}>регистрация</span>
                <button className={clsx(styles["authorization__header-redirect"], contextValue.isDarkTheme && styles.dark)}
                        onClick={() => router.push('/authorization')}
                >
                    войти в аккаунт
                </button>
            </div>

            <form className={styles.authorization__inputs} onSubmit={handleSubmit}>
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

                <LoginButton title={'авторизоваться'}/>
            </form>
        </div>
    }</ThemeContext.Consumer>
};

export default RegistrationForm;
