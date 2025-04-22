import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Purifya | Service Premium de Nettoyage de Vitres et Verre à Montréal et Rive-Sud",
    description:
      "Purifya offre des services professionnels de nettoyage de vitres et de verre à Montréal, Brossard, Greenfield Park, St-Lambert et St-Hubert. Nous sommes spécialisés dans le nettoyage résidentiel et commercial pour maisons de luxe, immeubles à étages, vitrines, portes de douche et cloisons en verre. Résultats impeccables avec des solutions écologiques.",
    keywords: [
      "nettoyage de vitres",
      "service de nettoyage de verre",
      "lavage de fenêtres professionnel",
      "nettoyage de fenêtres résidentiel",
      "nettoyage de vitres commercial",
      "service de nettoyage de vitres d'immeubles",
      "nettoyage de vitrines",
      "nettoyage de cloisons en verre",
      "service de nettoyage de portes de douche",
      "nettoyage de vitres sans traces",
      "nettoyage de surfaces en verre",
      "service de nettoyage de miroirs",
      "nettoyage de fenêtres Brossard",
      "lavage de vitres",
      "services de nettoyage de vitres",
      "nettoyeurs de fenêtres",
      "nettoyage de verre maisons de luxe",
      "service de nettoyage de tables en verre",
      "nettoyage de vitres Airbnb",
      "nettoyage de verre écologique",
      "nettoyage de vitres pour entreprises",
      "nettoyage de fenêtres extérieures",
      "service de lavage de verre intérieur",
      "spécialistes en nettoyage de vitres et verre",
    ],
    icons: {
      icon: "/logo-cropped.png",
      apple: "/logo-cropped.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = {
    "LocaleSwitcher": {
      "switchToFrench": "Passer au français",
      "switchToEnglish": "Passer à l'anglais",
      "en": "EN",
      "fr": "FR"
    },
    "CTA": {
      "label": "Commencer"
    },
    "Header": {
      "services": "Services",
      "pricing": "Plans",
      "showcase": "Vitrine",
      "contact": "Contact",
      "bookNow": "Réserver"
    },
    "Hero": {
      "title": "Nettoyage de Vitres Haut de Gamme",
      "subtitle": "Des vues cristallines grâce à nos services professionnels de nettoyage de fenêtres",
      "cta": "Obtenir un Devis"
    },
    "Services": {
      "cta": "Contactez-nous",
      "title": "Services de Fenêtres Exceptionnels",
      "subtitle": "Solutions sur mesure pour tous vos besoins en nettoyage de fenêtres",
      "residential": {
        "title": "Nettoyage de Fenêtres Résidentielles",
        "imageAlt": "Service de nettoyage de fenêtres résidentielles",
        "description": "Un service complet pour garder les fenêtres de votre maison impeccables toute l'année.",
        "benefit1": "Techniques douces pour tous types de verre",
        "benefit2": "Produits de nettoyage écologiques et sûrs",
        "benefit3": "Satisfaction garantie"
      },
      "commercial": {
        "title": "Nettoyage de Fenêtres Commerciales",
        "imageAlt": "Service de nettoyage de fenêtres commerciales",
        "description": "Solutions professionnelles pour les fenêtres de bureaux et de devantures de magasins.",
        "benefit1": "Équipement de qualité industrielle pour les grands bâtiments",
        "benefit2": "Planification flexible adaptée aux besoins de votre entreprise",
        "benefit3": "Équipes expérimentées et certifiées"
      },
      "recurring": {
        "title": "Services Récurrents",
        "imageAlt": "Service d'entretien de fenêtres récurrent",
        "description": "Planifiez un entretien périodique pour des fenêtres toujours impeccables.",
        "benefit1": "Forfaits mensuels ou trimestriels abordables",
        "benefit2": "Rappels automatiques pour chaque rendez-vous",
        "benefit3": "Tarifs réduits pour les contrats annuels"
      },
      "specialized": {
        "title": "Nettoyage de Fenêtres Spécialisées",
        "imageAlt": "Service de nettoyage de fenêtres spécialisées",
        "description": "Solutions expertes pour les besoins uniques en nettoyage de fenêtres.",
        "benefit1": "Nettoyage sur mesure pour les fenêtres difficiles d'accès",
        "benefit2": "Puits de lumière, vitraux et entretien de verre spécialisé",
        "benefit3": "Service sûr et efficace par des professionnels qualifiés"
      }
    },
    "WhatWeDo": {
      "title": "Notre Approche",
      "description": "Chez Purifya, nous élevons le nettoyage de fenêtres au rang d'art. Nos spécialistes utilisent des techniques avancées et des solutions haut de gamme pour garantir des fenêtres sans traces, cristallines, qui transforment votre espace et maximisent la lumière naturelle.",
      "list": {
        "precision": "Attention méticuleuse aux cadres, rails et seuils",
        "expertise": "Manipulation sûre du verre délicat ou spécialisé",
        "customization": "Plans de nettoyage personnalisés pour votre propriété unique"
      },
      "imageAlt": "Nettoyage de fenêtres professionnel en action"
    },
    "LuxuryShowcase": {
      "cta": "Contactez-nous",
      "title": "Voyez la Différence",
      "subtitle": "Espaces exquis qui redéfinissent la vie de luxe",
      "image1Alt": "Fenêtres de maison impeccables",
      "image1Title": "Excellence Résidentielle",
      "image1Description": "Découvrez le luxe de fenêtres parfaitement nettoyées qui encadrent votre vue et inondent votre maison de lumière naturelle.",
      "image2Alt": "Fenêtres de devanture de magasin commerciales",
      "image2Title": "Clarté Commerciale",
      "image2Description": "Faites bonne impression avec des fenêtres de devanture de magasin impeccables qui mettent en valeur votre entreprise sous le meilleur jour possible.",
      "image3Alt": "Nettoyage détaillé des fenêtres intérieures",
      "image3Title": "Détails Intérieurs",
      "image3Description": "Profitez de cadres, de seuils et de rails impeccables grâce à notre nettoyage intérieur complet qui garantit que chaque composant de votre système de fenêtres est impeccable.",
      "image4Alt": "Nettoyage de fenêtres spécialisées",
      "image4Title": "Solutions de Verre Spécialisées",
      "image4Description": "Des vitraux aux puits de lumière, nous avons l'expertise nécessaire pour nettoyer et protéger vos fenêtres les plus précieuses et uniques."
    },
    "ParallaxScroll": {
      "title": "Services Experts de Nettoyage Vitré",
      "subtitle": "Transformer les Espaces par la Précision et l'Élégance",
      "image1Alt": "Nettoyage de vitrines commerciales",
      "image1Title": "Vitrines Commerciales Impeccables",
      "image1Description": "Nettoyage professionnel des vitrines pour une présentation impeccable et une attractivité optimale.",
      "image2Alt": "Nettoyage de fenêtres extérieures",
      "image2Title": "Vitrines Sans Traces",
      "image2Description": "Nettoyage intérieur et extérieur des fenêtres pour maximiser la lumière naturelle et préserver les vues dégagées pour votre entreprise.",
      "image3Alt": "Nettoyage de vitres en hauteur",
      "image3Title": "Solutions Vitrées pour Bâtiments Élevés",
      "image3Description": "Techniques spécialisées pour les gratte-ciel et les éléments architecturaux complexes.",
      "image4Alt": "Entretien de miroirs et surfaces vitrées",
      "image4Title": "Perfection Réfléchissante",
      "image4Description": "Polissage expert des miroirs et traitements spécialisés pour des surfaces vitrées impeccables."
    },
    "Pricing": {
      "title": "Options de Nettoyage de Fenêtres",
      "description": "Explorez nos différents services de nettoyage; nous offrons des forfaits complets pour répondre à vos besoins spécifiques.",
      "customQuote": "Obtenir un Devis Personnalisé",
      "customQuoteDescription": "Pour les propriétés ayant des exigences uniques, nous fournissons des estimations détaillées et personnalisées.",
      "contactUs": "Contactez-nous",
      "freeQuote": "DEVIS GRATUIT",
      "learnMore": "Contactez-nous",
      "services": {
        "residentialCleaning": {
          "title": "Fenêtres Intérieures et Extérieures",
          "description": "Service complet de nettoyage de fenêtres pour les maisons de toutes tailles."
        },
        "deepCleaning": {
          "title": "Nettoyage de Fenêtres Intensif",
          "description": "Nettoyage en profondeur des rails, des cadres et des moustiquaires."
        },
        "regularMaintenance": {
          "title": "Entretien Saisonnier",
          "description": "Plans de service réguliers pour garder les fenêtres impeccables à chaque saison."
        },
        "bathroomCleaning": {
          "title": "Portes de Douche en Verre",
          "description": "Nettoyage spécialisé pour le verre de salle de bain et les enceintes de douche."
        },
        "officeCleaning": {
          "title": "Fenêtres Commerciales",
          "description": "Nettoyage professionnel pour les entreprises, les devantures de magasins et les immeubles de bureaux."
        },
        "specializedCleaning": {
          "title": "Nettoyage de Fenêtres Détaillé",
          "description": "Une attention particulière pour les fenêtres nécessitant des soins spéciaux."
        }
      },
      "features": {
        "availableAnytime": {
          "title": "Planification Flexible",
          "description": "Nous nous adaptons à votre emploi du temps pour fournir un service avec un minimum de perturbations."
        },
        "premiumQuality": {
          "title": "Résultats Supérieurs",
          "description": "Nous utilisons des outils et des solutions de qualité professionnelle pour une perfection sans traces."
        },
        "fastEfficient": {
          "title": "Service Efficace",
          "description": "Des techniciens experts travaillent rapidement sans sacrifier l'attention aux détails."
        },
        "reliableService": {
          "title": "Satisfaction Garantie",
          "description": "Nous garantissons notre travail avec une garantie de satisfaction à 100% sur tous les services."
        }
      }
    },
    "WindowCTA": {
      "title": "Vitres Cristallines Garanties",
      "description": "Services professionnels de nettoyage de vitres utilisant des solutions écologiques. Obtenez des résultats sans traces et profitez de vues étincelantes dès aujourd'hui !",
      "cta": "Demander un Devis Gratuit",
      "learnMore": "Découvrir nos Services"
    },
    "Footer": {
      "about": {
        "title": "À Propos de Purifya",
        "description": "Purifya fournit des services de nettoyage de fenêtres haut de gamme pour les clients exigeants de Montréal, assurant une clarté parfaite et des vues impeccables."
      },
      "contact": {
        "title": "Contactez-nous",
        "address": "Grand Montréal",
        "phone": "+1 (438) 530 3350",
        "whatsapp": "+1 (438) 530 3350",
        "email": "info@Purifya.ca",
        "name": "Nom",
        "message": "Message",
        "send": "Envoyer",
        "getInTouch": "Contactez-nous",
        "sending": "Envoi en cours..."
      },
      "followUs": "Suivez-nous",
      "rights": "Tous droits réservés.",
      "contactUs": "Contactez-nous",
      "contactMethods": {
        "email": "Envoyer un Courriel",
        "whatsapp": "WhatsApp",
        "phone": "Appelez-nous"
      },
      "socialMedia": {
        "facebook": "Suivez-nous sur Facebook",
        "instagram": "Suivez-nous sur Instagram",
        "twitter": "Suivez-nous sur Twitter"
      },
      "toasts": {
        "success": {
          "title": "Message envoyé",
          "description": "Nous vous répondrons bientôt !"
        },
        "error": {
          "title": "Erreur",
          "description": "Échec de l'envoi du message. Veuillez réessayer."
        }
      },
      "errors": {
        "Name must be at least 2 characters": "Le nom doit contenir au moins 2 caractères",
        "Invalid email address": "Adresse e-mail invalide",
        "Message must be at least 10 characters": "Le message doit contenir au moins 10 caractères"
      }
    },
    "About": {
      "title": "Notre Vision des Soins des Fenêtres",
      "mission": "Chez Purifya, nous redéfinissons le nettoyage de fenêtres avec des techniques innovantes et un engagement envers la qualité, transformant les espaces avec une clarté durable.",
      "ourStory": "NOTRE HISTOIRE",
      "foundersAlt": "Photo de l'équipe des fondateurs de Purifya",
      "foundersTitle": "Construit sur l'Expertise",
      "foundersDescription": "Fondée en 2024, Purifya offre un entretien précis des fenêtres avec un accent sur l'excellence et l'innovation.",
      "foundersFact1": "Axé sur l'excellence en qualité et satisfaction client.",
      "foundersFact2": "Utilisation de technologies pour des solutions écologiques.",
      "foundersFact3": "Propriété et exploitation locale.",
      "valuesTitle": "Nos Principes Directeurs",
      "valuesSubtitle": "Le fondement de tout ce que nous faisons",
      "value1Title": "Artisanat de Précision",
      "value1Description": "Attention méticuleuse à chaque fenêtre.",
      "value2Title": "Approche Innovante",
      "value2Description": "Intégration de technologies pour des résultats impeccables.",
      "value3Title": "Engagement Durable",
      "value3Description": "Solutions écologiquement responsables.",
      "learnMore": "En savoir plus"
    },
    "WhyChooseUs": {
      "title": "POURQUOI NOUS CHOISIR",
      "subtitle": "Purifya dessert Montréal avec une expertise en nettoyage de fenêtres. Choisissez-nous pour notre équipement professionnel, nos normes de sécurité et notre attention aux détails.",
      "sparklingClean": {
        "title": "RÉSULTATS SANS TRACES",
        "description": "Nos techniques spécialisées et nos solutions haut de gamme garantissent des fenêtres parfaitement claires et sans traces qui maximisent la lumière naturelle et améliorent vos vues."
      },
      "leadingTech": {
        "title": "ÉQUIPEMENT AVANCÉ",
        "description": "Nous utilisons des systèmes de purification de l'eau, des outils de qualité professionnelle et des solutions écologiques qui offrent des résultats supérieurs tout en protégeant votre propriété."
      },
      "insured": {
        "title": "SATISFACTION GARANTIE",
        "description": "Nous garantissons notre travail avec une promesse de satisfaction complète pour chaque service, vous donnant confiance dans des résultats exceptionnels et constants pour tous vos besoins de nettoyage de vitres."
      },
      "reliableCrew": {
        "title": "SPÉCIALISTES DÉVOUÉS",
        "description": "Nos professionnels d'entretien des vitres suivent une formation rigoureuse sur les techniques spécialisées et la manipulation appropriée de tous les types de fenêtres pour offrir des résultats exceptionnels à chaque intervention."
      },
      "cta": "Contactez-nous",
      "learnMore": "En Savoir Plus"
    },
    "Priority": {
      "title": "NOS VALEURS FONDAMENTALES",
      "subtitle": "Ce Qui Nous Motive",
      "labels": {
        "customers": "SATISFACTION CLIENT",
        "environment": "RESPONSABILITÉ ENVIRONNEMENTALE",
        "communication": "SERVICE TRANSPARENT"
      },
      "content": {
        "customers": "Nous offrons un nettoyage de fenêtres exceptionnel pour les maisons et les entreprises, en écoutant toujours nos clients et en dépassant leurs attentes à chaque service.",
        "environment": "Nous utilisons des solutions de nettoyage écologiques et biodégradables et des techniques de conservation de l'eau pour protéger votre propriété et l'environnement.",
        "communication": "Nos prix sont clairs et compétitifs, et nous garantissons notre travail avec une garantie de satisfaction. Si vous n'êtes pas entièrement satisfait, nous reviendrons pour répondre à toute préoccupation."
      }
    },
    "LuxuryAppeal": {
      "title": "L'Impact des Fenêtres Cristallines",
      "subtitle": "Découvrez comment des fenêtres parfaitement propres transforment les espaces et créent des impressions durables",
      "benefits": {
        "visualAppeal": "Esthétique Améliorée",
        "visualAppealDesc": "Des fenêtres impeccables améliorent considérablement l'apparence de toute propriété, à l'intérieur comme à l'extérieur",
        "perception": "Valeur Immobilière Améliorée",
        "perceptionDesc": "Des fenêtres bien entretenues augmentent considérablement la valeur perçue et l'attrait extérieur",
        "businessGrowth": "Avantage Commercial",
        "businessGrowthDesc": "Pour les entreprises, des fenêtres impeccables créent une image professionnelle qui attire les clients"
      },
      "statistic": "50% De Plus",
      "statisticDesc": "de lumière naturelle entre par les fenêtres nettoyées par des professionnels"
    },
    "ContactForm": {
      "title": "Formulaire de Contact",
      "description": "Envoyez-nous un message ou contactez-nous via WhatsApp pour une estimation gratuite.",
      "labels": {
        "name": "Nom",
        "email": "Courriel",
        "message": "Message"
      },
      "placeholders": {
        "name": "Entrez votre nom",
        "email": "Entrez votre courriel",
        "message": "Entrez votre message"
      },
      "errors": {
        "name": "Le nom doit contenir au moins 2 caractères",
        "email": "Adresse e-mail invalide",
        "message": "Le message doit contenir au moins 10 caractères"
      },
      "success": {
        "title": "Message envoyé !",
        "description": "Merci pour votre message. Nous vous répondrons bientôt."
      },
      "error": {
        "title": "Erreur",
        "description": "Il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer."
      },
      "buttons": {
        "sendMessage": "Envoyer le Message",
        "sending": "Envoi en cours...",
        "contactWhatsApp": "Contacter via WhatsApp"
      }
    },
    "FooterContactForm": {
      "contactFormTitle": "Contactez-nous",
      "contactFormDescription": "Vous avez une question ou souhaitez planifier un nettoyage de fenêtres ? Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
      "namePlaceholder": "Votre Nom",
      "emailPlaceholder": "Votre Courriel",
      "messagePlaceholder": "Votre Message",
      "sendingButton": "Envoi en cours...",
      "sendButton": "Envoyer le Message",
      "successTitle": "Message Envoyé",
      "successDescription": "Merci de nous avoir contactés ! Nous vous répondrons sous peu avec un devis.",
      "errorTitle": "Quelque Chose S'est Mal Passé",
      "errorDescription": "Il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer plus tard.",
      "getInTouch": "Contactez-nous",
      "emailLabel": "Courriel",
      "phoneLabel": "Téléphone",
      "whatsappLabel": "WhatsApp",
      "followUs": "Suivez-nous",
      "facebook": "Facebook",
      "instagram": "Instagram",
      "twitter": "Twitter",
      "github": "GitHub",
      "linkedin": "LinkedIn",
      "nameMin": "Le nom doit contenir au moins 2 caractères",
      "emailInvalid": "Veuillez entrer une adresse courriel valide",
      "messageMin": "Le message doit contenir au moins 10 caractères",
      "nameError": "Veuillez entrer votre nom",
      "emailError": "Veuillez entrer votre courriel",
      "messageError": "Veuillez entrer votre message"
    }
  }
  
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-cropped.png" />
        <link rel="apple-touch-icon" href="/logo-cropped.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
