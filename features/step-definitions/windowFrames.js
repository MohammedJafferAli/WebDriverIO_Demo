import { Given, When, Then } from "@wdio/cucumber-framework";


Given(/^Launch Login Practise page$/, async () => {

    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    await browser.maximizeWindow()
    console.log(await browser.getTitle())

});

When(/^Click on a link to open new tab$/, async () => {


    (await $('.blinkingText')).click()
    console.log(await browser.getTitle())
    const handles = await browser.getWindowHandles()// Get all the open window handles
    await browser.switchToWindow(handles[1])
    console.log(await browser.getTitle())

    await browser.closeWindow()//This should close the child window

    await browser.switchToWindow(handles[0]) //switch back to parent window
    console.log(await browser.getTitle())


});

Then(/^Get the text and Get back to Parent window$/, async () => {
});
