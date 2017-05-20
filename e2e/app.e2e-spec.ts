import { ProgressiveTaxesPage } from './app.po';

describe('progressive-taxes App', () => {
  let page: ProgressiveTaxesPage;

  beforeEach(() => {
    page = new ProgressiveTaxesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
