import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^Launch the globalsqa site$/, async () => {

    await browser.url('https://www.globalsqa.com/demo-site/');
    await browser.maximizeWindow();
    console.log(await browser.getTitle());


});

When(/^Select Dropdown button$/, async () => {

    let menus = await $$('.price_table_holder div ul li') // this should return 23 elements in the page

    for (var menu = 0; menu < menus.length; menu++) {
        var temp = await menus[menu].getText()
        console.log(temp) //print all 23 matching element's text
        if (temp ==='DropDown') {
            await menus[menu].click()
        }

    }
    await browser.pause(5000)

});

Then(/^Perform Dropdown actions$/, async () => {

    const dropDown = await $('.single_tab_div p select') //unique css select classname tag 'p' tag 'select' 
    await dropDown.selectByAttribute('value', 'ARG') // select the country based the value(Attribute) and its value
    await browser.pause(5000)

    await dropDown.selectByVisibleText('Yemen')
    await browser.pause(5000)

    await dropDown.selectByIndex(10)
    await browser.pause(5000)

});


Given(/^Launch the Internet App$/, async() => {

    await browser.url('http://the-internet.herokuapp.com/');
    await browser.maximizeWindow();
    console.log(await browser.getTitle());
    browser.pause(5000)
});

When(/^Select checkbox link$/, async() => {


    const checkboxes = $("//a[text()='Checkboxes']")
    checkboxes.click()

   
    // let Examples = await $$('.large-12 ul li') // this should return 44 elements in the page

    // for (var example = 1; example < Examples.length; example++) {
    //     var temp = await Examples[example].getText()
    //     console.log(temp) //print all 44 matching element's text
    //     if (temp ==='Checkboxes') {

    //         await Examples[example].$('a').click()

    //     }
    // }
    await browser.pause(5000)
});

Then(/^Perform checkbox actions$/,async () => {

    const Checkboxes = await $$(".form[id='checkboxes']") // Get all the matching checkboex

    Checkboxes[1].click()
   
    await browser.pause(3000)
    Checkboxes[2].click()
    await browser.pause(3000)


    browser.saveScreenshot("screenshot.png")//Take entire page SS
});


