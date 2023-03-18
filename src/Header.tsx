import React from 'react';

type HeaderPropsType = {
    title: string
}

function Header(props: HeaderPropsType) {
    return (
        <div>
            <a href='#'>{props.title}</a>
            <a href='#'>News Feed</a>
            <a href='#'>Messages</a>
        </div>
    );
}

export default Header;