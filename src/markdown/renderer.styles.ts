import styled from 'styled-components';

const fontSizeMap: { [header: number]: number } = {
    1: 24,
    2: 20,
    3: 16,
    4: 14,
    5: 12,
    6: 12,
};

export const Header = styled.h1<{ level: number }>`
    color: #0a235c;
    font-weight: 700;
    font-size: ${p => fontSizeMap[p.level]}px;
`;

export const Bold = styled.span`
    font-weight: 700;
`;
