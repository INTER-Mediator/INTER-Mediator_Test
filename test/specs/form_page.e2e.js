const FormPage = require('../pageobjects/form.page');

describe('Form Page', () => {
  it('can open with the valid title', async () => {
    await FormPage.open();
    await expect(browser).toHaveTitle('INTER-Mediator - Sample - Form Style/MySQL')
  });
  it('has the INTER-Mediator\'s navigation', async () => {
    await expect(FormPage.navigator).toExist()
    await expect(FormPage.navigatorUpdateButton).toExist()
    await expect(FormPage.navigatorInfo).toExist()
    await expect(FormPage.navigatorMoveButtons).toBeElementsArrayOfSize(4)
    await expect(FormPage.navigatorMoveButton).toExist()
    await expect(FormPage.navigatorDeleteButton).toExist()
    await expect(FormPage.navigatorInfoInsertButton).toExist()
    await expect(FormPage.navigatorInfoCopy).toExist()
    //await expect(FormPage.navigatorNotExist).toBeFalsy()
  });
});


