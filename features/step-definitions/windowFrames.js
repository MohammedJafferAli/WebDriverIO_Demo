import { Given, When, Then } from "@wdio/cucumber-framework";


Given(/^Launch Login Practise page$/, async () => {

    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    await browser.maximizeWindow()
    console.log(await browser.getTitle())

});

When(/^Click on a link to open new tab$/, async () => {


    (await $('.blinkingText')).click() //Application opens a new window
    console.log(await browser.getTitle())
    const handles = await browser.getWindowHandles()// Get all the open window handles
    await browser.switchToWindow(handles[1]) //switch back to child window
    console.log(await browser.getTitle())

    await browser.closeWindow()//This should close the child window

    await browser.switchToWindow(handles[0]) //switch back to parent window
    console.log(await browser.getTitle())

    //Requirement to open a new window or browser to check something else

    await browser.newWindow('https://www.google.com/') //script will open the URL and the control will focus to this window
    console.log(await browser.getTitle())
    await browser.closeWindow()

    await browser.switchWindow('https://rahulshettyacademy.com/loginpagePractise/'); // script will get back to the mentioned URL

});

Then(/^Get the text and Get back to Parent window$/, async () => {

    await browser.newWindow('https://rahulshettyacademy.com/AutomationPractice/');
    console.log(await $$('a').length);
    
    (await $('.mouse-hover')).scrollIntoView()
    await browser.pause(5000);

    await (await $('.mouse-hover')).moveTo()
    await browser.pause(5000);

   await browser.switchToFrame(await $("[id='courses-iframe']"));   
   //Check how many links are present inside the frame

   console.log(await $$('a').length);//print the count of a tag
   console.log((await $('=Courses')).getTagName());
   await browser.pause(5000);

   await browser.switchToFrame(null) // come out of the frame and by default it will be on the parent frame

});
