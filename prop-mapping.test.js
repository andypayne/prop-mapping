import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { withPropMap } from './prop-mapping';

class AComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.aProp}
      </div>
    );
  }
}

AComponent = withPropMap(AComponent, (props) => {
  return {
    ...props,
    aProp: props.bProp,
  };
});


test('maps props', () => {
  const el = document.createElement('div');
  const { getByText } = render(<AComponent bProp='This is a prop'></AComponent>, el);
  const aPropEl = getByText(/This is a prop/);
  expect(aPropEl).toBeInTheDocument();
});
