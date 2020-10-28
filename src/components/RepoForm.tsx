import React, { FormEvent, useState } from 'react';
import * as s from './RepoForm.style';

interface Props {
    submit: (user: string, repo: string) => void;
}

const RepoForm: React.FC<Props> = ({ submit }) => {
    const [user, setUser] = useState('');
    const [repo, setRepo] = useState('');

    const onSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        submit(user, repo);
    };

    return (
        <s.Form onSubmit={onSubmit}>
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
    );
};

export default RepoForm;
