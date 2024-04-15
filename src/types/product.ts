export interface ApiResponse {
    products: Product[]
    count: number
  }
  
  export interface Product {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
  }

  export interface ProductOnCart {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
    quantity: number
  }
  
  