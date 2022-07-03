import React from 'react';

import Link from "next/link";

import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Link href={'profile'}>
                <button className={styles['user-logo']}/>
            </Link>

            <Link href={'profile'}>
                <button className={styles.logout}/>
            </Link>
        </div>
    );
};

export default Profile;
