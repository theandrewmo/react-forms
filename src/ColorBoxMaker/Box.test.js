import { render } from '@testing-library/react';
import Box from './Box';

it('renders', () => {
  render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box 
        backgroundColor='red'
        width='100px'
        height='100px'
        />);
    expect(asFragment()).toMatchSnapshot();
})



