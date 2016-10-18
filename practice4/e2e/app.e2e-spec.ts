import { Practice4Page } from './app.po';

describe('practice4 App', function() {
  let page: Practice4Page;

  beforeEach(() => {
    page = new Practice4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
