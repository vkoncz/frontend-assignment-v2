/**
 * Props for renderer definitions, derived from heading, may inaccurate
 */
export interface RendererProps {
    node: Node;
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface Node {
    type: string;
    depth: number;
    children: Child[];
    position: Position;
}

export interface Child {
    type: string;
    value: string;
    position: Position;
}

export interface Position {
    start: End;
    end: End;
}

export interface End {
    line: number;
    column: number;
    offset: number;
}
