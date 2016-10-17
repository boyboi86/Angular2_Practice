import { Practice2Page } from './app.po';

describe('practice2 App', function() {
  let page: Practice2Page;

  beforeEach(() => {
    page = new Practice2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
