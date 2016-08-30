import { Day2DemonstrationPage } from './app.po';

describe('day2-demonstration App', function() {
  let page: Day2DemonstrationPage;

  beforeEach(() => {
    page = new Day2DemonstrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
