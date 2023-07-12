import React from "react";
import Error from "../../../Pages/Error";

/**
 * @class ErrorBoundary
 * @description Handles catching errors on the site, and not just showing a
 * white screen.
 *
 * @param {Object} props JSX props passed to this React component
 * @param {*} props.children Any React children to render inside this
 * component.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Send analytics that something went wrong!
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />;
    }

    return this.props.children;
  }
}
