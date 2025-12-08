import { Star, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  source?: "google" | "website";
}

const ReviewsSection = () => {
  // Static Google reviews - update these with actual reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: "Thabo M.",
      rating: 5,
      text: "Excellent service! Jeff arrived within 30 minutes and fixed my burst pipe quickly. Highly recommend!",
      date: "2 weeks ago",
      source: "google",
    },
    {
      id: 2,
      name: "Sarah K.",
      rating: 5,
      text: "Very professional and affordable. They installed my new geyser and cleaned up perfectly afterwards.",
      date: "1 month ago",
      source: "google",
    },
    {
      id: 3,
      name: "Michael O.",
      rating: 5,
      text: "Called them at 10pm for an emergency and they came right away. Amazing 24/7 service!",
      date: "1 month ago",
      source: "google",
    },
    {
      id: 4,
      name: "Linda P.",
      rating: 5,
      text: "Best plumber in Tembisa! Fair prices and honest work. Will definitely use again.",
      date: "2 months ago",
      source: "google",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                    {review.source === "google" && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        Google
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons - Google Reviews Only */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://share.google/s2jbT2UARx30Jryqc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" className="gap-2 w-full sm:w-auto">
              <ExternalLink className="w-4 h-4" />
              Leave a Review on Google
            </Button>
          </a>
          <a
            href="https://share.google/s2jbT2UARx30Jryqc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <ExternalLink className="w-4 h-4" />
              View All Reviews on Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
