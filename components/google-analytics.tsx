import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Tải Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-WCLN98R8`}
      />

      {/* Cấu hình Google Analytics */}
      {/* <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4QWLZG77RS');
        `}
      </Script> */}
    </>
  );
};

export default GoogleAnalytics;
