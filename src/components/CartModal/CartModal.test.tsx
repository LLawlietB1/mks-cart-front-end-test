
import { render, screen } from "@testing-library/react";
import { CartModal } from './index';

describe('CartModal component', () => {

  render(<CartModal isOpen={true} closeModal={()=> {}} />);

  it('Has the "Carrinho de compras" text', () => {
    const modalTitle = screen.getByText('Carrinho de compras');

    expect(modalTitle).toBeInTheDocument();
  });

});