import { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Route chunk failed to load:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="min-h-screen flex items-center justify-center bg-white px-6 py-12"
        >
          <div className="w-full max-w-xl rounded-[32px] border border-[#E9E5FF] bg-[#F9F7FF] p-10 text-center shadow-[0_24px_80px_rgba(111,0,255,0.08)]">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#6F00FF]">
              Loading error
            </p>
            <h1 className="mb-4 text-4xl font-bold text-[#111111]">
              Something went wrong.
            </h1>
            <p className="mb-8 text-base leading-7 text-[#555555]">
              The content could not load. Please refresh the page or return
              home.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center rounded-full bg-[#6F00FF] px-8 py-3 font-semibold text-white transition hover:bg-[#5a00e0]"
              >
                Refresh
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-[#6F00FF] bg-white px-8 py-3 font-semibold text-[#6F00FF] transition hover:bg-[#faf6ff]"
              >
                Go Home
              </Link>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
