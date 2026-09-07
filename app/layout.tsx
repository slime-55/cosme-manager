import type { Metadata } from 'next';
import { Inter, M_PLUS_1 } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mplus = M_PLUS_1({ subsets: ['latin'], variable: '--font-mplus', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = { title: 'shelf — コスメ管理', description: 'お気に入りのコスメを、きれいに管理する。' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${inter.variable} ${mplus.variable}`}>{children}</body></html>;
}
