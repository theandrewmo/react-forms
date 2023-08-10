import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders', () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("adds a new todo", ()=> {
  render(<TodoList />)

  const taskInput = screen.getByTestId('task')
  const submitButton = screen.getByTestId('submitButton');

  fireEvent.change(taskInput, {target : {value : 'testTask'}})
  fireEvent.click(submitButton)

  expect(screen.getByTestId('todo')).toBeInTheDocument();
})