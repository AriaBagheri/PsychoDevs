import React from 'react';
import {inspect} from "util";
import styles from './splitscreen.module.scss'
import CodeShowSection from "@/(components)/pages/output/(components)/CodeShowSection";
import CodeOutputSection from "@/(components)/pages/output/(components)/CodeOutputSection";

function SplitScreen(props) {
    return (
        <div className={styles.container}>
            <CodeShowSection/>
            <CodeOutputSection/>
        </div>
    );
}

export default SplitScreen;