import { Phone, Clock, MapPin, Droplets, Wrench, Flame, ShieldCheck, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-plumber.jpg";

const Index = () => {
  const services = [
    {
      icon: Droplets,
      title: "Water Leak Detection",
      description: "Advanced leak detection to find and fix hidden water leaks before they cause major damage.",
    },
    {
      icon: Flame,
      title: "Geyser Services",
      description: "Installation, repair, and maintenance of all geyser types. Keep your hot water flowing.",
    },
    {
      icon: Wrench,
      title: "Plumbing Repairs",
      description: "From dripping taps to burst pipes, we handle all plumbing repairs quickly and professionally.",
    },
    {
      icon: ShieldCheck,
      title: "Blocked Drains",
      description: "Professional drain unblocking using the latest equipment for lasting results.",
    },
  ];

  const features = [
    { icon: Clock, text: "Open 24/7" },
    { icon: CheckCircle, text: "Fully Stocked Vans" },
    { icon: Star, text: "5-Star Rated" },
    { icon: MapPin, text: "Fast Response" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Droplets className="w-6 h-6 text-secondary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">Jeff Plumbing</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
          <a href="tel:0685805133">
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-sm text-primary-foreground font-medium">Available 24 Hours</span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Your Trusted
              <br />
              <span className="text-secondary">Plumbing Experts</span>
              <br />
              in Tembisa
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We offer you the best service — we care about our clients. Fast response, professional
              solutions, and honest pricing.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="tel:0685805133">
                <Button variant="cta" size="lg" className="w-full sm:w-auto gap-2">
                  <Phone className="w-5 h-5" />
                  068 580 5133
                </Button>
              </a>
              <a href="#services">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </a>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/90"
                >
                  <feature.icon className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Our Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From emergency repairs to routine maintenance, we handle all your plumbing needs with
              expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-8">
              We Arrive Prepared
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Your plumber will arrive at your house on time and fully prepared to diagnose and
              repair your plumbing problem. We keep our vans fully stocked to handle any situation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <p className="text-muted-foreground">Emergency Service Available</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">5.0</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">Customer Rating</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">Fast</div>
                <p className="text-muted-foreground">Response Times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Need a Plumber?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We are available 24 hours a day, 7 days a week.
            </p>

            <a href="tel:0685805133">
              <Button variant="cta" size="lg" className="gap-2 mb-12">
                <Phone className="w-5 h-5" />
                Call 068 580 5133
              </Button>
            </a>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <Phone className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-lg font-bold text-primary-foreground mb-2">Phone</h3>
                <a
                  href="tel:0685805133"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  068 580 5133
                </a>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <MapPin className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-lg font-bold text-primary-foreground mb-2">Address</h3>
                <p className="text-primary-foreground/80">
                  31 Botswana St, Tswelopele,
                  <br />
                  Tembisa, 1632
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <Clock className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-lg font-bold text-primary-foreground mb-2">Hours</h3>
                <p className="text-primary-foreground/80">Open 24 Hours</p>
                <p className="text-primary-foreground/60 text-sm">7 Days a Week</p>
              </div>
            </div>

            <p className="text-primary-foreground/60 mt-8">Areas served: Tembisa, Midrand & surrounds</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Droplets className="w-4 h-4 text-secondary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">Jeff Plumbing</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Jeff Plumbing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
