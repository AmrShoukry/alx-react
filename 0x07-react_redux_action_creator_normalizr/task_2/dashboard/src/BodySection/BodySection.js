import PropTypes from 'prop-types';

const BodySection = ({ title, children }) => {
  return (
    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

BodySection.defaultProps = {
  title: '',
  children: null,
};

export default BodySection;
