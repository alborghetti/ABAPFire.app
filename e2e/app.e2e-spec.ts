import { ABAPFire.AppPage } from './app.po';

describe('abapfire.app App', () => {
  let page: ABAPFire.AppPage;

  beforeEach(() => {
    page = new ABAPFire.AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
