import { Given, When, Then } from "@wdio/cucumber-framework";


Given(/^Launch practice1 website$/, async () => {

    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    // await browser.maximizeWindow();
    await browser.fullscreenWindow()
    console.log(await browser.getTitle());
    await browser.pause(5000);

});

When(/^Scroll down and Hover over then click$/, async () => {

    (await $('#mousehover')).scrollIntoView()//Convert ID into CSS by adding # and scrollIntoView is a function
    await browser.pause(5000);

    await (await $('#mousehover')).moveTo() // Hover/move onto the element, then 2 options should display
    await browser.pause(5000);

    (await $('=Top')).click() //convert the linkText into CSS by adding = symbol
    await browser.pause(5000);

});



Given(/^Launch practice2 website$/, async () => {

    await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await browser.maximizeWindow();
    console.log(await browser.getTitle());
    await browser.pause(3000);


});

When(/^Perform some action$/, async () => {

    (await browser.$('tr th:nth-child(1)')).click(); //tr - table row and table header th 1st child
    await browser.pause(3000);
    const elesVeggies = await $$('tr td:nth-child(1)'); //tr - table row and table datat td //tr/td[1] is the xpath
    //Use Array map function to get the text and store it in a variable
    const veggiesNames = await elesVeggies.map(async veggie => await veggie.getText());
    await console.log(veggiesNames); //Do not remove the await key
    const sortedVeggies = veggiesNames.sort();//Javascript sort function to sort the element in alphabet order in an array
    await console.log(sortedVeggies);

});


When(/^Enter a text and validate result$/, async () => {

    (await $('#search-field')).setValue('Apple')//Enter text
    await browser.pause(3000)
    const searchResult = await $$('tr td:nth-child(1)');//Get all the relevant product
    expect(searchResult).toBeElementsArrayOfSize({ eq: 2 })//When only one element is returned
    console.log(await searchResult[0].getText());//get the element text

    expect(await searchResult[0].getText()).toHaveTextContaining('Aple') // Check this is correct
    // //Try with Apple once
});
