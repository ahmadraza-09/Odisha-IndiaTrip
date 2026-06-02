import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Odisha Indiatrip Pvt. Ltd.",
    url: "https://odishaindiatrip.com",
    logo: "https://odishaindiatrip.com/logo.png",
    image: image,
    description:
      "Best Odisha travel agency providing Odisha tour packages, Jagannath Puri tours, family trips, honeymoon tours and Odisha sightseeing.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage",
    ],
  }

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra SEO */}
      <meta name="author" content="Odisha Indiatrip Pvt. Ltd." />
      <meta name="theme-color" content="#0f172a" />
      <meta name="language" content="English" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}

export default SEO