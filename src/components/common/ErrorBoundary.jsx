import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center p-5" style={{ minHeight: '50vh' }}>
          <i className="fa-solid fa-triangle-exclamation fa-3x mb-3" style={{ color: 'var(--color-primary)' }}></i>
          <h4 className="font-weight-bold mb-2">Something went wrong</h4>
          <p className="text-muted mb-4">The page failed to load. Please try again.</p>
          <Link
            to="/"
            className="btn px-4 py-2 text-white font-weight-bold rounded-pill"
            style={{ backgroundColor: 'var(--color-primary)', border: 'none' }}
            onClick={() => this.setState({ hasError: false })}
          >
            Go Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
