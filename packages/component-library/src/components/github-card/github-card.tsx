import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'poc-github-card',
    styleUrl: 'github-card.css',
    shadow: true
})
export class GithubCard implements ComponentInterface {
    @Prop() username: string
    @Prop() avatar: string
    @Prop() name: string
    @Prop() repoCount: number
    @Prop() gistsCount: number
    @Prop() followersCount: number

    render() {
        if (!this.username) {
            return null
        }

        const { username, avatar, name, repoCount, gistsCount, followersCount } = this

        return (
            <Host>
                <div class="card">
                    <div class="header" />
                    <a class="avatar" href={`https://github.com/${username}`}>
                        <img src={avatar} alt={username} />
                    </a>
                    <div>
                        <h1>{name}</h1>
                        <slot />
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    href={`https://github.com/${username}?tab=repositories`}>
                                    <strong>{repoCount}</strong>Repos
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href={`https://gist.github.com/${username}`}>
                                    <strong>{gistsCount}</strong>Gists
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href={`https://github.com/${username}/followers`}>
                                    <strong>{followersCount}</strong>Followers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Host>
        )
    }
}
