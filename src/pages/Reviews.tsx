import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Group, SimpleGrid, Text, Title, Chip } from '@mantine/core';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../lib/dictionaries';
import { useI18n } from '../lib/useI18n';

export default function Reviews() {
  const { t } = useI18n();
  const r = t.reviews;
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? reviews : reviews.filter((x) => x.tour === filter);
  const available = t.services.items.filter((i) => reviews.some((x) => x.tour === i.id));

  return (
    <>
      <Box className="hero" py={{ base: 48, md: 80 }}>
        <Container size="lg">
          <Text tt="uppercase" fw={600} fz="sm" mb="xs" style={{ letterSpacing: 3, opacity: 0.85 }}>
            {r.eyebrow}
          </Text>
          <Title order={1} fz={{ base: 40, md: 64 }} lh={1.05} mb="md">
            {r.title}
          </Title>
          <Text fz="xl" maw={640} style={{ opacity: 0.92 }}>
            {r.lead}
          </Text>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <Chip.Group multiple={false} value={filter} onChange={(v) => setFilter(v as string)}>
          <Group mb="xl" gap="xs">
            <Chip value="all">{r.all}</Chip>
            {available.map((i) => (
              <Chip key={i.id} value={i.id}>
                {i.title}
              </Chip>
            ))}
          </Group>
        </Chip.Group>
        {shown.length ? (
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
            {shown.map((x, n) => (
              <ReviewCard key={x.author} {...x} delay={(n % 3) * 90} />
            ))}
          </SimpleGrid>
        ) : (
          <Text c="dimmed">{r.empty}</Text>
        )}
        <Group mt={48} justify="center">
          <Button component={Link} to="/contact" size="md">
            {r.cta}
          </Button>
        </Group>
      </Container>
    </>
  );
}
