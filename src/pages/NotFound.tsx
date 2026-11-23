import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { useI18n } from '../lib/useI18n';

export default function NotFound() {
  const { t } = useI18n();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  return (
    <Container size="sm" py={96}>
      <Stack align="flex-start">
        <Title order={1} fz={{ base: 40, md: 56 }}>
          {t.notFound.title}
        </Title>
        <Text fz="lg">{t.notFound.text}</Text>
        <Button component={Link} to="/" size="md">
          {t.notFound.cta}
        </Button>
      </Stack>
    </Container>
  );
}
