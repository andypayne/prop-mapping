import React, { Component } from 'react';

export const withPropMap = (WrappedComponent, mappingFn) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...mappingFn(this.props)} />;
    }
  }
}

