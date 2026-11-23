import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Group, List, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCertificate, IconCheck, IconMapPin, IconSchool } from '@tabler/icons-react';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../lib/dictionaries';
import { useI18n } from '../lib/useI18n';

const credentialIcons = [IconSchool, IconCertificate, IconMapPin];

export default function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <>
      <Box className="hero" py={{ base: 48, md: 88 }}>
        <Container size="lg">
          <Grid align="center" gap={48}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <img
                src="/images/luis.jpg"
                alt={a.photoAlt}
                style={{ width: '100%', maxHeight: 560, objectFit: 'cover', objectPosition: 'center 35%', borderRadius: 12, display: 'block' }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="md">
                <Text tt="uppercase" fw={600} fz="sm" style={{ letterSpacing: 3, opacity: 0.85 }}>
                  {a.eyebrow}
                </Text>
                <Title order={1} fz={{ base: 48, md: 76 }} lh={1}>
                  {a.title}
                </Title>
                <Text fz="lg" fw={500} style={{ opacity: 0.9 }}>
                  {a.role}
                </Text>
                <Text fz={{ base: 'xl', md: 26 }} fs="italic" lh={1.35} style={{ fontFamily: 'var(--mantine-font-family-headings)', borderLeft: '3px solid currentColor', paddingLeft: 16 }}>
                  « {a.quote} »
                </Text>
                <Group mt="xs">
                  <Button component={Link} to="/contact" size="md" variant="white">
                    {a.cta}
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {a.credentials.map((c, i) => {
            const Icon = credentialIcons[i];
            return (
              <Box key={c.title} className="card" p="lg" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
                <ThemeIcon size={48} radius="xl" mb="md">
                  <Icon size={26} />
                </ThemeIcon>
                <Title order={3} mb={4}>
                  {c.title}
                </Title>
                <Text c="dimmed">{c.text}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>

      <Box className="surface" py={72}>
        <Container size="lg">
          <Grid gap={48}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} fz={40} mb="md">
                {a.approachTitle}
              </Title>
              <Stack>
                {a.approach.map((p) => (
                  <Text key={p} fz="lg">
                    {p}
                  </Text>
                ))}
              </Stack>
              <Title order={3} mt="xl" mb="sm">
                {a.audienceTitle}
              </Title>
              <List
                spacing={6}
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={12} />
                  </ThemeIcon>
                }
              >
                {a.audience.map((x) => (
                  <List.Item key={x}>{x}</List.Item>
                ))}
              </List>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} fz={40} mb="md">
                {a.expertiseTitle}
              </Title>
              <Stack>
                {a.expertise.map((e) => (
                  <Box key={e.title} className="card" p="md" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
                    <Title order={4} mb={2}>
                      {e.title}
                    </Title>
                    <Text c="dimmed">{e.text}</Text>
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <Title order={2} fz={40} mb="xl">
          {a.stepsTitle}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {a.steps.map((s, i) => (
            <Group key={s.title} align="flex-start" wrap="nowrap" gap="md">
              <Text fz={56} fw={600} lh={1} c="forest" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
                {i + 1}
              </Text>
              <div>
                <Title order={3} mb={2}>
                  {s.title}
                </Title>
                <Text c="dimmed">{s.text}</Text>
              </div>
            </Group>
          ))}
        </SimpleGrid>
      </Container>

      <Box className="surface" py={72}>
        <Container size="lg">
          <Title order={2} fz={40} mb="xl">
            {a.reviewsTitle}
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }}>
            {reviews.filter((r) => r.author !== 'Chris M.').slice(0, 3).map((r, n) => (
              <ReviewCard key={r.author} {...r} delay={n * 90} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
