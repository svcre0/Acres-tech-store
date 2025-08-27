import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg border">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              ꋬꉔꋪꏂꇙ
            </h2>

            <form className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 border rounded-md bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-md bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              {/* Login Button */}
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Login
              </Button>
            </form>

            {/* Register Redirect */}
            <p className="text-sm text-center text-muted-foreground mt-6">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-accent hover:underline">
                Register
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
