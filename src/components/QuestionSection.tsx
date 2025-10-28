import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

const QuestionSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate
    try {
      formSchema.parse(formData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
        return;
      }
    }

    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const nativeFormData = new FormData(form);

    // Ensure form-name is included explicitly for Netlify
    const payload: Record<string, string> = { "form-name": "contact" };
    nativeFormData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
        setTimeout(() => {
          setFormData({ name: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        const txt = await response.text();
        console.log("Netlify form error response:", txt);
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
              Questions/Suggestions?
            </h2>
            <p className="text-md text-muted-foreground">
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Form */}
          <Card className="p-8 md:p-12 bg-white shadow-lg">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {error && <div className="text-red-600 text-sm">{error}</div>}

                <div>
                  <Label htmlFor="name" className="text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[150px]"
                    placeholder="Write your question or suggestion here..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
