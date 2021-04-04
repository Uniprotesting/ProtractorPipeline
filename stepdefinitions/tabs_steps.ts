import { Given, setDefaultTimeout } from "cucumber";
import { browser } from "protractor";
import { Browser } from "../pages/tabPage";

setDefaultTimeout(60 * 1000);


Given('I want to open google in onetab', async function () {
  await browser.sleep(5000)
  await Browser.prototype.createNewBrowserTab();
  await browser.sleep(5000)
  await Browser.prototype.switchToTabNumber(1);
  await browser.sleep(5000)
  await browser.get("https://www.google.co.in/")
});



Given('I want to open google in twotab', async function () {
  await Browser.prototype.createNewBrowserTab();
  await browser.sleep(5000)
  await Browser.prototype.switchToTabNumber(2);
  await browser.get("https://www.google.co.in/")
});