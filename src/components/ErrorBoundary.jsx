import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#070709] text-white p-8 flex flex-col items-center justify-center font-mono">
          <div className="max-w-xl w-full bg-[#15151c] border border-rose-500/50 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-bold text-rose-400 mb-2">Something went wrong during rendering:</h2>
            <div className="bg-black/80 p-4 rounded-xl text-rose-300 text-xs overflow-x-auto whitespace-pre-wrap mb-4">
              {this.state.error?.toString()}
            </div>
            {this.state.errorInfo?.componentStack && (
              <details className="text-[11px] text-zinc-400">
                <summary className="cursor-pointer text-champagne mb-2">Component Stack</summary>
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="mt-6 px-4 py-2 bg-[#e5c07b] text-black font-bold rounded-xl text-xs uppercase"
            >
              Clear Storage &amp; Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
