import { Link } from 'react-router-dom';
import { Box, Button, Container, SimpleGrid, Text, Title } from '@mantine/core';
import TourCard from '../components/TourCard';
import { useI18n } from '../lib/useI18n';

export default function Services() {
  const { t } = useI18n();
  const s = t.services;
  return (
    <>
      <Box className="hero" py={{ base: 48, md: 80 }}>
        <Container size="lg">
          <Text tt="uppercase" fw={600} fz="sm" mb="xs" style={{ letterSpacing: 3, opacity: 0.85 }}>
            {s.eyebrow}
          </Text>
          <Title order={1} fz={{ base: 40, md: 64 }} lh={1.05} mb="md">
            {s.title}
          </Title>
          <Text fz="xl" maw={640} style={{ opacity: 0.92 }}>
            {s.lead}
          </Text>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {s.items.map((i, n) => (
            <TourCard key={i.id} {...i} showAction delay={n * 90} />
          ))}
        </SimpleGrid>
        <Text mt="xl" c="dimmed" ta="center">
          {s.custom}
        </Text>
      </Container>

      <Box className="surface" py={56}>
        <Container size="sm" ta="center">
          <Title order={2} fz={34} mb="xs">
            {s.ctaTitle}
          </Title>
          <Text c="dimmed" mb="lg">
            {s.ctaText}
          </Text>
          <Button component={Link} to="/contact" size="md">
            {t.nav.book}
          </Button>
        </Container>
      </Box>
    </>
  );
}
