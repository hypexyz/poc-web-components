import { newSpecPage } from '@stencil/core/testing';
import { UsersList } from './users-list';

describe('users-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UsersList],
      html: `<users-list></users-list>`,
    });
    expect(page.root).toEqualHtml(`
      <users-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </users-list>
    `);
  });
});
