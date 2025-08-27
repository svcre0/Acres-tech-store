import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { staticCategories } from '@/data/categoriesData'; // ✅ import the static data

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium pre-owned electronics across all our specialized categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {staticCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover-lift">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant="gold" size="sm" className="w-full">
                      View {category.productCount} Items
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">
                      {category.productCount} items available
                    </span>
                    <Link to={`/products?category=${category.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Browse
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="premium" size="lg" className="group">
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
