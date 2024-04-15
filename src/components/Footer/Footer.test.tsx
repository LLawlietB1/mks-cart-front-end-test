
import { render, screen } from "@testing-library/react";
import { Footer } from '.';

describe('Footer component', () => {

  it('Has the "MKS sistemas © Todos os direitos reservados" text', () => {

    render(<Footer />);
    const companyName = screen.getByText('MKS sistemas © Todos os direitos reservados');
    expect(companyName).toBeInTheDocument();
  });

});