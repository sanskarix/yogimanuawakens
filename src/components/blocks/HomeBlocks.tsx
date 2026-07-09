import React from "react";
import { Container, Section, Stack, Spacer } from "../ui/layout";
import { Heading, Text, Eyebrow } from "../ui/typography";
import { Button } from "../ui/button";
import { ImageWrapper, Reveal } from "../ui/utilities";
import Link from "next/link";

export function Hero() {
  return (
    <Section spacing="none" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWrapper
          src="/images/hero-bg.jpg" // Placeholder path, we will add images later or leave for user
          alt="Yogi Manu"
          fill
          imageClassName="opacity-80"
          className="h-full w-full bg-brand-border" // Fallback color
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg/90" />
      </div>

      <Container className="relative z-10 text-center">
        <Reveal duration={1.2} direction="up" className="max-w-4xl mx-auto flex flex-col items-center">
          <Heading level={1} variant="display" className="mb-6">
            Walking the Path of Yoga, Devotion & Inner Awakening.
          </Heading>
          <Text size="large" className="max-w-2xl text-brand-text mb-12">
            Through yoga, mantra, kirtan and spiritual reflection, I share the practices that transformed my own life–from chronic pain to inner peace.
          </Text>
          <Stack space="6" className="md:flex-row items-center justify-center w-full">
            <Button asChild size="lg">
              <Link href="/teachings">Watch Teachings</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/about">Begin Your Journey</Link>
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Section>
  );
}

export function JourneyTimeline() {
  const milestones = [
    { year: "2016", title: "Construction Worker", description: "Constant physical labor." },
    { year: "2017", title: "Chronic Pain", description: "Back, shoulder, and knee pain became a normal part of daily life." },
    { year: "2018", title: "Yoga", description: "A simple search for pain relief unexpectedly brought genuine stillness." },
    { year: "2019", title: "Daily Practice", description: "Consistent practice led to a profound emotional release and clarity." },
    { year: "Today", title: "Sharing the Journey", description: "An open invitation to explore a quieter, more present way of living." },
  ];

  return (
    <Section spacing="large" className="bg-brand-surface relative">
      <Container>
        <Reveal className="mb-24 text-center max-w-2xl mx-auto">
          <Heading level={2}>The Journey</Heading>
          <Text className="mt-6">Before the practice, there was only the pain. This is the story of how a simple search for relief transformed everything.</Text>
        </Reveal>

        <div className="max-w-3xl mx-auto relative border-l border-brand-border/60 pl-8 md:pl-16 ml-4 md:ml-auto">
          {milestones.map((milestone, i) => (
            <Reveal key={i} delay={i * 0.15} className="mb-16 relative">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 h-4 w-4 rounded-full bg-brand-bg border-2 border-brand-saffron" />
              <Eyebrow className="block mb-2 text-brand-saffron">{milestone.year}</Eyebrow>
              <Heading level={3} className="mb-4">{milestone.title}</Heading>
              <Text>{milestone.description}</Text>
            </Reveal>
          ))}
          <Reveal delay={0.8} className="mt-12">
            <Button asChild variant="text" className="px-0">
              <Link href="/about">Read the full story</Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
