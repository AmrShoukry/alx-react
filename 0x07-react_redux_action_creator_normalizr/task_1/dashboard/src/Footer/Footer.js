import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import { mainBorder } from '../global';
import { MyContext } from '../App/AppContext.js';

const styles = StyleSheet.create({
  AppFooter: {
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '20px',
    fontStyle: 'italic',
    marginTop: '440px',
    borderTop: mainBorder,
  },
});

const Footer = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
        <div className={css(styles.AppFooter)}>
          <p>
            Copyright {getFullYear()} - {getFooterCopy()}
          </p>
          {value.user.isLoggedIn && (
            <p>
              <a href="#">Contact Us</a>
            </p>
          )}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Footer;
