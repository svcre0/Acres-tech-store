import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, RotateCcw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppDispatch } from '@/hooks/useRedux';
import { addToCart } from '@/store/slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data (in real app, fetch based on id)
  const product = {
    id: id || '1',
    name: 'iPhone 14 Pro Max',
    price: 899,
    originalPrice: 1099,
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
    ],
    category: 'phones',
    condition: 'Excellent',
    description: 'Experience the power of iPhone 14 Pro Max in pristine condition. This premium device has been expertly tested and restored to deliver exceptional performance.',
    warranty: '6 months warranty included',
    features: [
      '6.7-inch Super Retina XDR display',
      'A16 Bionic chip',
      'Pro camera system with 48MP Main',
      '1TB storage capacity',
      '5G connectivity',
      'Face ID security',
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A16 Bionic',
      'Storage': '1TB',
      'Camera': '48MP Pro camera system',
      'Battery': 'Up to 29 hours video playback',
      'Operating System': 'iOS 16',
    },
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    discount: 18,
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      condition: product.condition as 'Excellent' | 'Good' | 'Fair',
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-accent">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-accent">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-border hover:border-accent/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-emerald-100 text-emerald-800">
                  {product.condition}
                </Badge>
                {product.discount && (
                  <Badge className="bg-gold text-charcoal font-semibold">
                    -{product.discount}% OFF
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-accent">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-lg font-semibold text-emerald-600">
                    Save ${product.originalPrice! - product.price}
                  </span>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y">
              <div className="text-center">
                <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Quality Guaranteed</div>
                <div className="text-xs text-muted-foreground">{product.warranty}</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Free Shipping</div>
                <div className="text-xs text-muted-foreground">2-3 business days</div>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Easy Returns</div>
                <div className="text-xs text-muted-foreground">30-day policy</div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="premium" size="lg" className="w-full">
                Buy Now - Fast Checkout
              </Button>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-sm font-medium text-emerald-600">
                In Stock - Ready to Ship
              </span>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Complete Feature List:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Technical Specifications</h3>
                  <div className="grid gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-foreground">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="p-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Customer Reviews</h3>
                  <div className="grid gap-4">
                    {/* Sample reviews */}
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-gold text-gold"
                                />
                              ))}
                            </div>
                            <span className="font-medium text-foreground">John D.</span>
                          </div>
                          <span className="text-sm text-muted-foreground">2 weeks ago</span>
                        </div>
                        <p className="text-muted-foreground">
                          Excellent condition device! Exactly as described and arrived quickly. 
                          Very happy with the purchase and the service from Cash Spinner.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;