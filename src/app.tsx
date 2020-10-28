import React, { useState } from 'react';
import * as s from './App.styles';
import { useGithubIssueComments } from './api/github-events.api';
import ErrorDetails from './components/ErrorDetails';
import RepoForm from './components/RepoForm';
import IssueTitle from './components/IssueTitle';
import Issue from './components/Issue';

function App() {
    const [user, setUser] = useState('');
    const [repo, setRepo] = useState('');

    const { data, isLoading, isError, error } = useGithubIssueComments(user, repo);

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

    const submit = (user: string, repo: string) => {
        setUser(user);
        setRepo(repo);
    };

    return (
        <s.Container>
            <s.Header>GitHub Issues and Comments</s.Header>
            <RepoForm submit={submit} />

            {data?.map(issue => (
                <div key={issue.id}>
                    <IssueTitle issue={issue} />
                    <Issue issue={issue} />
                </div>
            ))}
            {status()}
        </s.Container>
    );
}

export default App;
