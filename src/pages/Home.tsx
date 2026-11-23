import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import ReviewCard from '../components/ReviewCard';
import Reveal from '../components/Reveal';
import TourCard from '../components/TourCard';
import { reviews } from '../lib/dictionaries';
import { useI18n } from '../lib/useI18n';

export default function Home() {
  const { t } = useI18n();
  const h = t.home;

  return (
    <>
      <Box className="hero" py={{ base: 56, md: 96 }}>
        <Container size="lg">
          <Grid align="center" gap={48}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg" className="hero-stagger">
                <Text tt="uppercase" fw={600} fz="sm" style={{ letterSpacing: 3, opacity: 0.85 }}>
                  {h.eyebrow}
                </Text>
                <Title order={1} fz={{ base: 44, md: 72 }} lh={1}>
                  {h.title}
                </Title>
                <Text fz={{ base: 'lg', md: 22 }} maw={560} style={{ opacity: 0.92 }}>
                  {h.lead}
                </Text>
                <Group>
                  <Button component={Link} to="/avis" size="md" className="btn-ghost">
                    {h.ctaReviews}
                  </Button>
                  <Button component={Link} to="/contact" size="md" variant="white">
                    {h.ctaBook}
                  </Button>
                  <Button component="a" href="#oeuvre" size="md" className="btn-ghost">
                    {h.ctaWork}
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }} visibleFrom="md">
              <img
                className="hero-photo"
                src="/images/luis.jpg"
                alt={t.about.photoAlt}
                style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center 40%', borderRadius: '240px 240px 12px 12px', display: 'block' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <Reveal>
          <Title order={2} fz={40} mb="xs">
            {h.servicesTitle}
          </Title>
          <Text c="dimmed" mb="xl" maw={640}>
            {h.servicesLead}
          </Text>
        </Reveal>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
          {t.services.items.map((i, n) => (
            <TourCard key={i.id} {...i} delay={n * 90} />
          ))}
        </SimpleGrid>
      </Container>

      <Box id="oeuvre" className="surface" py={72} style={{ scrollMarginTop: 72 }}>
        <Container size="lg">
          <Grid align="center" gap={48}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Reveal>
                <img src="/images/pompidou.jpg" alt={h.workTitle} loading="lazy" className="photo" style={{ maxHeight: 460 }} />
              </Reveal>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Reveal delay={120}>
              <Text c="forest" tt="uppercase" fw={600} fz="sm" mb={4} style={{ letterSpacing: 2 }}>
                {h.workLabel}
              </Text>
              <Title order={2} fz={36} mb="md">
                {h.workTitle}
              </Title>
              <Text fz="xl" fs="italic" mb={4} style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
                « {h.workQuote} »
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                — {h.workQuoteAuthor}
              </Text>
              <Text>{h.workText}</Text>
              </Reveal>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <Group justify="space-between" align="end" mb="xl">
          <Title order={2} fz={40}>
            {h.reviewsTitle}
          </Title>
          <Button component={Link} to="/avis" variant="subtle">
            {h.reviewsAll}
          </Button>
        </Group>
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {reviews.slice(0, 3).map((r, n) => (
            <ReviewCard key={r.author} {...r} delay={n * 90} />
          ))}
        </SimpleGrid>
      </Container>

      <Box className="surface" py={72}>
        <Container size="lg">
          <Grid align="center" gap={48}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Reveal>
                <img src="/images/luis.jpg" alt={t.about.photoAlt} loading="lazy" className="photo" style={{ height: 380, objectPosition: 'center 40%' }} />
              </Reveal>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Reveal delay={120}>
              <Title order={2} fz={40} mb="md">
                {h.aboutTitle}
              </Title>
              <Text fz="lg" mb="lg">
                {h.aboutText}
              </Text>
              <Button component={Link} to="/about" size="md">
                {h.aboutCta}
              </Button>
              </Reveal>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box className="hero" py={48}>
        <Container size="lg">
          <Group justify="space-between">
            <Title order={2} fz={30}>
              {h.bandTitle}
            </Title>
            <Button component={Link} to="/contact" size="lg" variant="white">
              {t.nav.book}
            </Button>
          </Group>
        </Container>
      </Box>
    </>
  );
}
