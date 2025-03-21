export class LoginPage {
    constructor(private page) {}

    async goto() {
        await this.page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/');
    }

    async login(username: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Username or email' }).click(); 
        await this.page.getByRole('textbox', { name: 'Username or email' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign In' }).click(); 
    }

    async logout() {
        await this.page.click('#logout-button'); // Replace with the actual logout button selector
    }
}



