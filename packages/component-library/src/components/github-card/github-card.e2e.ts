import { newE2EPage } from '@stencil/core/testing'

describe('github-card', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<github-card></github-card>')

        const element = await page.find('github-card')
        expect(element).toHaveClass('hydrated')
    })
})
