export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  category: "update" | "research" | "community" | "announcement";
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "community-consensus-achieved",
    title: "Strong Community Consensus Achieved Across 10+ Villages",
    date: "2024-06-15",
    category: "community",
    excerpt:
      "After two years of consultations following FPIC protocols, traditional leaders and communities across Misool have endorsed the Marine Protected Area establishment.",
    content: `
After two years of careful consultations following Free, Prior and Informed Consent (FPIC) protocols, we are thrilled to announce that strong consensus has been achieved across more than 10 villages in Misool for the establishment of our community-led Marine Protected Area.

This milestone represents countless hours of community meetings, traditional ceremonies, and discussions with village leaders, clan heads, and community members. The process was designed to ensure that this is truly a community-driven initiative, not an external project imposed on local people.

## What This Means

With this consensus, we can now move forward with the formal establishment of the MPA Committee, which will include representatives from each participating village alongside technical advisors. This committee will have genuine decision-making authority over the MPA's management.

## Traditional Governance Integration

A key aspect of our approach has been integrating traditional governance systems—specifically adat (customary law) and sasi (seasonal closures)—into the MPA framework. Rather than replacing these time-tested systems, we're building on them, ensuring cultural continuity while adding modern monitoring and enforcement capabilities.

## Next Steps

With community consensus secured, our focus now shifts to:
- Finalizing the governance framework and MPA Committee structure
- Completing baseline scientific surveys
- Establishing patrol protocols and ranger training
- Setting up the base camp on Cempedak Island

We extend our deepest gratitude to the traditional leaders and communities who have placed their trust in this collaborative approach to marine conservation.
    `,
  },
  {
    slug: "baseline-surveys-complete",
    title: "Baseline Scientific Surveys Completed at 15 Sites",
    date: "2024-09-20",
    category: "research",
    excerpt:
      "Our team of trained community members and marine scientists have completed comprehensive baseline surveys documenting coral health and fish populations across the proposed MPA.",
    content: `
We are pleased to report the successful completion of baseline scientific surveys across 15 monitoring sites within the proposed Marine Protected Area. These surveys provide critical data that will allow us to measure the MPA's impact over time.

## Survey Methodology

Using Reef Check methodology—the international standard for coral reef monitoring—our team documented:
- Coral cover and health indicators
- Fish species diversity and abundance
- Key indicator species populations
- Invertebrate populations
- Substrate composition

## Community Involvement

Twelve community members from local villages received Reef Check certification training, enabling them to participate in data collection alongside visiting marine scientists. This capacity building ensures that monitoring can continue with local leadership.

## Preliminary Findings

While full analysis is ongoing, preliminary data confirms the exceptional biodiversity of this region:
- Over 350 fish species documented
- Coral cover ranging from 25% to 65% across sites
- Presence of key indicator species including Napoleon wrasse and bumphead parrotfish
- Evidence of recovery in areas where traditional sasi has been enforced

These baseline measurements will be compared against future surveys to track ecosystem recovery under MPA protection.

## Data Transparency

In keeping with our commitment to transparency, we will publish full survey reports and make data available to researchers. This scientific foundation is essential for adaptive management and demonstrating impact to stakeholders.
    `,
  },
  {
    slug: "implementation-october-2025",
    title: "Full Implementation Scheduled for October 2025",
    date: "2024-11-01",
    category: "announcement",
    excerpt:
      "With preparations nearly complete, we are announcing October 2025 as the target date for full MPA implementation, including ranger patrols and base camp operations.",
    content: `
We are excited to announce that full implementation of the community-led Marine Protected Area is scheduled to begin in October 2025. This marks a significant milestone in our journey toward protecting the marine biodiversity of Misool.

## What Implementation Means

Beginning in October 2025, we will:
- Deploy regular ranger patrol operations
- Activate the base camp on Cempedak Island
- Begin enforcement of no-take zone regulations
- Launch quarterly scientific monitoring
- Initiate community benefit-sharing programs

## Remaining Preparations

The months leading up to implementation will focus on:
- Finalizing MPA Committee formation and governance protocols
- Training and equipping community rangers
- Establishing communication systems for patrol coordination
- Completing infrastructure at the Cempedak Island base camp
- Developing detailed patrol schedules and enforcement procedures

## Why October?

The timing is strategic. October follows the peak fishing season, allowing communities to prepare for the transition. It also aligns with favorable weather conditions for initial patrol operations and marks the beginning of the diving season when enforcement presence is most visible to potential violators.

## Support Needed

We are currently raising funds to ensure we can meet this timeline. Key funding needs include:
- Patrol boat equipment and fuel
- Ranger training and salaries
- Base camp infrastructure
- Scientific monitoring equipment
- Community liaison activities

Contact us if you'd like to support this critical phase of our work.
    `,
  },
];

export function getAllNewsSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getRecentNews(limit: number = 3): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
