import { NgRouterTransitionPage } from './app.po';

describe('ng-router-transition App', () => {
  let page: NgRouterTransitionPage;

  beforeEach(() => {
    page = new NgRouterTransitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
