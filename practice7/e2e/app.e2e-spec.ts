import { Practice7Page } from './app.po';

describe('practice7 App', function() {
  let page: Practice7Page;

  beforeEach(() => {
    page = new Practice7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
