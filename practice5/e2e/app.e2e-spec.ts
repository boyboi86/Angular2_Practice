import { Practice5Page } from './app.po';

describe('practice5 App', function() {
  let page: Practice5Page;

  beforeEach(() => {
    page = new Practice5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
