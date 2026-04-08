import Head from "next/head";
import type { PropsWithChildren, ReactNode } from "react";
import { siteConfig } from "@/config/site";

type SiteLayoutProps = PropsWithChildren<{
  title?: string;
  description?: string;
  actions?: ReactNode;
}>;

export function SiteLayout({
  children,
  title,
  description
}: SiteLayoutProps) {
  const pageTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {children}
    </>
  );
}
