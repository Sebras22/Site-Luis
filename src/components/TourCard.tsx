import { Link } from 'react-router-dom';
import { Badge, Box, Button, Group, Text, Title } from '@mantine/core';
import { IconBike, IconBuildingBank, IconMountain, IconWalk } from '@tabler/icons-react';
import { tourImages, type TourId } from '../lib/dictionaries';
import Reveal from './Reveal';
import { useI18n } from '../lib/useI18n';

const icons: Record<TourId, typeof IconWalk> = {
  hike: IconMountain,
  museum: IconBuildingBank,
  walk: IconWalk,
  bike: IconBike,
};

interface Props {
  id: TourId;
  title: string;
  place: string;
  text: string;
  showAction?: boolean;
  delay?: number;
}

export default function TourCard({ id, title, place, text, showAction, delay }: Props) {
  const { t } = useI18n();
  const Icon = icons[id];
  return (
    <Reveal delay={delay} fill>
    <Box className="card card-lift" style={{ borderRadius: 'var(--mantine-radius-md)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <img src={tourImages[id]} alt="" loading="lazy" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
      <Box p="lg" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Group gap="xs" mb={6} wrap="nowrap">
          <Icon size={22} color="var(--mantine-primary-color-filled)" />
          <Title order={3}>{title}</Title>
        </Group>
        <Badge variant="light" mb="sm" w="fit-content">
          {place}
        </Badge>
        <Text c="dimmed" style={{ flex: 1 }}>
          {text}
        </Text>
        {showAction && (
          <Button component={Link} to={`/contact?tour=${id}`} variant="light" mt="md" fullWidth>
            {t.services.discover}
          </Button>
        )}
      </Box>
    </Box>
    </Reveal>
  );
}
