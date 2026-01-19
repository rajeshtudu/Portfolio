import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Animated corner dot component
const CornerDot = ({ position, delay = 0 }: { position: string; delay?: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5, type: 'spring' }}
    className={`absolute w-3 h-3 ${position}`}
  >
    <motion.div
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full h-full rounded-full bg-primary/60"
    />
    <motion.div
      animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-0 rounded-full bg-primary/30"
    />
  </motion.div>
);

// Interactive input component with focus effects
const InteractiveInput = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  isTextarea = false,
  rows = 5,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextarea?: boolean;
  rows?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div 
      className="space-y-2 relative"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Label 
        htmlFor={id} 
        className={`transition-colors duration-300 ${isFocused ? 'text-primary' : ''}`}
      >
        {label}
      </Label>
      <div className="relative">
        {/* Glow effect on focus */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.95,
          }}
          className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-sm pointer-events-none"
        />
        {isTextarea ? (
          <Textarea
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`relative bg-background/80 backdrop-blur-sm border-border/50 resize-none transition-all duration-300 ${
              isFocused ? 'border-primary/50 shadow-lg shadow-primary/10' : ''
            }`}
          />
        ) : (
          <Input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`relative bg-background/80 backdrop-blur-sm border-border/50 transition-all duration-300 ${
              isFocused ? 'border-primary/50 shadow-lg shadow-primary/10' : ''
            }`}
          />
        )}
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or email directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tudurajesh34@gmail.com',
      href: 'mailto:tudurajesh34@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rajeshtudu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rajeshtudu', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/rajeshtudu', label: 'X (Twitter)' },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background decorations */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect and turn search potential into success!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, SEO strategies, 
                automation projects, or just having a friendly chat about tech!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20"
                  >
                    <info.icon size={20} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            {/* Form container with corner dots */}
            <motion.form
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 space-y-6 overflow-hidden"
              whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated corner dots */}
              <CornerDot position="top-3 left-3" delay={0.5} />
              <CornerDot position="top-3 right-3" delay={0.6} />
              <CornerDot position="bottom-3 left-3" delay={0.7} />
              <CornerDot position="bottom-3 right-3" delay={0.8} />

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InteractiveInput
                    label="Name"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InteractiveInput
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <InteractiveInput
                  label="Subject"
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <InteractiveInput
                  label="Message"
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  isTextarea
                  rows={5}
                />

                {/* Interactive Submit Button */}
                <motion.div
                  onHoverStart={() => setIsHoveringButton(true)}
                  onHoverEnd={() => setIsHoveringButton(false)}
                  className="relative"
                >
                  {/* Button glow effect */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: isHoveringButton ? 0.6 : 0.3,
                      scale: isHoveringButton ? 1.02 : 1,
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-md pointer-events-none"
                    style={{ backgroundSize: '200% 100%' }}
                  />
                  <motion.div
                    animate={isHoveringButton ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{ backgroundSize: '200% 100%' }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="relative w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-primary/25"
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : isSubmitted ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center"
                        >
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Message Sent!
                        </motion.span>
                      ) : (
                        <motion.span 
                          className="flex items-center"
                          whileHover={{ x: 3 }}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </motion.span>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;