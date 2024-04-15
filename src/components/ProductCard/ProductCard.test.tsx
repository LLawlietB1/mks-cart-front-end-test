
import { render, screen } from "@testing-library/react";
import ProductCard from '.';

describe('Footer component', () => {

  render(<ProductCard product={{
    "id": 6,
    "name": "iPad",
    "brand": "Apple",
    "description": "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
    "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
    "price": "4200.00",
    "createdAt": "2023-10-30T16:25:01.093Z",
    "updatedAt": "2023-10-30T16:25:01.093Z"
  }} />);

  it('Has the "iPad" text', () => {
    const productName = screen.getByText('iPad');

    expect(productName).toBeInTheDocument();
  });

});