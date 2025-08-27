import { useState }  from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {

  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

import {
  Filter,
  Grid,
  List,
  Star,
  ShoppingCart,
} from 'lucide-react';

import { useAppDispatch } from '@/hooks/useRedux';
import { addToCart } from '@/store/slices/cartSlice';
import { staticProducts } from '@/data/displayData';

// ✅ Define Product type (remove if already imported elsewhere)
type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  condition: string;
  rating: number;
};

const Products = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Define add to cart handler
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Premium Used Electronics
          </h1>
          <p className="text-muted-foreground">
            Discover quality pre-owned electronics at unbeatable prices
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Filters</h3>

                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Category
                  </label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="smartphones">Smartphones</SelectItem>
                      <SelectItem value="audio-speakers">Audio & Speakers</SelectItem>
                      <SelectItem value="car-audio">Car Audio</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="tvs">TVs & Displays</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Price Range
                  </label>
                  <Slider defaultValue={[0, 1000]} max={2000} step={50} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$0</span>
                    <span>$2000+</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Condition
                  </label>
                  <div className="space-y-2">
                    {['Excellent', 'Good', 'Fair'].map((condition) => (
                      <label key={condition} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-muted-foreground">
                  {staticProducts.length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className={viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {staticProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-premium transition-all duration-300 hover-lift">
                  <CardContent className="p-0">
                    {viewMode === 'grid' ? (
                      <>
                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-3 right-3 bg-emerald-100 text-emerald-800">
                            {product.condition}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'fill-gold text-gold'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              ({product.rating.toFixed(1)})
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-accent">
                                ${product.price}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="charcoal"
                            size="sm"
                            className="w-full"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex gap-4 p-4">
                        <div className="w-32 h-32 flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground text-lg">{product.name}</h3>
                            <Badge className="bg-emerald-100 text-emerald-800">{product.condition}</Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'fill-gold text-gold'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              ({product.rating.toFixed(1)})
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-accent">${product.price}</span>
                              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                            </div>
                            <Button
                              variant="charcoal"
                              size="sm"
                              onClick={() => handleAddToCart(product)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="gold" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
