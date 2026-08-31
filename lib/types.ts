export const CATEGORIES = ['ファンデーション', '下地', 'プライマー', 'BBクリーム', 'コンシーラー', 'フェイスパウダー', 'シェーディング', 'ハイライト', 'アイシャドウ', 'アイライナー', 'マスカラ', 'アイブロウ', 'チーク', 'リップ', 'スキンケア', 'その他'] as const;
export type Category = typeof CATEGORIES[number];
export type Cosmetic = { id: string; brand: string; name: string; category: Category; customCategoryName?: string; purchaseDate: string; openedDate: string; expirationDate: string; imageUrl: string; createdAt: string };
