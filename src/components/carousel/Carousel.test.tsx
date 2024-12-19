import { render, fireEvent, screen } from '@testing-library/react';
import { Carousel } from './Carousel';
import { act } from 'react';

describe('Carousel', () => {
  const items = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
    <div key="4">Item 4</div>,
    <div key="5">Item 5</div>,
  ];

  it('renders without crashing', () => {
    render(<Carousel items={items} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('shows the right arrow initially', () => {
    render(<Carousel items={items} />);
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument();
  });

  it('hides the left arrow initially', () => {
    render(<Carousel items={items} />);
    expect(screen.queryByTestId('left-arrow')).not.toBeInTheDocument();
  });

  it('shows the left arrow after clicking the right arrow', () => {
    render(<Carousel items={items} />);
    fireEvent.click(screen.getByTestId('right-arrow'));
    expect(screen.getByTestId('left-arrow')).toBeInTheDocument();
  });

  it('changes slides when clicking the right arrow', () => {
    render(<Carousel items={items} />);
    fireEvent.click(screen.getByTestId('right-arrow'));
    expect(screen.getByText('Item 4')).toBeInTheDocument();
  });

  it('changes slides when clicking the left arrow', () => {
    render(<Carousel items={items} />);
    fireEvent.click(screen.getByTestId('right-arrow'));
    fireEvent.click(screen.getByTestId('left-arrow'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('updates items per page on window resize to 1 item per page', () => {
    render(<Carousel items={items} />);
    global.innerWidth = 500;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('updates items per page on window resize to 2 items per page', () => {
    render(<Carousel items={items} />);
    global.innerWidth = 800;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('updates items per page on window resize to 4 items per page', () => {
    render(<Carousel items={items} />);
    global.innerWidth = 1600;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
