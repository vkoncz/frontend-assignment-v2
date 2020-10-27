import React, { FormEvent, useState } from 'react';
import * as s from './app.styles';
import { useGithubIssueComments } from './api/github-events.api';
import ErrorDetails from './components/error-details';

function App() {
    const [user, setUser] = useState('');
    const [repo, setRepo] = useState('');

    const { data, isLoading, isError, error, refetch } = useGithubIssueComments(user, repo);

    const result = () => {
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
        <s.container>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="user"
                    onChange={event => setUser(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="repo"
                    onChange={event => setRepo(event.target.value)}
                />

                <input type="submit" value="Go fetch" />
            </form>

            <s.header>Recent comments on {repo} issues:</s.header>
            {data?.map(issue => (
                <div key={issue.id}>
                    <s.issuer_title>{issue.title}</s.issuer_title>
                    <pre>{issue.body}</pre>
                    {issue.comments.map(comment => (
                        <s.comment_body key={comment.id}>
                            <div>
                                {comment.created_at} {comment.user.login}:
                            </div>
                            <pre>{comment.body}</pre>
                        </s.comment_body>
                    ))}
                </div>
            ))}
            {result()}
        </s.container>
    );
}

export default App;
