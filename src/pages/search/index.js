import React from 'react';
import Layout from 'components/Layout';

const propTypes = {};
const defaultProps = {};

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Layout>Search</Layout>;
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
