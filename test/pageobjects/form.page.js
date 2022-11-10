const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SamplesPage extends Page {
  /**
   * define selectors using getter methods
   */
  get navigator() {
    return $('#IM_NAVIGATOR');
  }

  get navigatorUpdateButton() {
    return $('#IM_NAVIGATOR .IM_NAV_update_button');
  }

  get navigatorInfo() {
    return $('#IM_NAVIGATOR .IM_NAV_info');
  }

  get navigatorMoveButtons() {
    return $$('#IM_NAVIGATOR .IM_NAV_move_button');
  }

  get navigatorMoveButton() {
    return $('#IM_NAVIGATOR .IM_NAV_move_button');
  }

  get navigatorDeleteButton() {
    return $('#IM_NAVIGATOR .IM_NAV_delete_button');
  }

  get navigatorInfoInsertButton() {
    return $('#IM_NAVIGATOR .IM_NAV_insert_button');
  }

  get navigatorInfoCopy() {
    return $('#IM_NAVIGATOR .IM_NAV_copy_button');
  }

  get navigatorNotExist() {
    return $('#IM_NAVIGATOR .IM_NotExist');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get title() {
    return $('title');

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
