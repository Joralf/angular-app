import { render, screen, fireEvent } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';

describe('Counter', () => {
  test('should render app', async () => {
    await render(AppComponent, {
      declarations: [CounterComponent],
    });

    expect(screen.getByText('Welcome'));
  });
});
