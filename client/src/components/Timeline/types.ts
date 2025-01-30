// types.ts
export interface TimelineEntry {
    title: string;
    subtitle: string;
    dateRange: string;
    location: string;
    description?: string;
    link?: string;
    side?: "left" | "right";
    icon?: string; // e.g. an emoji or icon string
  }
  