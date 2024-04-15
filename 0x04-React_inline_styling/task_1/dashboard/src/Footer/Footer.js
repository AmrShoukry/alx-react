import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import { mainBorder } from '../global';

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
    <div className={css(styles.AppFooter)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};

export default Footer;
