import * as React from 'react';
import './Subtitle.css'

interface SubtitleProps {}

export const Subtitle: React.FunctionComponent<SubtitleProps> = (props) => {
    return (
        <h2 className="Subtitle">
            {props.children}
        </h2>
    );
};