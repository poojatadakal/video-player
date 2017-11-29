import { AppvedioanPage } from './app.po';

describe('appvedioan App', () => {
  let page: AppvedioanPage;

  beforeEach(() => {
    page = new AppvedioanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
