const { Component } = require("react");

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <>Something went wrong.</>;

    return this.props.children;
  }
}

export default ErrorBoundary;
