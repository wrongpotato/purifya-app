"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Building,
  Calendar,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";
import messages from "@/messages/fr.json"; // Import French messages

// Define the type for each service
type Service = {
  title: string;
  imageAlt: string;
  description: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
};

// Define the type for the Services section
type ServicesMessages = {
  cta: string;
  title: string;
  subtitle: string;
  residential: Service;
  commercial: Service;
  recurring: Service;
  specialized: Service;
};

export default function Services() {
  const t = messages.Services as ServicesMessages; // Explicitly cast the Services section
  type ServiceKey = "residential" | "commercial" | "recurring" | "specialized";
  const [activeService, setActiveService] = useState<ServiceKey>("residential");

  const services = {
    specialized: {
      image: `/images/services-4.jpg`,
      alt: t.specialized.imageAlt,
      icon: <Sparkles className="size-5" />,
    },
    residential: {
      image: `/images/services-1.jpg`,
      alt: t.residential.imageAlt,
      icon: <Home className="size-5" />,
    },
    commercial: {
      image: `/images/services-2.jpg`,
      alt: t.commercial.imageAlt,
      icon: <Building className="size-5" />,
    },
    recurring: {
      image: `/images/services-3.jpg`,
      alt: t.recurring.imageAlt,
      icon: <Calendar className="size-5" />,
    }

  };

  return (
    <Wrapper
      id="services"
      className="bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="mx-auto max-w-5xl space-y-10 md:space-y-16 lg:space-y-20">
        <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-balance capitalize text-4xl font-semibold text-gray-900 lg:text-5xl">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2C7E89] to-[#14302F] mx-auto mb-6" />
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg-px-0">
          <Accordion
            type="single"
            value={activeService}
            onValueChange={(value) => setActiveService(value as ServiceKey)}
            className="w-full space-y-6"
          >
            {Object.keys(services).map((key) => {
              const serviceKey = key as ServiceKey;
              return (
                <AccordionItem key={serviceKey} value={serviceKey}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4 text-xl font-medium text-gray-900">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#58afda4d] text-[#2C7E89]">
                        {services[serviceKey].icon}
                      </div>
                      {t[serviceKey].title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-700 pl-14">
                    {t[serviceKey].description}
                    <ul className="mt-5 space-y-3">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="size-5 mt-1 text-[#2C7E89] flex-shrink-0" />
                          <span className="text-lg text-gray-700">
                            {t[serviceKey][`benefit${item}` as keyof Service]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="relative flex overflow-hidden rounded-3xl border border-[#2C7E89]/30 p-4 transition-all hover:border-[#2C7E89]/50 shadow-md hover:shadow-lg bg-white">
            <div className="aspect-[4/3] relative w-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="size-full"
                >
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
