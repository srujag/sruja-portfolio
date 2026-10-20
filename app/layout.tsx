import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Sruja Gangolu | Product Portfolio',
  description: 'Lead Product Manager Portfolio — Gaming, AI Voice Agents, and Growth Strategy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
