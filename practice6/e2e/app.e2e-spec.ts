import { Practice6Page } from './app.po';

describe('practice6 App', function() {
  let page: Practice6Page;

  beforeEach(() => {
    page = new Practice6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
