import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { mainColor, mainBorder } from '../global';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '28px',
    color: mainColor,
    borderBottom: mainBorder,
  },
});

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;
