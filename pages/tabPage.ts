import {browser} from 'protractor';

export class Browser {
  public async openPageInNewTab(url: string) {
    await this.createNewBrowserTab();
    await this.switchToTabNumber(1);
    await browser.get(url);
  }

  public async createNewBrowserTab() {
    await browser.executeScript('window.open()');
  }

  public async switchToTabNumber(number: number) {
    return browser.getAllWindowHandles().then(function (handles) {
      const newWindowHandle = handles[number];
      browser.switchTo().window(newWindowHandle);
    });
  }

}