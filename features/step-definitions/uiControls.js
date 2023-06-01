import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^Launch the application$/, async() => {

    await browser.url('https://www.makemytrip.com/flights/');
    await browser.maximizeWindow();
    console.log(await browser.getTitle());
});

When(/^Check Radio button and Popup$/, async() => {
    
const rbnTrips = await $$('.tabsCircle.appendRight5')// This will return 3 elements and will store it in Trips const
const rbnOneWay = rbnTrips[0]
console.log(rbnOneWay.isSelected())// If its preselected then it should return true

const rbnRoundtrip = rbnTrips[1]
await rbnRoundtrip.click()
await browser.pause(5000);


});

Then(/^It should do the respective action$/,async () => {
     return true;

});
