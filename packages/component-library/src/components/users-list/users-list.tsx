import { Component, ComponentInterface, Host, h, State, Listen } from '@stencil/core'

@Component({
    tag: 'users-list',
    styleUrl: 'users-list.css',
    shadow: true
})
export class UsersList implements ComponentInterface {
    @State() queryText: string
    @State() users: any[]

    async fetchUsers(query: string) {
        const reqUrl = `https://api.github.com/search/users?q=${query}`
        const response = await fetch(reqUrl)

        if (response.status === 200) {
            const data = await response.json()

            const users = data.items.map(userData => ({
                username: userData.login,
                avatar: userData.avatar_url,
                name: userData.login,
                repoCount: userData.public_repos,
                gistsCount: userData.public_gists,
                followersCount: userData.followers
            }))

            this.users = users
        } else {
            this.users = []
        }
    }

    @Listen('search')
    onSearchHandler(event: CustomEvent) {
        const { detail: inputText } = event
        console.log('inputText', inputText)
        this.queryText = inputText

        this.fetchUsers(inputText)
    }

    render() {
        const { users } = this
        return (
            <Host>
                <search-bar></search-bar>
                {this.queryText && (
                    <div class="row">
                        {users.map(user => (
                            <div>
                                <github-card {...user}></github-card>
                                <br />
                            </div>
                        ))}
                    </div>
                )}
            </Host>
        )
    }
}
