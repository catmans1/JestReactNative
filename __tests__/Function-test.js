import 'react-native';
import React from 'react';
import InputView from '../InputView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('function test', () => {
//   let InputData = renderer.create(<InputView />).getInstance();
//   expect(InputData.change(5)).toEqual(5);
// });

it('function and state test case', () => {
    let InputData = renderer.create(<InputView />).getInstance();
    InputData.validation('input@as.co')
    expect(InputData.state.isEmail).toEqual(true);
  });
