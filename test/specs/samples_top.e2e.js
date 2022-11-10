const SamplesPage = require('../pageobjects/samples.page');

describe('INTER-Mediator Samples Page', () => {
  it('can open with the valid title', async () => {
    await SamplesPage.open();
    await expect(browser).toHaveTitle('INTER-Mediator - Samples')
  });
});


