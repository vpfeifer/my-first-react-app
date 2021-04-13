import * as React from 'react';

interface ClickableTextProps {
    color?: string
    onClick: () => void
};

export const ClickableText: React.FunctionComponent<ClickableTextProps> = (props) => {
    const {color = "blue", children, onClick} = props

    return (
        <span style={{color: color}} onClick={onClick}>
            {children}
        </span>
    );
};