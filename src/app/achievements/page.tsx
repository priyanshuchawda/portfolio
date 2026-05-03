import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsGrid } from '@/components/StatsGrid';
import { StructuredData } from '@/components/StructuredData';
import { achievements, achievementStats } from '@/data/achievements';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import { getWebPageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata(pageMetadata.achievements);

export default function AchievementsPage() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.achievements.title,
          description: pageMetadata.achievements.description,
          path: pageMetadata.achievements.path,
        })}
      />

      <div className="container mx-auto max-w-4xl space-y-16 px-6 pt-20 pb-20">
        <PageHeader
          eyebrow="Achievements"
          title="Achievements"
          description="A quick track record from shipping projects, solving problems, and building in public."
        />

        <section
          className="bg-muted/10 border-border/50 space-y-8 rounded-lg border px-6 py-12"
          aria-label="Achievement metrics"
        >
          <StatsGrid stats={achievementStats} />
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Milestones"
            description="Highlights grounded in shipped work and measurable practice."
          />
          <div className="grid gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="border-border bg-muted/20 rounded-lg border px-6 py-5"
              >
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-muted-foreground mt-2">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-muted-foreground">
          <p>
            Want to see the work behind the numbers? Head to the
            <Link
              href="/projects"
              className="text-foreground hover:text-accent"
            >
              {' '}
              projects
            </Link>
            page for full case studies.
          </p>
        </section>
      </div>
    </main>
  );
}
