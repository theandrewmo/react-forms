import { render, screen, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';

it('renders', () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList
        />);
    expect(asFragment()).toMatchSnapshot();
})

it('Adds a new box', () => {
  render(<BoxList />);

  const backgroundColorInput = screen.getByTestId('backgroundColor');
  const widthInput = screen.getByTestId('width');
  const heightInput = screen.getByTestId('height');
  const submitButton = screen.getByTestId('submitButton'); 

  // Set values for the input fields
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.change(widthInput, { target: { value: '100px' } });
  fireEvent.change(heightInput, { target: { value: '100px' } });

  // Click the submit button
  fireEvent.click(submitButton);

  // Assert that the new box is added based on its properties
  expect(screen.getByText('X')).toBeInTheDocument(); // Check for the delete button
  expect(screen.getByTestId("box-red-100px-100px")).toBeInTheDocument(); // Check for the box content
  expect(screen.getByTestId("box-red-100px-100px")).toHaveStyle('background-color: red'); // Check for the box background color
  expect(screen.getByTestId("box-red-100px-100px")).toHaveStyle('width: 100px'); // Check for the box width
  expect(screen.getByTestId("box-red-100px-100px")).toHaveStyle('height: 100px'); // Check for the box height
});