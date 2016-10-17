import { Practice3Page } from './app.po';

describe('practice3 App', function() {
  let page: Practice3Page;

  beforeEach(() => {
    page = new Practice3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
