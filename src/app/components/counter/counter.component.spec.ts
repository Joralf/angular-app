import { render, screen, fireEvent } from '@testing-library/angular';
import { CounterComponent } from './counter.component';

describe('Counter', () => {
  test('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: { count: 5 },
    });

    expect(screen.getByText('Current Count: 5'));
  });

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { count: 5 },
    });

    fireEvent.click(screen.getByText('Increment'));

    expect(screen.getByText('Current Count: 6'));
  });

  test('should decrement the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { count: 5 },
    });

    fireEvent.click(screen.getByText('Decrement'));

    expect(screen.getByText('Current Count: 4'));
  });
});
