import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMail, IconMoon, IconPhone, IconSun } from '@tabler/icons-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from '../lib/dictionaries';
import type { Lang } from '../lib/i18nContext';
import { useI18n } from '../lib/useI18n';

const CURRENT_YEAR = new Date().getFullYear();

function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Apex Guide">
      <span className="wordmark-logo" aria-hidden="true" />
    </Link>
  );
}

export default function Layout() {
  const { t, lang, setLang } = useI18n();
  const { setColorScheme } = useMantineColorScheme();
  const scheme = useComputedColorScheme('light');
  const [opened, { toggle, close }] = useDisclosure(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    close();
  }, [pathname, close]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/avis', label: t.nav.reviews },
    { to: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const pages: Record<string, string> = {
      '/about': t.nav.about,
      '/services': t.nav.services,
      '/avis': t.nav.reviews,
      '/contact': t.nav.contact,
      '/mentions-legales': t.legal.title,
    };
    const page = pages[pathname];
    document.title = page ? `${page} · Apex Guide` : t.meta.title;
  }, [pathname, t]);

  const langSwitch = (
    <SegmentedControl
      size="xs"
      value={lang}
      onChange={(v) => setLang(v as Lang)}
      data={[
        { label: 'FR', value: 'fr' },
        { label: 'EN', value: 'en' },
      ]}
      aria-label="Language"
    />
  );

  const schemeToggle = (
    <ActionIcon
      variant="default"
      size="lg"
      onClick={() => setColorScheme(scheme === 'dark' ? 'light' : 'dark')}
      aria-label={t.common.colorScheme}
    >
      {scheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  );

  return (
    <AppShell header={{ height: 72 }} padding={0}>
      <a
        href="#main"
        style={{ position: 'absolute', left: -9999, zIndex: 1000 }}
        onFocus={(e) => (e.currentTarget.style.left = '8px')}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
      >
        {t.common.skip}
      </a>

      <AppShell.Header style={{ background: 'var(--mantine-color-body)', borderBottom: '1px solid var(--site-border)' }}>
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between" wrap="nowrap">
            <Wordmark />
            <Group gap="xl" visibleFrom="md" wrap="nowrap">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className="nav-link"
                  style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, paddingBlock: 4 }}
                >
                  {l.label}
                </NavLink>
              ))}
              <Button component={Link} to="/contact">
                {t.nav.book}
              </Button>
              {langSwitch}
              {schemeToggle}
            </Group>
            <Group gap="xs" hiddenFrom="md" wrap="nowrap">
              {schemeToggle}
              <Burger opened={opened} onClick={toggle} aria-label={t.common.menu} />
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <Drawer opened={opened} onClose={close} position="right" size="xs" title="APEX GUIDE">
        <Stack>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="nav-link"
              style={{ color: 'inherit', textDecoration: 'none', fontSize: 20, paddingBlock: 4, width: 'fit-content' }}
            >
              {l.label}
            </NavLink>
          ))}
          <Button component={Link} to="/contact">
            {t.nav.book}
          </Button>
          {langSwitch}
        </Stack>
      </Drawer>

      <AppShell.Main id="main">
        <div key={pathname} className="page-fade">
          <Outlet />
        </div>
        <footer className="hero">
          <Container size="lg" py="xl">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
              <Stack gap="xs" align="flex-start">
                <Wordmark />
                <Text size="sm" style={{ opacity: 0.85 }}>
                  {t.footer.tagline}
                </Text>
              </Stack>
              <Stack gap={6}>
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'inherit' }}>
                  <Group gap={8} wrap="nowrap">
                    <IconMail size={16} /> {CONTACT_EMAIL}
                  </Group>
                </a>
                <a href={`tel:${CONTACT_PHONE_HREF}`} style={{ color: 'inherit' }}>
                  <Group gap={8} wrap="nowrap">
                    <IconPhone size={16} /> {CONTACT_PHONE}
                  </Group>
                </a>
              </Stack>
              <Stack gap={6}>
                <Link to="/mentions-legales" style={{ color: 'inherit' }}>
                  {t.footer.legal}
                </Link>
                <Text size="sm" style={{ opacity: 0.85 }}>
                  ©{CURRENT_YEAR} Apex Guide · {t.footer.rights}
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>
        </footer>
      </AppShell.Main>
    </AppShell>
  );
}
