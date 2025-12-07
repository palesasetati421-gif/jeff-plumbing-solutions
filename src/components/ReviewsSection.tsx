import { useState } from "react";
import { Star, MessageSquare, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  source?: "google" | "website";
}

const ReviewsSection = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    text: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and review.",
        variant: "destructive",
      });
      return;
    }

    // Send review via WhatsApp for now
    const message = `New Website Review:

*Name:* ${formData.name}
*Rating:* ${"⭐".repeat(formData.rating)}
*Review:* ${formData.text}`;

    const whatsappUrl = `https://wa.me/27685805133?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Thank you for your review!",
      description: "We appreciate your feedback.",
    });

    setFormData({ name: "", rating: 5, text: "" });
    setShowForm(false);
  };

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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.google.com/maps/place/Jeffplumbing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              See All Google Reviews
            </Button>
          </a>
          <Button
            variant="cta"
            className="gap-2"
            onClick={() => setShowForm(!showForm)}
          >
            <MessageSquare className="w-4 h-4" />
            Write a Review
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="max-w-lg mx-auto bg-card rounded-2xl p-8 shadow-soft border border-border/50 animate-fade-in">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="review-name">Your Name</Label>
                <Input
                  id="review-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Your Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          rating <= formData.rating
                            ? "fill-accent text-accent"
                            : "text-muted hover:text-accent"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="review-text">Your Review</Label>
                <Textarea
                  id="review-text"
                  name="text"
                  placeholder="Tell us about your experience..."
                  value={formData.text}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <Button type="submit" variant="cta" className="flex-1">
                  Submit Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
