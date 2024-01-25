module.exports = { helloFlow };


async function helloFlow(page, vuContext, events, test) {
	
	
  const { step } = test;



  const UserName = vuContext.vars.UserName;
  const Password = vuContext.vars.Password;



 
  await step("submit_login", async () => {
    await page.goto('https://scorekeeperdev.azurewebsites.net/Login',timeout = 0);
    await page.getByPlaceholder('Enter your Username').click();
    await page.getByPlaceholder('Enter your Username').fill(UserName);
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill(Password);
    
    await page.getByRole('button', { name: '󰍂 Log In' }).click();


    await page.screenshot();

  })

  await step("conditions", async () => {
    await page.getByRole('link', { name: ' Transcation Payouts 󰅂' }).click();
    await page.getByRole('link', { name: 'Conditions 󰅂' }).click();
    await page.getByRole('link', { name: 'All Conditions' }).click();
    await page.screenshot();
  })
  await step("payouts", async () => {
    await page.getByRole('link', { name: ' Transcation Payouts 󰅂' }).click();
    await page.getByRole('link', { name: 'Payouts 󰅂', exact: true }).click();
    await page.getByRole('link', { name: 'All Payouts' }).click();
    await page.screenshot();
    
  })
  await step("compplans", async () => {
    await page.getByRole('link', { name: ' Transcation Payouts 󰅂' }).click();
    await page.getByRole('link', { name: 'Comp Plans 󰅂' }).click();
    await page.getByRole('link', { name: 'All Compplans' }).click();
    await page.screenshot();
    
  })
  await step("manage transactions", async () => {
    await page.getByRole('link', { name: ' Manage Transactions 󰅂' }).click();
    await page.getByRole('link', { name: 'Transactions', exact: true }).click();
    await page.screenshot();
    
  })
  await step("bonus calculator", async () => {
    await page.getByRole('link', { name: ' Manage Transactions 󰅂' }).click();
    await page.getByRole('link', { name: 'Bonus Calculator' }).click();
    await page.screenshot();
    
  })

  await step("transaction vouchers", async () => {
    await page.getByRole('link', { name: ' Manage Transactions 󰅂' }).click();
    await page.getByRole('link', { name: 'Transaction Vouchers' }).click();
    await page.getByLabel('Date:', { exact: true }).selectOption('LastYear');
    await page.screenshot();
  })

  await step("bonus vouchers", async () => {
    await page.getByRole('link', { name: ' Manage Transactions 󰅂' }).click();
    await page.getByRole('link', { name: 'Bonus Vouchers' }).click();
    await page.getByLabel('Date:', { exact: true }).selectOption('LastYear');
    await page.screenshot();
  })

  await step("quick books", async () => {
    await page.getByRole('link', { name: ' Quick Books' }).click();
    await page.screenshot();
  })
  
	
}


