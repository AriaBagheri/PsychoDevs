import React from 'react';
import Link from "next/link";

function LinkComponent({text}: {text: string}) {
    return (
        <>
            <Link href={"/"}>
                {text}
            </Link>
        </>
    );
}

export default LinkComponent;