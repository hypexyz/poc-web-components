import { newSpecPage } from '@stencil/core/testing';
import { CoronaChart } from './corona-chart';

describe('corona-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoronaChart],
      html: `<corona-chart></corona-chart>`,
    });
    expect(page.root).toEqualHtml(`
      <corona-chart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </corona-chart>
    `);
  });
});
