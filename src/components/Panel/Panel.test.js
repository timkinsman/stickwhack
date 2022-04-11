import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Panel } from '.';
import { works } from '../../context';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Panel work={works[0]} />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/zep/i);
  expect(linkElement).toBeInTheDocument;
});
