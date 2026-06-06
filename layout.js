import './globals.css'; // ⚡ இந்த லைன் தான் அனைத்து பிரீமியம் ஸ்டைல்களையும் லோடு செய்யும்!

export const metadata = {
  title: "Eternox Studios",
  description: "The official 3D portal of Eternox Studios. Manifesting supreme dynamic realms and cosmic digital architectures.",
  keywords: ["Eternox Studios", "Eternox", "Realm Manifestation", "3D Web Realm", "Rithikan", "Eternox Projects"],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020005] antialiased">{children}</body>
    </html>
  );
}