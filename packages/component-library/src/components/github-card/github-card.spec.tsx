import { newSpecPage } from '@stencil/core/testing'
import { GithubCard } from './github-card'

describe('github-card', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [GithubCard],
            html: `<github-card></github-card>`
        })
        expect(page.root).toEqualHtml(`
      <github-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </github-card>
    `)
    })
})
