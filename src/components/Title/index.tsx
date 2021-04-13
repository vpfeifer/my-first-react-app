import * as React from 'react';
import './Title.css'

interface TitleProps {
    content: string;
}

export const Title = (props: TitleProps) => {
    return (
        <h1 className="Title">
            {props.content}
        </h1>
    );
};