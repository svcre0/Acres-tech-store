import { useState } from 'react';
import { Upload, CheckCircle, DollarSign, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Sell = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: '',
    brand: '',
    model: '',
    condition: '',
    storage: '',
    description: '',
    images: [] as File[],
    contactInfo: {
      name: '',
      email: '',
      phone: '',
    }
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setStep(4); // Success step
  };

  const steps = [
    { number: 1, title: 'Device Info', description: 'Tell us about your device' },
    { number: 2, title: 'Condition & Photos', description: 'Upload photos and describe condition' },
    { number: 3, title: 'Contact Details', description: 'How we can reach you' },
    { number: 4, title: 'Complete', description: 'Get your quote' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sell Your Device
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your unused electronics into cash. Get a free quote in minutes with our simple process.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <DollarSign className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Best Prices</h3>
              <p className="text-sm text-muted-foreground">
                We offer competitive prices for quality electronics
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Quick Process</h3>
              <p className="text-sm text-muted-foreground">
                Get your quote within 24 hours of submission
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Smartphone className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">All Devices</h3>
              <p className="text-sm text-muted-foreground">
                We buy phones, tablets, laptops, gaming consoles & more
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((stepItem, index) => (
                <div key={stepItem.number} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-2 ${
                    step >= stepItem.number
                      ? 'bg-gold text-charcoal'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step > stepItem.number ? <CheckCircle className="h-5 w-5" /> : stepItem.number}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-foreground">{stepItem.title}</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">{stepItem.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block absolute h-0.5 w-24 mt-5 ${
                      step > stepItem.number ? 'bg-gold' : 'bg-muted'
                    }`} style={{ left: '50%', transform: 'translateX(50%)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && 'Device Information'}
                {step === 2 && 'Condition & Photos'}
                {step === 3 && 'Contact Details'}
                {step === 4 && 'Quote Submitted!'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="deviceType">Device Type</Label>
                      <Select value={formData.deviceType} onValueChange={(value) => 
                        setFormData({...formData, deviceType: value})
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select device type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smartphone">Smartphone</SelectItem>
                          <SelectItem value="tablet">Tablet</SelectItem>
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="gaming">Gaming Console</SelectItem>
                          <SelectItem value="tv">TV</SelectItem>
                          <SelectItem value="speaker">Speaker/Audio</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Select value={formData.brand} onValueChange={(value) => 
                        setFormData({...formData, brand: value})
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="samsung">Samsung</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                          <SelectItem value="oneplus">OnePlus</SelectItem>
                          <SelectItem value="sony">Sony</SelectItem>
                          <SelectItem value="microsoft">Microsoft</SelectItem>
                          <SelectItem value="nintendo">Nintendo</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      placeholder="e.g., iPhone 14 Pro Max, Galaxy S23 Ultra"
                      value={formData.model}
                      onChange={(e) => setFormData({...formData, model: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="storage">Storage Capacity (if applicable)</Label>
                    <Select value={formData.storage} onValueChange={(value) => 
                      setFormData({...formData, storage: value})
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select storage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="64gb">64GB</SelectItem>
                        <SelectItem value="128gb">128GB</SelectItem>
                        <SelectItem value="256gb">256GB</SelectItem>
                        <SelectItem value="512gb">512GB</SelectItem>
                        <SelectItem value="1tb">1TB</SelectItem>
                        <SelectItem value="na">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      variant="gold" 
                      onClick={handleNext}
                      disabled={!formData.deviceType || !formData.brand || !formData.model}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="condition">Device Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => 
                      setFormData({...formData, condition: value})
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent - Like new, no visible wear</SelectItem>
                        <SelectItem value="good">Good - Minor wear, fully functional</SelectItem>
                        <SelectItem value="fair">Fair - Visible wear, some issues</SelectItem>
                        <SelectItem value="poor">Poor - Significant damage or issues</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe any damage, accessories included, original packaging, etc."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label>Upload Photos</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">
                        Drag & drop photos here, or click to select
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Upload clear photos of your device from multiple angles
                      </p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button 
                      variant="gold" 
                      onClick={handleNext}
                      disabled={!formData.condition}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.contactInfo.name}
                        onChange={(e) => setFormData({
                          ...formData, 
                          contactInfo: {...formData.contactInfo, name: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.contactInfo.email}
                        onChange={(e) => setFormData({
                          ...formData, 
                          contactInfo: {...formData.contactInfo, email: e.target.value}
                        })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="(123) 456-7890"
                      value={formData.contactInfo.phone}
                      onChange={(e) => setFormData({
                        ...formData, 
                        contactInfo: {...formData.contactInfo, phone: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="p-4 bg-surface rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">What happens next?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• We'll review your submission within 24 hours</li>
                      <li>• You'll receive a quote via email and phone</li>
                      <li>• If you accept, we'll arrange free pickup or shipping</li>
                      <li>• Payment is processed within 2 business days</li>
                    </ul>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button 
                      variant="gold" 
                      onClick={handleSubmit}
                      disabled={!formData.contactInfo.name || !formData.contactInfo.email}
                    >
                      Submit for Quote
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center space-y-6">
                  <CheckCircle className="h-24 w-24 text-emerald-500 mx-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Quote Request Submitted!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for choosing Cash Spinner. We'll review your device information 
                      and get back to you within 24 hours with a competitive quote.
                    </p>
                  </div>
                  
                  <div className="bg-surface p-6 rounded-lg">
                    <h4 className="font-medium text-foreground mb-4">What we received:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div>
                        <span className="text-sm text-muted-foreground">Device:</span>
                        <div className="font-medium">{formData.brand} {formData.model}</div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Condition:</span>
                        <div className="font-medium capitalize">{formData.condition}</div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Storage:</span>
                        <div className="font-medium">{formData.storage || 'N/A'}</div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Contact:</span>
                        <div className="font-medium">{formData.contactInfo.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="gold" onClick={() => {
                      setStep(1);
                      setFormData({
                        deviceType: '',
                        brand: '',
                        model: '',
                        condition: '',
                        storage: '',
                        description: '',
                        images: [],
                        contactInfo: { name: '', email: '', phone: '' }
                      });
                    }}>
                      Sell Another Device
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/">Return to Home</a>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;