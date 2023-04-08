import React from 'react';
import styles from './homepage.module.scss';
import Image from "next/image";
import {BsMic, BsSearch} from "react-icons/bs";

function HomePage(props) {
    return (
        <div className={styles.container}>
            <Image className={styles.logo} src={"/logo.png"} alt={"logo"} width={180} height={180}/>
            <h1>AI Website Assistant</h1>
            <div className={styles.inputContainer}>
                <BsSearch/>
                <input type="text" placeholder={"Enter your question or code..."}/>
                <BsMic/>
            </div>
        </div>
    );
}

export default HomePage;