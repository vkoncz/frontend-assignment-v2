import { GithubComment, GithubEvent, GithubIssue } from './github-events.model';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export function useGithubIssueComments(user: string, repo: string) {
    const url = `/networks/${user}/${repo}/events?per_page=100`;

    return useQuery<GithubIssue[], AxiosError>(
        url,
        () => axios.get(url).then(res => mapResult(res.data)),
        {
            enabled: user && repo,
        },
    );
}

export function mapResult(data: GithubEvent[]): GithubIssue[] {
    return data
        .filter(event => event.type === 'IssueCommentEvent')
        .reduce<GithubIssue[]>((previous, current) => {
            const key = current.payload.issue.id;
            const element = previous.find(prev => prev && prev.id === key);
            const comment: GithubComment = {
                id: current.payload.comment.id,
                created_at: current.payload.comment.created_at,
                body: current.payload.comment.body,
                user: {
                    id: current.payload.comment.user.id,
                    login: current.payload.comment.user.login,
                },
            };

            if (element) {
                element.comments.push(comment);
            } else {
                previous.push({
                    id: current.payload.issue.id,
                    created_at: current.payload.issue.created_at,
                    title: current.payload.issue.title,
                    body: current.payload.issue.body,
                    user: {
                        id: current.payload.issue.user.id,
                        login: current.payload.issue.user.login,
                    },
                    comments: [comment],
                });
            }

            return previous;
        }, []);
}
