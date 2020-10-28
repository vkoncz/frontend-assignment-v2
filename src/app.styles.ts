import ReactMarkdown from 'react-markdown';
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

export const Title = styled.p`
    font-size: 24px;
    color: #008080;
    font-weight: 700;
    margin-bottom: 0px;
`;

export const Subtitle = styled.div`
    margin-top: 0px;
    color: #60739f;
    font-size: 16px;
    cursor: default;
`;

export const User = styled.span`
    font-weight: 700;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    border-color: #a1a1a1;
    border-style: solid;
    width: 379px;
    height: 48px;
    border-radius: 8px;
    box-shadow: 0px 8px 16px -8px #a6a6a6;

    font-size: 16px;
    color: #0a235c;

    :focus {
        border-color: #23b5b5;
    }
`;

export const Slash = styled.span`
    font-size: 24px;
`;

export const SubmitButton = styled.input`
    background-color: teal;
    border-radius: 8px;
    height: 48px;
    width: 140px;
    box-shadow: 0px 8px 16px -8px teal;
    border-color: teal;
    border-style: solid;
    color: #ffffff;
    cursor: pointer;
`;

export const CommentContainer = styled.div`
    background-color: rgba(10, 35, 92, 0.05);
    border-radius: 8px;
`;

export const CommentHeader = styled.p`
    color: #0a235c;
    font-size: 16px;
    font-weight: 700;
    padding: 22px 24px 6px 24px;
`;

export const CommentBody = styled(ReactMarkdown)`
    color: #0a235c;
    font-size: 16px;
    padding: 0px 24px 20px 24px;
`;

export const CommentNumber = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #008080;
`;
