import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^Launch the Application$/, async () => {
    /* 
    Launch the application, maximize it and getTitle to ensure on the Home page then click sign-in
    */

    await browser.url('https://magento.softwaretestingboard.com/?ref=hackernoon.com');
    await browser.maximizeWindow();
    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining('Home Page');
    (await $("//div[@class='panel header']//a[contains(text(),'Sign In')]")).click();//Xpath - parent to child traversal

});

When(/^I Enter userName and passWord$/, async () => {

     /* 
    Enter the credentials into the respective fields and click sign-in
    Give proper await commands to the script to run it in sequence
    */

    console.log(await browser.getTitle());
    (await $('#email')).setValue('DemoTester@test.com');
    await browser.pause(5000);

    const txtPassword = $('#pass')
    await txtPassword.setValue('Demo@123')
    await browser.pause(5000);


    (await $('.login.primary')).click();
    await browser.pause(5000);

});

Then(/^I should land on Home Page$/, async () => {

    //The Browser will wait until the the page title become Home page and max wait it 10s if not it will return the time out message
    await browser.waitUntil(async function () {
        return (await browser.getTitle()) === 'Home Page'
    }, {
        timeout: 10000,
        timeoutMsg: 'Not Redirected to the customer home page after sign-in'
    })
    console.log(await browser.getTitle());
    const profile = $("//span[contains(text(),'Welcome, ')]")
    console.log(await profile.getText())
    await expect(profile).toHaveTextContaining('Welcome,');

    //await profile.waitForExist()


});
