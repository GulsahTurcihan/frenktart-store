import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Bir hata yakalandığında, bir sonraki render'da yedek UI göstermek için state'i güncelleyin.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata bilgilerini bir hata kayıt servisine loglayabilirsiniz.
    // Örneğin: logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Özelleştirebileceğiniz yedek bir UI döndürebilirsiniz.
      return <h1>Something went wrong...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
