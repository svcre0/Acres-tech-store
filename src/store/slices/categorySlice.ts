import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

interface CategoryState {
  categories: Category[];
  selectedCategory: string;
  loading: boolean;
}

const initialCategories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    slug: 'phones',
    description: 'Premium used smartphones from top brands',
    image: '/api/placeholder/300/200',
    productCount: 24,
  },
  {
    id: '2',
    name: 'Audio & Speakers',
    slug: 'speakers',
    description: 'High-quality speakers and audio equipment',
    image: '/api/placeholder/300/200',
    productCount: 18,
  },
  {
    id: '3',
    name: 'Car Audio',
    slug: 'car-audio',
    description: 'Professional car audio systems and accessories',
    image: '/api/placeholder/300/200',
    productCount: 12,
  },
  {
    id: '4',
    name: 'Gaming',
    slug: 'gaming',
    description: 'Consoles, games, and gaming accessories',
    image: '/api/placeholder/300/200',
    productCount: 31,
  },
  {
    id: '5',
    name: 'TVs & Displays',
    slug: 'tvs',
    description: 'Smart TVs and premium displays',
    image: '/api/placeholder/300/200',
    productCount: 15,
  },
];

const initialState: CategoryState = {
  categories: initialCategories,
  selectedCategory: 'all',
  loading: false,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory, setLoading } = categorySlice.actions;
export default categorySlice.reducer;