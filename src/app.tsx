import React, { FormEvent, useState } from 'react';
import * as s from './app.styles';
import { useGithubIssueComments } from './api/github-events.api';
import ErrorDetails from './components/error-details';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import Collapsible from './components/Collapsible';

function App() {
    const [user, setUser] = useState('facebook');
    const [repo, setRepo] = useState('react');

    const { data, isLoading, isError, error, refetch } = useGithubIssueComments(user, repo);

    const status = () => {
        if (isLoading) {
            return <div>Loading ...</div>;
        }

        if (isError && error?.response?.status !== 404) {
            return <ErrorDetails error={error} />;
        }

        if (isError) {
            return <p>Repository cannot be found</p>;
        }
    };

    const submit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        await refetch();
    };

    return (
        <s.Container>
            <s.Header>GitHub Issues and Comments</s.Header>
            <s.Form onSubmit={submit}>
                <s.Input
                    type="text"
                    placeholder="user"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                />
                <s.Slash>/</s.Slash>
                <s.Input
                    type="text"
                    placeholder="repo"
                    value={repo}
                    onChange={event => setRepo(event.target.value)}
                />
                <s.SubmitButton type="submit" value="Go fetch" />
            </s.Form>

            {data?.map(issue => (
                <div key={issue.id}>
                    <s.Title>{issue.title}</s.Title>
                    <s.Subtitle>
                        By <s.User>{issue.user.login}</s.User> •{' '}
                        <span data-tip={moment(issue.created_at).format('lll')}>
                            {moment(issue.created_at).fromNow()}
                        </span>
                        <ReactTooltip place="top" type="dark" effect="solid" />
                    </s.Subtitle>

                    <Collapsible key={issue.id} commentNumber={issue.comments.length}>
                        <ReactMarkdown>{issue.body}</ReactMarkdown>
                        <s.CommentNumber>{issue.comments.length} comments</s.CommentNumber>
                        {issue.comments.map(comment => (
                            <s.CommentContainer key={comment.id}>
                                <s.CommentHeader>
                                    By {comment.user.login} • {moment(comment.created_at).fromNow()}
                                </s.CommentHeader>

                                <s.CommentBody>{comment.body}</s.CommentBody>
                            </s.CommentContainer>
                        ))}
                    </Collapsible>
                </div>
            ))}
            {status()}
        </s.Container>
    );
}

export default App;
