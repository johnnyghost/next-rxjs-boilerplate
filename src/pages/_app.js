import React from 'react';
import 'assets/index.css';

class App extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default App;