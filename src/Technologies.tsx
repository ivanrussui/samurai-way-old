import React from 'react';

type TechnologiesPropsType = {
    title: string
}

function Technologies(props: TechnologiesPropsType) {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>{props.title}</li>
            </ul>
        </div>
    );
}

export default Technologies;