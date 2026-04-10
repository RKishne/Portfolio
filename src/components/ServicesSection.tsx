import {
  ServicesSection,
  ServicesHeader,
  ServicesTitle,
  ServicesSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitleText,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
} from "../styles/servicesStyles";
// Services Data
const servicesData = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites tailored for business growth and user engagement.",
    features: [
      "Custom websites",
      "Landing pages",
      "SEO-friendly structure",
      "Performance optimization",
    ],
  },
  {
    icon: "🚀",
    title: "MERN Stack Applications",
    description:
      "Full-stack scalable web applications using MongoDB, Express, React, and Node.js with clean architecture.",
    features: [
      "Custom dashboards",
      "REST API development",
      "Authentication & authorization",
      "Scalable backend systems",
    ],
  },
  {
    icon: "🛒",
    title: "Shopify Development",
    description:
      "Complete Shopify solutions including store setup, custom themes, and advanced app integrations.",
    features: [
      "Shopify store setup",
      "Theme customization (Liquid)",
      "Shopify app development",
      "Payment & API integrations",
    ],
  },
  {
    icon: "💎",
    title: "Shopify Plus & Advanced Checkout",
    description:
      "Expertise in Shopify from basic stores to Shopify Plus, including advanced checkout customization and custom app development for high-conversion eCommerce experiences.",
    features: [
      "Shopify Basic to Plus store setup",
      "Advanced checkout UI customization",
      "Shopify Scripts & Functions",
      "Custom Shopify app development",
      "High-conversion optimization",
    ],
  },
  {
    icon: "🔗",
    title: "Shopify Custom Integrations & Middleware",
    description:
      "We build custom middleware solutions to seamlessly connect Shopify with third-party platforms, enabling real-time data synchronization and advanced business workflows.",
    features: [
      "Inventory sync (Shopify ↔ external platforms)",
      "Custom backend (Node.js / MERN)",
      "Third-party API integrations",
      "Automated workflows & webhooks",
      "Order & product data synchronization",
    ],
  },
  {
    icon: "📱",
    title: "App Development & Play Store",
    description:
      "Building modern web apps and deployable applications with Play Store-ready configurations.",
    features: [
      "Web app development",
      "PWA (Progressive Web Apps)",
      "Android app deployment",
      "Play Store publishing support",
    ],
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Boost application speed, SEO, and user experience with advanced optimization techniques.",
    features: [
      "Code optimization",
      "Lazy loading & caching",
      "Core Web Vitals improvement",
      "Speed optimization",
    ],
  },
  {
    icon: "🛠️",
    title: "Consultation & Support",
    description:
      "Expert guidance, debugging, and ongoing support to scale and maintain your applications.",
    features: [
      "Code review",
      "Architecture planning",
      "Bug fixing",
      "Technical consultation",
    ],
  },
];

const ServicesComponent = () => {
  return (
    <ServicesSection>
      <ServicesHeader>
        <ServicesTitle>Services Offered</ServicesTitle>
        <ServicesSubtitle>
          Professional services tailored to your needs
        </ServicesSubtitle>
      </ServicesHeader>

      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitleText>{service.title}</ServiceTitleText>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceFeatures>
              {service.features.map((f, i) => (
                <ServiceFeature key={i}>{f}</ServiceFeature>
              ))}
            </ServiceFeatures>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default ServicesComponent;
