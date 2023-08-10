import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders', () => {
  render(<NewBoxForm />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm 
        backgroundColor=''
        width=''
        height=''
        />);
    expect(asFragment()).toMatchSnapshot();
})

