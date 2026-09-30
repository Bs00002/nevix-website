import { useEffect } from "react";
import { BRAND } from "../constants";

const SEOHead = ({
  title = "Digital Marketing & Web Development Company in Ahmedabad | NEVIX",
  description = "NEVIX is a digital technology and growth agency in Ahmedabad offering website development, SEO, digital marketing, AI automation, e-commerce, CRM and custom software solutions.",
  path = "/",
  schemaType = "Organization",
  serviceName = null,
  breadcrumbs = [],
  article = null,
}) => {
  useEffect(() => {
    const cleanPath = path === "/" ? "/" : path.replace(/\/+$/, "");
    const canonicalUrl = `${BRAND.domain}${cleanPath}`;
    const ogImageUrl = `${BRAND.domain}/nevix-logo.jpeg`;

    document.title = title;

    const setMeta = (selector, attrName, attrVal, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImageUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // Build Valid JSON-LD Structured Data Graph (Organization, LocalBusiness, Service, ContactPage, BreadcrumbList, Article)
    const graph = [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${BRAND.domain}/#organization`,
        name: BRAND.name,
        slogan: BRAND.tagline,
        url: `${BRAND.domain}/`,
        logo: ogImageUrl,
        image: ogImageUrl,
        description:
          "NEVIX is a digital technology and growth agency in Ahmedabad offering website development, SEO, digital marketing, AI automation, e-commerce, CRM and custom software solutions.",
        telephone: BRAND.phone,
        email: BRAND.email,
        sameAs: [BRAND.instagram],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "State", name: "Gujarat" },
          { "@type": "Country", name: "India" },
        ],
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: `${BRAND.domain}${crumb.path === "/" ? "/" : crumb.path}`,
        })),
      });
    }

    if (schemaType === "Service" && serviceName) {
      graph.push({
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: serviceName,
        description,
        provider: { "@id": `${BRAND.domain}/#organization` },
        areaServed: [
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "State", name: "Gujarat" },
          { "@type": "Country", name: "India" },
        ],
        url: canonicalUrl,
      });
    }

    if (schemaType === "ContactPage") {
      graph.push({
        "@type": "ContactPage",
        "@id": `${canonicalUrl}#contactpage`,
        name: title,
        description,
        url: canonicalUrl,
        mainEntity: { "@id": `${BRAND.domain}/#organization` },
      });
    }

    if (schemaType === "Article" && article) {
      graph.push({
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: article.title,
        description: article.excerpt || description,
        author: {
          "@type": "Organization",
          name: BRAND.name,
        },
        publisher: { "@id": `${BRAND.domain}/#organization` },
        mainEntityOfPage: canonicalUrl,
      });
    }

    let scriptEl = document.getElementById("schema-jsonld");
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = "schema-jsonld";
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [title, description, path, schemaType, serviceName, breadcrumbs, article]);

  return null;
};

export default SEOHead;
