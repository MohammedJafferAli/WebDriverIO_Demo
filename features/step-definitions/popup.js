import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^Launch testing application$/, async () => {

    await browser.url('http://the-internet.herokuapp.com/javascript_alerts');
    await browser.maximizeWindow();
    console.log(await browser.getTitle());
    await browser.pause(5000);

});


When(/^Check JavaScript alert button$/, async () => {
    // Adding 5s wait before each action so we can visually see it

    //await $("// button[contains(text(),'Click for JS Alert')]").click()
    //const alerts = await $$("//div[@class='example']//ul/li")[0].$('button').click() // xpath returns 3 element -> I want to select 0th index , but my clickable element is button-> process called chaining

    (await browser.$('.example h3')).waitForExist()
    const alerts = $$("//div[@class='example']//ul/li");

    (await alerts[0]).$('button').click() // JS Alert
    await browser.pause(5000);
    await browser.acceptAlert();
    await browser.pause(5000);

    (await alerts[1]).$('button').click() //JS confirm
    await browser.pause(5000);
    await browser.dismissAlert();
    (await alerts[1]).$('button').click() //JS Prompt
    await browser.pause(5000);
    await browser.acceptAlert();

    


});

Then(/^Alert prompt confirmation should popup$/, async () => {

    const alerts = $$("//div[@class='example']//ul/li");
    (await alerts[2]).$('button').click() //JS Prompt
    
    await browser.pause(5000);
    console.log(await browser.getAlertText())
    await browser.sendAlertText('Jaffer');
    await browser.pause(5000);
    await browser.acceptAlert();

});
