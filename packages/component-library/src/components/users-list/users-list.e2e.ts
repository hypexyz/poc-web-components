import { newE2EPage } from '@stencil/core/testing'

describe('users-list', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<users-list></users-list>')

        const element = await page.find('users-list')
        expect(element).toHaveClass('hydrated')
    })
})
