# prop-mapping

A super simple prop mapper for React


## Usage

```javascript
import React from 'react';
import { withPropMap } from './prop-mapping';

class MyComp extends React.Component {
  // ...
  render() {
    return (
      <div>
        {this.props.foo}: {this.props.bar}
      </div>
    );
  }
}

const propMapFn = (props) => {
  return {
    ...props,
    foo: props.some.inconvenient.nested.Foo,
    bar: parseInt(props.some.other.structure.bar ? props.some.other.structure.bar : 123),
  };
}

MyComp = withPropMap(MyComp, propMapFn);
```
