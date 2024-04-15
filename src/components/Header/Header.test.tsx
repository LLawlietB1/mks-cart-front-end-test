
import { render, screen } from "@testing-library/react";
import { Header } from '.';

describe('Header component', () => {

  render(<Header />);

  it('Has the Header is on document', async () => {
    const header = await screen.findByAltText("Cart icon");

    expect(header).toBeInTheDocument();
  });

});