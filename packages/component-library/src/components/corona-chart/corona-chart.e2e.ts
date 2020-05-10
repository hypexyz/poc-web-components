import { newE2EPage } from '@stencil/core/testing';

describe('corona-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<corona-chart></corona-chart>');

    const element = await page.find('corona-chart');
    expect(element).toHaveClass('hydrated');
  });
});
