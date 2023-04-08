import React from 'react';
import {inspect} from "util";
import styles from './splitscreen.module.scss'
import CodeShowSection from "@/(components)/pages/output/(components)/CodeShowSection";
import CodeOutputSection from "@/(components)/pages/output/(components)/CodeOutputSection";

function SplitScreen({code}) {
    return (
        <div className={styles.container}>
            <CodeShowSection code={code}/>
            <CodeOutputSection code={code}/>
        </div>
    );
}

export default SplitScreen;