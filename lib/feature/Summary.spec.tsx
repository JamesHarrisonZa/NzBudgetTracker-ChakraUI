import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import { Summary } from './Summary';

interface WrapperProps {
  children?: React.ReactNode;
}

// TODO extract to util
const testWrapper = ({ children }: WrapperProps) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

describe('Summary', () => {
  it('Should display Income', () => {
    render(<Summary />, { wrapper: testWrapper });

    const income = screen.getByText(/income/i);

    expect(income).toBeInTheDocument();
  });
});
