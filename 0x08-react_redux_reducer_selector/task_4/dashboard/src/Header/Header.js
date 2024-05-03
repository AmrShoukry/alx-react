import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, mainBorder } from '../global';
import { MyContext } from '../App/AppContext';
import { Component } from 'react';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '28px',
    color: mainColor,
    borderBottom: mainBorder,
  },
});

class Header extends Component {
  render() {
    return (
      <>
        <div className={css(styles.AppHeader)}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        {this.context.user.isLoggedIn && (
          <section id="logoutSection">
            <p>
              Welcome {this.context.user.email}
              <button href="#" onClick={(e) => this.context.logOut()}>
                Logout
              </button>
            </p>
          </section>
        )}
      </>
    );
  }
}

Header.contextType = MyContext;

export default Header;
