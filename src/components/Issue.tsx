import moment from 'moment';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GithubIssue } from '../api/github-events.model';
import { renderers } from '../markdown/renderer';
import Collapsible from './Collapsible';
import * as s from './Issue.style';

interface Props {
    issue: GithubIssue;
}

const Issue: React.FC<Props> = ({ issue }) => {
    return (
        <Collapsible key={issue.id} commentNumber={issue.comments.length}>
            <ReactMarkdown renderers={renderers}>{issue.body}</ReactMarkdown>
            <s.CommentNumber>{issue.comments.length} comments</s.CommentNumber>
            {issue.comments.map(comment => (
                <s.CommentContainer key={comment.id}>
                    <s.CommentHeader>
                        By {comment.user.login} • {moment(comment.created_at).fromNow()}
                    </s.CommentHeader>

                    <s.CommentBody renderers={renderers}>{comment.body}</s.CommentBody>
                </s.CommentContainer>
            ))}
        </Collapsible>
    );
};

export default Issue;
