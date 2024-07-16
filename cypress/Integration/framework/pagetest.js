import Login_po from "../../support/PageObjects/orangehrm/login";
import Logout_po from "../../support/PageObjects/orangehrm/logout_po";
import Link_po from "../../support/PageObjects/orangehrm/link_po";
describe('', () => {
    const login_po = new Login_po()
    const logout_po = new Logout_po()
    const link_po = new Link_po();
    it('test1', () => {
        //login
        login_po.EnterURL()
        login_po.Login();
        ////logout_po.EnterURL()
        //link_po.En

        link_po.linkclick('Admin');
        logout_po.logout();
        
    });
});