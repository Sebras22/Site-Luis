import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, NumberInput, Select, Stack, Textarea, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { CONTACT_EMAIL } from '../lib/dictionaries';
import { useI18n } from '../lib/useI18n';
import 'dayjs/locale/fr';
import 'dayjs/locale/en';

interface Values {
  name: string;
  email: string;
  phone: string;
  tour: string | null;
  date: string | null;
  people: number | string;
  message: string;
}

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

async function sendBooking(v: Values, tourLabel: string | undefined, honeypot: string) {
  if (!ACCESS_KEY) throw new Error('VITE_WEB3FORMS_KEY manquante');
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Demande de réservation${tourLabel ? ` - ${tourLabel}` : ''}`,
      from_name: 'Site Apex Guide',
      name: v.name,
      email: v.email,
      phone: v.phone,
      tour: tourLabel ?? '',
      date: v.date ?? '',
      people: v.people,
      message: v.message,
      botcheck: honeypot,
    }),
  });
  const data = (await response.json()) as { success: boolean };
  if (!response.ok || !data.success) throw new Error('Envoi refusé');
}

export default function BookingForm() {
  const { t, lang } = useI18n();
  const [params] = useSearchParams();
  const f = t.contact.form;
  const [today] = useState(() => new Date());
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const tourOptions = t.services.items.map((i) => ({ value: i.id, label: i.title }));
  const initialTour = tourOptions.some((o) => o.value === params.get('tour')) ? params.get('tour') : null;

  const form = useForm<Values>({
    initialValues: { name: '', email: '', phone: '', tour: initialTour, date: null, people: 2, message: '' },
    validate: {
      name: (v) => (v.trim() ? null : f.required),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : f.invalidEmail),
      phone: (v) => (v.trim() ? null : f.required),
      message: (v) => (v.trim() ? null : f.required),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setSending(true);
        try {
          await sendBooking(values, tourOptions.find((o) => o.value === values.tour)?.label, honeypot);
          notifications.show({ message: f.success, color: 'green' });
          form.reset();
        } catch {
          notifications.show({ message: `${f.error} ${CONTACT_EMAIL}`, color: 'red', autoClose: 10000 });
        } finally {
          setSending(false);
        }
      })}
    >
      <Stack>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          checked={honeypot !== ''}
          onChange={(e) => setHoneypot(e.target.checked ? 'on' : '')}
          style={{ display: 'none' }}
        />
        <TextInput label={f.name} autoComplete="name" withAsterisk {...form.getInputProps('name')} />
        <TextInput label={f.email} type="email" autoComplete="email" withAsterisk {...form.getInputProps('email')} />
        <TextInput label={f.phone} type="tel" autoComplete="tel" withAsterisk {...form.getInputProps('phone')} />
        <Select label={f.tour} placeholder={f.tourPlaceholder} data={tourOptions} clearable {...form.getInputProps('tour')} />
        <DateInput label={f.date} locale={lang} minDate={today} clearable valueFormat="DD/MM/YYYY" {...form.getInputProps('date')} />
        <NumberInput label={f.people} min={1} max={50} {...form.getInputProps('people')} />
        <Textarea label={f.message} minRows={4} autosize withAsterisk {...form.getInputProps('message')} />
        <Button type="submit" size="md" loading={sending}>
          {f.send}
        </Button>
      </Stack>
    </form>
  );
}
