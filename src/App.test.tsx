import { beforeEach, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders with the correct heading', () => {
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /tic-tac-toe/i
    );
  });
});
