'use client';

import ClothingRailHero, { type RailGarment } from '@/components/ui/product-rail-gallery';
import { achievements } from '@/lib/content';

// Hang-tags are narrow and overlap their neighbours, so long labels are abbreviated there.
const SHORT_FIELD: Record<string, string> = { Innovation: 'Ideas', 'Game Dev': 'Games' };
const SHORT_LEVEL: Record<string, string> = { International: 'Intl', University: 'Univ' };

const items: RailGarment[] = achievements.map((ach) => ({
  id: ach.id,
  name: ach.title,
  description: ach.description,
  image: ach.image,
  tag: [SHORT_FIELD[ach.field] ?? ach.field, SHORT_LEVEL[ach.level] ?? ach.level],
  details: [ach.year, ach.field, ach.level],
}));

export function CertificateRail() {
  return (
    <ClothingRailHero
      items={items}
      hanger="wood"
      flippable={false}
      eyebrow="Hover · drag · click to lift"
      caption="Brush along the rail, slide a certificate, click one to look closer."
      autoplay
      className="bg-transparent"
    />
  );
}
