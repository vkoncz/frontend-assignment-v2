import moment from 'moment';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { GithubIssue } from '../api/github-events.model';
import * as s from './IssueTitle.style';

interface Props {
    issue: GithubIssue;
}

const IssueTitle: React.FC<Props> = ({ issue }) => {
    return (
        <>
            <s.Title>{issue.title}</s.Title>
            <s.Subtitle>
                By <s.User>{issue.user.login}</s.User> •{' '}
                <span data-tip={moment(issue.created_at).format('lll')}>
                    {moment(issue.created_at).fromNow()}
                </span>
                <ReactTooltip place="top" type="dark" effect="solid" />
            </s.Subtitle>
        </>
    );
};

export default IssueTitle;
