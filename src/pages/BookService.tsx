import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Droplets, ArrowLeft, Calendar, Clock, User, MessageSquare, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const BookService = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    address: "",
    service: "",
    problem: "",
  });

  const suburbs = [
    "Sandton", "Randburg", "Roodepoort", "Midrand", "Fourways",
    "Bryanston", "Northcliff", "Linden", "Parktown", "Rosebank",
    "Alberton", "Germiston", "Boksburg", "Benoni", "Edenvale",
    "Kempton Park", "Bedfordview", "Springs", "Brakpan",
    "Soweto", "Lenasia", "Johannesburg South", "Mondeor", "Glenvista",
    "Johannesburg CBD", "Other",
  ];

  const services = [
    "Water Leak Detection",
    "Geyser Services",
    "Plumbing Repairs",
    "Plumbing Installation",
    "Blocked Drains",
    "Other",
  ];

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.suburb || !formData.address || !formData.service || !date || !time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message with booking details
    const message = `Hi Jeff Plumbing! I would like to book a service.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Area:* ${formData.suburb}
*Address:* ${formData.address}
*Service:* ${formData.service}
*Date:* ${format(date, "PPP")}
*Time:* ${time}
*Problem:* ${formData.problem || "Not specified"}`;

    const whatsappUrl = `https://wa.me/27685805133?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Booking Request Sent!",
      description: "We'll confirm your appointment shortly.",
    });
  };

  const handleQuoteRequest = () => {
    const message = `Hi Jeff Plumbing! I would like to request a quote.

*Name:* ${formData.name || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Area:* ${formData.suburb || "Not provided"}
*Address:* ${formData.address || "Not provided"}
*Service:* ${formData.service || "Not specified"}
*Details:* ${formData.problem || "Please call me to discuss."}`;

    const whatsappUrl = `https://wa.me/27685805133?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
            <Link to="/book" className="text-primary-foreground hover:text-primary-foreground transition-colors">
              Book Service
            </Link>
            <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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

      {/* Header */}
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
            Book a Service
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Schedule your plumbing service at a time that works for you. Fill out the form below and we'll confirm your appointment.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4" />
                  Your Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              {/* Suburb / Area */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4" />
                  Area / Suburb *
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, suburb: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your area" />
                  </SelectTrigger>
                  <SelectContent>
                    {suburbs.map((suburb) => (
                      <SelectItem key={suburb} value={suburb}>
                        {suburb}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Street Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4" />
                  Street Address *
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Enter your street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground">
                  <Droplets className="w-4 h-4" />
                  Service Required *
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Problem Description */}
              <div className="space-y-2">
                <Label htmlFor="problem" className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="w-4 h-4" />
                  Describe Your Problem
                </Label>
                <Textarea
                  id="problem"
                  name="problem"
                  placeholder="Tell us more about the plumbing issue you're experiencing..."
                  value={formData.problem}
                  onChange={handleInputChange}
                  className="min-h-[120px]"
                />
              </div>

              {/* Date and Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Date Picker */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-foreground">
                    <Calendar className="w-4 h-4" />
                    Preferred Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Picker */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-foreground">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </Label>
                  <Select onValueChange={setTime}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" variant="cta" size="lg" className="flex-1 gap-2">
                  <Send className="w-5 h-5" />
                  Book Appointment
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={handleQuoteRequest}
                >
                  <MessageSquare className="w-5 h-5" />
                  Request Quote Instead
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-muted rounded-2xl text-center">
              <p className="text-muted-foreground mb-2">Need immediate assistance?</p>
              <a
                href="tel:0685805133"
                className="text-2xl font-bold text-secondary hover:text-secondary/80 transition-colors"
              >
                Call 068 580 5133
              </a>
              <p className="text-sm text-muted-foreground mt-2">Available 24/7</p>
            </div>
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

export default BookService;
