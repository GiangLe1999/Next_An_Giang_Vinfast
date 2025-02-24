import Script from "next/script";

const GoogleAnalytics = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_TRACKING_ID) {
    console.warn("Google Analytics ID is missing!");
    return null; // Không render nếu không có ID
  }

  return (
    <>
      {/* Tải Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      {/* Cấu hình Google Analytics */}
      <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
