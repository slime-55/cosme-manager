import type { Category } from './types';

export const EXPIRATION_MONTHS: Record<Category, number> = { 'マスカラ': 3, 'アイライナー': 6, 'ファンデーション': 12, '下地': 12, 'プライマー': 12, 'シェーディング': 12, 'ハイライト': 12, 'コンシーラー': 12, 'フェイスパウダー': 18, 'アイシャドウ': 18, 'アイブロウ': 12, 'チーク': 18, 'リップ': 12, 'スキンケア': 6, 'BBクリーム': 12, 'その他': 12 };

export function calculateExpiration(openedDate: string, category: Category) {
  const date = new Date(`${openedDate}T12:00:00`);
  const originalDay = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + EXPIRATION_MONTHS[category]);
  const lastDayOfTargetMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(originalDay, lastDayOfTargetMonth));
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}
export function daysUntil(date: string) { return Math.ceil((new Date(`${date}T23:59:59`).getTime() - Date.now()) / 86400000); }
export function expirationStatus(days: number) { if (days <= 0) return { label: '期限切れ', tone: 'expired' as const }; if (days <= 14) return { label: 'もうすぐ期限', tone: 'soon' as const }; return { label: '期限まで余裕あり', tone: 'safe' as const }; }
