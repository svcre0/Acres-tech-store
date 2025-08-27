import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form or show success message
  };

  const faqs = [
    {
      question: "What condition do devices need to be in?",
      answer: "We accept devices in all conditions from excellent to fair. Even devices with minor damage may have value."
    },
    {
      question: "How long does the selling process take?",
      answer: "Once you submit your device details, we provide a quote within 24 hours. Payment is processed within 2 business days of receiving your device."
    },
    {
      question: "Do you provide free shipping?",
      answer: "Yes! We provide free shipping labels for devices worth over $50. For lower value items, we can arrange discounted shipping."
    },
    {
      question: "What payment methods do you offer?",
      answer: "We offer payment via PayPal, bank transfer, or check. Payment is processed quickly once your device is received and verified."
    },
    {
      question: "Can I track my device shipment?",
      answer: "Absolutely! We provide tracking information for all shipments so you can monitor your device's journey to our facility."
    },
    {
      question: "What if I'm not happy with the final quote?",
      answer: "If our final quote differs from the initial estimate, you can choose to proceed or have your device returned free of charge."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our friendly team for support with buying or selling your electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gold" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formData.subject} onValueChange={(value) => 
                      setFormData({...formData, subject: value})
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="selling">Selling a Device</SelectItem>
                        <SelectItem value="buying">Buying Support</SelectItem>
                        <SelectItem value="shipping">Shipping Question</SelectItem>
                        <SelectItem value="payment">Payment Issue</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-2">
                        Speak with our team directly
                      </p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-accent hover:text-accent/80 font-medium"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">
                        Send us an email anytime
                      </p>
                      <a 
                        href="mailto:info@cashspinner.com" 
                        className="text-accent hover:text-accent/80 font-medium"
                      >
                        info@acres.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground mb-2">
                        Visit our showroom
                      </p>
                      <address className="text-accent not-italic">
                        123 Lyndhurst Boulevard<br />
                        Tech District, TD 12345
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 12:00 PM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-gold" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-charcoal rounded-lg">
          <h2 className="text-2xl font-bold text-surface mb-4">
            Still have questions?
          </h2>
          <p className="text-surface/80 mb-6">
            Our team is here to help with any questions about buying or selling electronics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Call Us Now
            </Button>
            <Button variant="gold-outline" size="lg">
              Live Chat Support
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;