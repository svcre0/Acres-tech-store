import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppSelector } from '@/hooks/useRedux';

const Payments = () => {
  const { total, itemCount } = useAppSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Payment Information</h1>
          <p className="text-muted-foreground">
            You're almost there! Please enter your payment details to complete your purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Billing Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-2 text-sm bg-surface text-foreground"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border rounded-md px-3 py-2 text-sm bg-surface text-foreground"
                      placeholder="Email@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-2 text-sm bg-surface text-foreground"
                      placeholder="123 Main St, Apt 4B"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground">Payment Details</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Card Number</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-2 text-sm bg-surface text-foreground"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2 text-sm bg-surface text-foreground"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">CVC</label>
                      <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2 text-sm bg-surface text-foreground"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <Button variant="gold" size="lg" className="w-full mt-4">
                 Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-emerald-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${(total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-accent">${(total * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link to="/cart">
                  <Button variant="outline" size="lg" className="w-full">
                    Back to Cart
                  </Button>
                </Link>

                <div className="mt-6 p-4 bg-surface rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">🔒 Secure Payment</h4>
                  <p className="text-sm text-muted-foreground">
                    Your card information is encrypted and processed securely.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payments;
