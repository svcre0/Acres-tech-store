import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  description: string;
  warranty?: string;
  featured: boolean;
  inStock: boolean;
  discount?: number;
}

interface ProductState {
  products: Product[];
  featuredProducts: Product[];
  selectedProduct: Product | null;
  filters: {
    category: string;
    priceRange: [number, number];
    condition: string[];
    sortBy: 'price-low' | 'price-high' | 'newest' | 'popular';
  };
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  selectedProduct: null,
  filters: {
    category: 'all',
    priceRange: [0, 2000],
    condition: [],
    sortBy: 'newest',
  },
  loading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.featuredProducts = action.payload.filter(product => product.featured);
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<ProductState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct, updateFilters, setLoading } = productSlice.actions;
export default productSlice.reducer;