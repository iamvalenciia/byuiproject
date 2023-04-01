import { getUserInfo } from "../localStorage";

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
  <div class="brand">
    <a href="/#/">store</a>
  </div>
  <div class="search">      
  </div>
  <div>
    <a href="/">Home</a>  
    <a href="/#/cart">Cart</a>
    ${isAdmin ? `<a href="/#/dashboard">Admin</a>` : ""}
    ${name ? `<a href="/#/profile">Profile</a>`:`<a href="/#/signin">Sign-In</a>`}  
  </div>`;
  },
  after_render: () => {
    document.getElementById("search-form");
  },
};
export default Header;
