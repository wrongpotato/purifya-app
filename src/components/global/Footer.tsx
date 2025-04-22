"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, Send } from "lucide-react";
import Image from "next/image";
import messages from "@/messages/fr.json"; // Import French messages

const contactFormSchema = z.object({
  name: z.string().min(2, messages.FooterContactForm.nameMin),
  email: z.string().email(messages.FooterContactForm.emailInvalid),
  message: z.string().min(10, messages.FooterContactForm.messageMin),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Footer() {
  const t = messages.FooterContactForm; // Access the FooterContactForm section of the messages
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: t.successTitle,
        description: t.successDescription,
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t.errorTitle,
        description: t.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: t.emailLabel,
      value: "info@Purifya.fr",
      href: "mailto:info@Purifya.fr",
    },
    {
      icon: Phone,
      label: t.phoneLabel,
      value: "+33 5 53 03 33 50",
      href: "tel:+14385303350",
    },
    {
      icon: FaWhatsapp,
      label: t.whatsappLabel,
      value: "+33 5 53 03 33 50",
      href: "https://wa.me/14385303350",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#050914] to-[#0A0F1D] pt-20 pb-10 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.025]">
        <Image
          src="/images/parallax-2.jpg"
          alt="Footer Background"
          fill
          quality={100}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/90"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Contact Information */}
            <div className="space-y-12 md:pr-8 lg:pr-12 flex flex-col justify-between h-full pt-4">
              <div className="space-y-6">
                <h3 className="text-5xl font-bold text-white border-b pb-8 border-[#14302F]">
                  {t.getInTouch}
                </h3>
                <p className="text-white/60 text-lg">
                  {t.contactFormDescription}
                </p>
                <div className="space-y-4 mt-8">
                  {contactItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center py-4 px-4 space-x-3 text-white/70 hover:text-white bg-[#0A0F1D]/60 backdrop-blur-sm rounded-xl border border-[#2A3154]/50 shadow-md transition-all duration-300 group hover:shadow-md hover:shadow-[#14302F]/20 hover:border-[#14302F]/40 hover:-translate-y-1"
                    >
                      <item.icon className="w-6 h-6 group-hover:text-[#14302F] transition-colors" />
                      <span className="text-lg">{item.value}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 flex flex-col justify-between h-full pt-2">
              <h2 className="text-5xl font-bold text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2C7E89] via-[#14302F] to-[#2C7E89]">
                  {t.contactFormTitle}
                </span>
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 bg-[#0A0F1D]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#2A3154]/50 shadow-lg"
              >
                {/* Name Input */}
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder={t.namePlaceholder}
                    {...register("name")}
                    className={cn(
                      "h-12 bg-white/5 border-white/10 text-white text-lg placeholder:text-white/50 placeholder:text-lg rounded-lg shadow-sm focus:ring-offset-gray-900 focus:ring-[#2C7E89]",
                      errors.name && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">
                      {t.nameMin}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    {...register("email")}
                    className={cn(
                      "h-12 bg-white/5 border-white/10 text-white text-lg placeholder:text-white/50 placeholder:text-lg rounded-lg shadow-sm focus:ring-offset-gray-900 focus:ring-[#2C7E89]",
                      errors.email &&
                        "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">
                      {t.emailInvalid}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <Textarea
                    placeholder={t.messagePlaceholder}
                    {...register("message")}
                    className={cn(
                      "min-h-[120px] bg-white/5 border-white/10 text-white text-lg placeholder:text-white/50 placeholder:text-lg resize-none rounded-lg shadow-sm focus:ring-offset-gray-900 focus:ring-[#2C7E89]",
                      errors.message &&
                        "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">
                      {t.messageMin}
                    </p>
                  )}
                </div>
                {/* Submit Button */}
                <Button
                  size="default"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-md bg-gradient-to-r from-[#2C7E89] to-[#14302F] text-white text-lg shadow-lg hover:bg-[#14302F] transition-transform hover:-translate-y-[2px]"
                >
                  {isSubmitting ? (
                    t.sendingButton
                  ) : (
                    <>
                      {t.sendButton}
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
