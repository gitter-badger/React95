import React from 'react';
import { render } from '@testing-library/react';
import Fieldset from './Fieldset';

describe('<Fieldset />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with legend prop and children element', () => {
      const { container } = render(
        <Fieldset legend="example">
          <p>something</p>
        </Fieldset>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
