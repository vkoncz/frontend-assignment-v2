import React, { ElementType } from 'react';
import * as s from './renderer.styles';
import { RendererProps } from './renderer.model';

export const renderers: { [nodeType: string]: ElementType<RendererProps> } = {
    heading: props => {
        const hTag = (`h${props.level}` as unknown) as React.ComponentType;
        return (
            <s.Header as={hTag} level={props.level}>
                {props.node.children[0].value}
            </s.Header>
        );
    },
    strong: props => <s.Bold>{props.node.children[0].value}</s.Bold>,
};

/**
 * Lists are handled correctly with the default renderer
 * https://github.com/remarkjs/react-markdown/blob/6e38dd343ef653b6c5246625ac3476ffd94d0ebc/src/renderers.js#L73
 */
