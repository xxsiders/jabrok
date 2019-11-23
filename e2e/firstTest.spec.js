describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have "input" section', async () => {
    const docInput = element(by.id('input'))
    await expect(docInput).toBeVisible()
    await docInput.typeText('hello world')
    await expect(docInput).toHaveText('hello world')
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

  it('should tab "Learn More" section', async () => {
    await element(by.id('world_button')).tap()
    await expect(element(by.text('World!!!'))).toBeVisible();
    await element(by.text('OK')).tap()
  });

  it('should have "scroll" section', async () => {
    await element(by.id('scroller')).swipe('up');
  });

});
