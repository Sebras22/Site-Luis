import { Badge, Box, Group, Text } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import type { TourId } from '../lib/dictionaries';
import Reveal from './Reveal';
import { useI18n } from '../lib/useI18n';

interface Props {
  author: string;
  tour: TourId;
  text: string;
  delay?: number;
}

export default function ReviewCard({ author, tour, text, delay }: Props) {
  const { t } = useI18n();
  const tourTitle = t.services.items.find((i) => i.id === tour)?.title;
  return (
    <Reveal delay={delay} fill>
    <Box className="card card-lift" p="lg" h="100%" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
      <IconQuote size={28} color="var(--mantine-primary-color-filled)" />
      <Text my="sm" fz="lg" style={{ fontFamily: 'var(--mantine-font-family-headings)' }} fw={500}>
        « {text} »
      </Text>
      <Group justify="space-between" gap="xs">
        <Text size="sm" fw={600}>
          {author}
        </Text>
        <Badge variant="light" size="sm">
          {tourTitle}
        </Badge>
      </Group>
    </Box>
    </Reveal>
  );
}
