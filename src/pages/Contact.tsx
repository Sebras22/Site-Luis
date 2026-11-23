import { Box, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCalendarEvent, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import BookingForm from '../components/BookingForm';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from '../lib/dictionaries';
import { useI18n } from '../lib/useI18n';

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  const info = [
    { icon: IconMail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: IconPhone, label: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_HREF}` },
    { icon: IconMapPin, label: c.where },
    { icon: IconCalendarEvent, label: c.when },
  ];

  return (
    <>
      <Box className="hero" py={{ base: 48, md: 80 }}>
        <Container size="lg">
          <Title order={1} fz={{ base: 40, md: 64 }} lh={1.05} mb="md">
            {c.title}
          </Title>
          <Text fz="xl" maw={640} style={{ opacity: 0.92 }}>
            {c.lead}
          </Text>
        </Container>
      </Box>

      <Container size="lg" py={72}>
        <Grid gap={48}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <BookingForm />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box className="card" p="lg" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
              <Title order={3} mb="md">
                {c.infoTitle}
              </Title>
              <Stack gap="md">
                {info.map(({ icon: Icon, label, href }) => (
                  <Group key={label} wrap="nowrap" gap="sm">
                    <ThemeIcon variant="light" size={36} radius="xl">
                      <Icon size={18} />
                    </ThemeIcon>
                    {href ? (
                      <a href={href} style={{ color: 'inherit' }}>
                        {label}
                      </a>
                    ) : (
                      <Text>{label}</Text>
                    )}
                  </Group>
                ))}
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
