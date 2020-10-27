import React, { ElementType } from 'react';

export const renderers: { [nodeType: string]: ElementType } = {
    heading: props => {
        console.log('heading props', props);
        return <h1>{props.node.children[0].value}</h1>;
    },
};
