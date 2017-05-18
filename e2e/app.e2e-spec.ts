import { Site1Page } from './app.po';

describe('site1 App', () => {
  let page: Site1Page;

  beforeEach(() => {
    page = new Site1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
