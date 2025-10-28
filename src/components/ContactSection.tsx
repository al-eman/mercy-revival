import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We'd love to hear from you.
            </p>
          </div>

          <Card className="p-6 md:p-8 bg-white shadow-lg">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
            >
              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field */}
              <input type="hidden" name="bot-field" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  rows={6}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
