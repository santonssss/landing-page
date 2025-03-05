import { AnimatedTransition } from "@components/AnimatedTransition";
import { ContactForm } from "@components/ContactForm";
import { SocialLinks } from "@components/SocialLinks";

const Contact = () => {
  return (
    <AnimatedTransition className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach
            out using the form below or via social media.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                <SocialLinks className="justify-start" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Based in: Qaraqalpaqstan, Nukus</p>
                  <p>Email: sarvarkalmuratov370@gmail.com</p>
                  <p>Available for freelance: Yes</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Contact;
