import React, {useState} from 'react';
import styles from './homepage.module.scss';
import Image from "next/image";
import {BsSearch} from "react-icons/bs";

function HomePage(props: any) {
    const [text, setText] = useState(props.defaultPrompt);
    return (
        <div className={styles.container}>
            <Image src={"/logo.png"} alt={"logo"} width={180} height={180}/>
            <h1>AI Website Assistant</h1>
            <form className={styles.inputContainer} onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                props.onSubmit(text);
            }}>
                <textarea type="text" placeholder={"Enter your question or code..."}
                          onChange={(e) => {
                              setText(e.target.value);
                          }}
                          aria-multiline={true}
                          defaultValue={text as string}/>
                <BsSearch onClick={() => {
                    props.onSubmit(text);
                }}/>
            </form>
        </div>
    );
}

export default HomePage;