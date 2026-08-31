import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['500', '600'] });

export const metadata: Metadata = { title: 'shelf — コスメ管理', description: 'お気に入りのコスメを、きれいに管理する。' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${inter.variable} ${cormorant.variable}`}>{children}</body></html>;
}
