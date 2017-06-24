import { Nespresso2Page } from './app.po';

describe('nespresso2 App', () => {
  let page: Nespresso2Page;

  beforeEach(() => {
    page = new Nespresso2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
