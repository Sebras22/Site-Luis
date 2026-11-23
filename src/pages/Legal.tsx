import { Badge, Box, Container, Divider, Stack, Text, Title } from '@mantine/core';
import Reveal from '../components/Reveal';
import { useI18n } from '../lib/useI18n';

export default function Legal() {
  const { t } = useI18n();
  const l = t.legal;

  return (
    <>
      <Box className="hero" py={{ base: 48, md: 80 }}>
        <Container size="lg">
          <Text tt="uppercase" fw={600} fz="sm" mb="xs" style={{ letterSpacing: 3, opacity: 0.85 }}>
            {l.eyebrow}
          </Text>
          <Title order={1} fz={{ base: 40, md: 64 }} lh={1.05} mb="md">
            {l.title}
          </Title>
          <Text fz="xl" maw={640} style={{ opacity: 0.92 }}>
            {l.lead}
          </Text>
        </Container>
      </Box>

      <Container size="sm" py={72}>
        <Stack gap={48}>
          {l.sections.map((section) => (
            <Reveal key={section.title}>
              <Title order={2} fz={28} mb="sm">
                {section.title}
              </Title>
              <Divider mb="md" />
              {section.items && (
                <Stack gap="xs">
                  {section.items.map((item) => (
                    <Box key={item.label} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'baseline' }}>
                      <Text fw={600} style={{ minWidth: 220 }}>
                        {item.label}
                      </Text>
                      {item.value ? (
                        <Text>{item.value}</Text>
                      ) : (
                        <Badge variant="light" color="orange">
                          {l.todo}
                        </Badge>
                      )}
                    </Box>
                  ))}
                </Stack>
              )}
              {section.paragraphs && (
                <Stack gap="sm">
                  {section.paragraphs.map((p) => (
                    <Text key={p}>{p}</Text>
                  ))}
                </Stack>
              )}
            </Reveal>
          ))}
        </Stack>
      </Container>
    </>
  );
}
