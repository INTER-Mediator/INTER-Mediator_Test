const IMPage = require('./impage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SamplesPage extends IMPage {
  /**
   * define selectors using getter methods
   */
  get fieldPersonId() {
    return $('._im_test-person-id');
  }
  get fieldPersonCategory() {
    return $('._im_test-person-category');
  }
  get fieldPersonCheck() {
    return $('._im_test-person-checking');
  }
  get fieldPersonName() {
    return $('._im_test-person-name');
  }
  get fieldPersonMail() {
    return $('._im_test-person-mail');
  }
  get fieldPersonLocations() {
    return $$('._im_test-person-location');
  }
  get fieldPersonMemo() {
    return $('._im_test-person-memo');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }


  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('samples/Sample_form/form_MySQL.html');
  }

}

module.exports = new SamplesPage();
