import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import clsx from "clsx";

import ThemeContext from "../../../contexts/ThemeProvider";
import {RegExp} from "../../../utils/constants/constants";

import InputProps from "./Input.props";

import styles from './Input.module.css'

const Input: FC<InputProps> = ({name, title, placeholder, onChange, onValidChange}) => {
    const [value, setValue] = useState<string>('')
    const [isValidValue, setIsValidValue] = useState<boolean | undefined>(true)
    const [isBlur, setIsBlur] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value)
        handleValidation(name)

        if (isValidValue) {
            onChange(value)
            handleValidation(name)
        }
    }

    const handleBlur = () => {
        setIsBlur(true)
    }

    const handleValidation = (name: string | undefined) => {
        if(name === 'password') {
            if(value.length > 8) {
                onValidChange(name, value)
            }
        } else if (name === 'login') {
            if(RegExp.username.test(name)) {
                onValidChange(name, value)
            }
        }
    }

    const validate = (name: string | undefined, value: string) => {
        let validLogin = false
        let validPassword = false

        if (name === 'login') {
            if (RegExp.username.test(value)) {
                validLogin = true
                setIsValidValue(validPassword && validLogin)
                handleValidation(name)

                return false
            } else {
                validLogin = false
                setIsValidValue(validPassword && validLogin)
                handleValidation(name)

                return true
            }
        } else if (name === 'password') {
            if (value.length > 8) {
                validPassword = true
                setIsValidValue(validPassword && validLogin)
                handleValidation(name)

                return false
            } else {
                validPassword = false
                setIsValidValue(validPassword && validLogin)
                handleValidation(name)

                return true
            }
        }
    }

    useEffect(() => {
        if (isBlur) {
            if (!value) {
                setIsValidValue(false);
                setError('обязательное поле');
            } else if (validate(name, value)) {
                setIsValidValue(false);
                if (name === 'login') {
                    setError('в логине должны быть только буквы латинского алфавита');
                } else if (name === 'password') {
                    setError('пароль должен минимально состоять из 8 цифр');
                }
            } else {
                setIsValidValue(true);
                setError('');
            }
        }
    }, [value, isBlur])

    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.input__block}>
            <span className={styles.title}>{title}</span>

            <input
                name={name}
                value={value}
                type={name === 'password' ? 'password' : 'text'}
                className={clsx(styles.input, contextValue.isDarkTheme && styles.dark)}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {error
                ? <span className={styles.error}>{error}</span>
                : <></>
            }
        </div>
    }</ThemeContext.Consumer>
};

export default Input;
