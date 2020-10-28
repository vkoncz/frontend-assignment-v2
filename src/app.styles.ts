import styled from 'styled-components';

export const Container = styled.div`
    @font-face {
        font-family: 'IBM Plex Serif';
        src: url('IBMPlexSerif-Regular.ttf') format('truetype');
    }

    font-family: 'IBM Plex Serif';
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.h1`
    font-size: 40px;
    font-weight: 700;
`;
