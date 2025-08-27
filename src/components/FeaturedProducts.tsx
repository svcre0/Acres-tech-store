import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppDispatch } from '@/hooks/useRedux';
import { addToCart } from '@/store/slices/cartSlice';
import { Product } from '@/store/slices/productSlice';

const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Correct backend API URL
  const API_URL = 'https://my-app-backend-3l4y.onrender.com/api/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch products');

        const data = await res.json();
        const featured = data.filter((product: Product) => product.featured);
        setProducts(featured);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      condition: product.condition,
    }));
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100';
      case 'Good':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'Fair':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  if (loading) {
    return <p className="text-center py-10 text-muted-foreground">Loading featured products...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-destructive">Error: {error}</p>;
  }

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked premium electronics with unbeatable value and guaranteed quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-premium transition-all duration-300 hover-lift">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {product.discount && (
                    <Badge className="absolute top-3 left-3 bg-gold text-charcoal font-semibold">
                      -{product.discount}%
                    </Badge>
                  )}

                  <Badge className={`absolute top-3 right-3 ${getConditionColor(product.condition)}`}>
                    {product.condition}
                  </Badge>

                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button
                        variant="gold-outline"
                        size="sm"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? 'fill-gold text-gold' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(4.2)</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-accent">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="charcoal"
                    size="sm"
                    className="w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="gold" size="lg" className="group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

