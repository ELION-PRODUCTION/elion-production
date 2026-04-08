export const siteConfig = {
  name: "Elion Production",
  shortName: "Elion",
  title: "Elion Production | Technology-Driven Film Production",
  description:
    "Technology-driven film production within a broader systems ecosystem spanning research, communication, and future product infrastructure.",
  locale: {
    default: "en",
    supported: ["en", "ru"] as const
  },
  contact: {
    corporate: "corporate@elion-production.com",
    investor: "investors@elion-production.com"
  }
};

export type SupportedLocale = (typeof siteConfig.locale.supported)[number];
