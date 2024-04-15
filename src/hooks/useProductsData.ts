import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { ApiResponse } from '../types/product';

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC';

const loadProducts = async () => {
    const response = await axios.get<ApiResponse>(API_URL);
    return response.data.products;
}
loadProducts();
export function useProductsData() {
    const query = useQuery({
        queryFn: loadProducts,
        queryKey: ['kms-products']
    })
    return query;
}