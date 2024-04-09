const WithLogging = ({ WrappedComponent }) => {
  class withLogging extends React.Component {
    constructor(props) {
      super(props);
    }

    getComponentName() {
      return (
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      );
    }

    componentDidMount() {
      console.log(`Component ${getComponentName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getComponentName()} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  withLogging.displayName = `WithLogging(${getComponentName()})`;

  return withLogging;
};

export default WithLogging;
