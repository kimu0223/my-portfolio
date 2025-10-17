export const metadata = {
    title: 'ポートフォリオ',
    description: 'ポートフォリオのホームページです。',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="ja">
        <body>{children}</body>
      </html>
    );
  }