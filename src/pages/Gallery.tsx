import { Link } from "react-router-dom";
import { Phone, Droplets, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import gallery images
import geyserInstallation from "@/assets/gallery/geyser-installation.jpg";
import drainExcavation from "@/assets/gallery/drain-excavation.jpg";
import geyserUnits from "@/assets/gallery/geyser-units.jpg";
import showerInstallation from "@/assets/gallery/shower-installation.jpg";
import geyserMounting from "@/assets/gallery/geyser-mounting.jpg";
import kitchenSink from "@/assets/gallery/kitchen-sink.jpg";
import geyserSetup from "@/assets/gallery/geyser-setup.jpg";
import bathroomInstall from "@/assets/gallery/bathroom-install.jpg";
import copperPiping from "@/assets/gallery/copper-piping.jpg";
import bathtubInstall from "@/assets/gallery/bathtub-install.webp";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: bathtubInstall, alt: "Modern bathtub installation" },
    { id: 2, src: showerInstallation, alt: "Shower installation" },
    { id: 3, src: copperPiping, alt: "Copper pipe work" },
    { id: 4, src: bathroomInstall, alt: "Bathroom installation" },
    { id: 5, src: kitchenSink, alt: "Kitchen sink installation" },
    { id: 6, src: geyserInstallation, alt: "Geyser installation" },
    { id: 7, src: geyserUnits, alt: "Geyser units" },
    { id: 8, src: geyserMounting, alt: "Geyser mounting" },
    { id: 9, src: geyserSetup, alt: "Geyser setup" },
    { id: 10, src: drainExcavation, alt: "Drain excavation work" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">Jeff Plumbing</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Home
            </Link>
            <Link to="/book" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Book Service
            </Link>
            <Link to="/gallery" className="text-primary-foreground hover:text-primary-foreground transition-colors">
              Gallery
            </Link>
          </div>
          <a href="tel:0685805133">
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Browse through our completed projects and see the quality of our workmanship.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Like What You See?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let us help you with your next plumbing project. Book a service or request a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button variant="cta" size="lg">
                Book a Service
              </Button>
            </Link>
            <a
              href="https://wa.me/27685805133?text=Hi%20Jeff%20Plumbing!%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Request a Quote
              </Button>
            </a>
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

export default Gallery;
