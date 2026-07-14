export interface CampaignItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  // Styled placeholder details
  themeColor: string; // Tailwind class like bg-deep-burgundy
  bgPattern: 'waves' | 'grid' | 'circles' | 'geometric' | 'minimal' | 'lines' | 'radial';
  accentText: string;
  // Lightbox slides
  slides: {
    title: string;
    description: string;
    slideBg: string;
    pattern: string;
  }[];
}

export interface CompetitorData {
  name: string;
  contentStyle: string;
  strengths: string;
  contentGap: string;
  keyLearning: string;
  color: string;
}

export interface GrowthStrategyItem {
  title: string;
  description: string;
  iconName: string;
  details: string;
}

export interface WeeklyPlanItem {
  day: string;
  title: string;
  concept: string;
  format: 'Reel' | 'Carousel' | 'Story Set' | 'Single Post';
  objective: string;
  color: string;
}

export interface FutureGrowthIdea {
  title: string;
  description: string;
  metrics: string;
}

export interface DeliverableItem {
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  description: string;
}
