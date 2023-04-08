import React from 'react';
import styles from './splitscreen.module.scss'

function SplitScreenOther({images}: {images: string[]}) {
    return (
        <div className={styles.imageContainer}>
            {
                images.map(i => (
                    <img src={i} alt={''}/>
                ))
            }
        </div>
    );
}

export default SplitScreenOther;