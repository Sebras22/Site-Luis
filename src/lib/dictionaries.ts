// Textes repris du site actuel (apexguide.eu) ; les passages marqués TODO sont à compléter par Luis.
export const CONTACT_EMAIL = 'contact@apexguide.eu';
export const CONTACT_PHONE = '+33 06 06 06 07'; // TODO: vérifier le numéro réel
export const CONTACT_PHONE_HREF = '+330606060607';

export type TourId = 'hike' | 'museum' | 'walk' | 'bike';

// Les avis restent dans la langue d'origine des clients.
export const reviews: { author: string; tour: TourId; text: string }[] = [
  { author: 'Amélie B.', tour: 'hike', text: 'Je conseille la journée randonnée-visite à Fontainebleau !' },
  { author: 'Anton M.', tour: 'walk', text: "J'ai redécouvert Paris ! Je recommande." },
  { author: 'Camelia I.', tour: 'bike', text: 'Belle promenade commentée au Havre.' },
  { author: 'Chris M.', tour: 'walk', text: 'Highly recommended !' },
  { author: 'Enzo L.', tour: 'walk', text: 'Explications simples et anecdotes fascinantes. Je recommande vivement.' },
];

export const tourImages: Record<TourId, string> = {
  hike: '/images/etretat.jpg',
  museum: '/images/jacquemart.jpg',
  walk: '/images/pompidou.jpg',
  bike: '/images/havre.jpg',
};

export const fr = {
  meta: { title: 'Apex Guide, visites guidées par Luis Muresan' },
  nav: { home: 'Accueil', about: 'À propos', services: 'Prestations', reviews: 'Avis', contact: 'Contact', book: 'Réserver' },
  common: { colorScheme: 'Changer de thème', menu: 'Menu', skip: 'Aller au contenu', more: 'En savoir plus' },
  home: {
    eyebrow: 'Guide certifié',
    title: 'Apex Guide par Luis Muresan',
    lead: "Passionné par la grande Histoire comme par les anecdotes les plus secrètes, je vous invite à porter un nouveau regard sur l'art, le patrimoine et la ville.",
    ctaReviews: 'Les avis',
    ctaBook: 'Réserver',
    ctaWork: "L'œuvre de la semaine",
    servicesTitle: 'Nos visites',
    servicesLead: 'En ville, dans les musées ou en pleine nature : choisissez votre façon de voyager dans le temps.',
    workLabel: "L'œuvre de la semaine",
    workTitle: 'Le Centre Pompidou de Renzo Piano et Richard Rogers',
    workQuote: 'Au cœur donc de Paris, un cœur : un muscle, une pompe aspirante et refoulante…',
    workQuoteAuthor: 'Francis Ponge',
    workText: "L'établissement ferme pour cinq ans de travaux ; sa collection se disperse dans d'autres lieux culturels.",
    reviewsTitle: 'Ils ont suivi le guide',
    reviewsAll: 'Voir tous les avis',
    aboutTitle: 'Votre guide',
    aboutText: "Diplômé d'un Master en Histoire et guide-conférencier certifié, Luis vous fait découvrir quartiers historiques, musées et chefs-d'œuvre.",
    aboutCta: 'Faire connaissance',
    bandTitle: 'Une visite en tête ? Réservez toute l’année.',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Luis Muresan',
    role: "Fondateur d'Apex Guide · Guide-conférencier certifié",
    quote: "Passionné par la grande Histoire comme par les anecdotes les plus secrètes, je vous invite à porter un nouveau regard sur l'art, le patrimoine et la ville.",
    photoAlt: 'Portrait de Luis Muresan assis dans un jardin',
    credentials: [
      { title: 'Master en Histoire', text: "Une formation universitaire pour donner du fond à chaque visite." },
      { title: 'Guide-conférencier certifié', text: 'Une qualification officielle pour conduire des visites dans les musées et monuments.' },
      { title: 'Dans toute la France', text: 'Paris, Le Havre, Fontainebleau, la côte normande : des visites toute l’année.' },
    ],
    expertiseTitle: 'Domaines de compétence',
    expertise: [
      { title: 'Quartiers historiques parisiens', text: 'Lire la ville dans ses rues, ses façades et ses histoires oubliées.' },
      { title: 'Musées et monuments majeurs', text: 'Aller à la rencontre des collections permanentes et des expositions temporaires.' },
      { title: "Décryptage des chefs-d'œuvre", text: 'Comprendre ce que l’on regarde : contexte, auteur, symboles, anecdotes.' },
    ],
    approachTitle: 'Ma façon de guider',
    approach: [
      "Mes visites mêlent la grande Histoire et les anecdotes les plus secrètes : des explications simples, vivantes, accessibles à tous.",
      "Elles sont proposées sur mesure pour les familles, les groupes scolaires ou les collectifs professionnels, en intérieur comme en extérieur.",
    ],
    audienceTitle: 'Pour qui ?',
    audience: ['Familles et amis', 'Groupes scolaires', 'Collectifs professionnels', 'Voyageurs curieux'],
    stepsTitle: 'Comment ça se passe',
    steps: [
      { title: 'On échange', text: 'Vous me dites vos envies, votre groupe, vos dates.' },
      { title: 'Je prépare le parcours', text: 'Un itinéraire sur mesure, en ville, au musée ou en forêt.' },
      { title: 'Rendez-vous sur place', text: 'Je vous guide, vous profitez.' },
    ],
    reviewsTitle: 'Ce que disent mes visiteurs',
    cta: 'Réserver une visite',
  },
  services: {
    eyebrow: 'Prestations',
    title: 'Des visites pour chaque envie',
    lead: 'À pied, à vélo, au musée ou en randonnée, pour les particuliers comme pour les groupes.',
    custom: 'Visite sur mesure pour familles, groupes scolaires et collectifs professionnels.',
    items: [
      { id: 'hike' as TourId, title: 'Visites randonnée', place: 'Fontainebleau, Étretat', text: 'Entre ville et nature, chaussez vos chaussures de randonnée et suivez le guide !' },
      { id: 'museum' as TourId, title: 'Visites de musées', place: 'Paris', text: 'Aller à la rencontre des collections permanentes et des expositions temporaires.' },
      { id: 'walk' as TourId, title: 'Visites à pied', place: 'Paris, quartiers historiques', text: "Redécouvrez la ville à pied : grande Histoire, anecdotes secrètes, monuments et chefs-d'œuvre." },
      { id: 'bike' as TourId, title: 'Visites à vélo', place: 'Paris, Le Havre', text: 'Découvrez les rues et le patrimoine autrement.' },
    ],
    discover: 'Réserver cette visite',
    ctaTitle: 'Une autre idée de parcours ?',
    ctaText: 'Chaque visite peut être adaptée à votre groupe, à vos centres d’intérêt et à votre rythme.',
  },
  reviews: {
    eyebrow: 'Avis',
    title: 'Ils ont suivi le guide',
    lead: 'Les retours de visiteurs ayant participé à une visite.',
    all: 'Tous',
    empty: 'Pas encore d’avis pour cette catégorie.',
    cta: 'Réserver une visite',
  },
  contact: {
    title: 'Contact & réservation',
    lead: 'Des visites dans toute la France, réservez toute l’année.',
    infoTitle: 'Coordonnées',
    where: 'Des visites dans toute la France',
    when: 'Réservez toute l’année',
    form: {
      name: 'Prénom et Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      tour: 'Type de visite',
      tourPlaceholder: 'Non précisé',
      date: 'Date souhaitée (facultatif)',
      people: 'Nombre de personnes',
      message: 'Message',
      send: 'Envoyer la demande',
      required: 'Champ requis',
      invalidEmail: 'E-mail invalide',
      success: 'Votre demande a bien été envoyée. Luis vous répondra rapidement.',
      error: 'L’envoi a échoué. Réessayez ou écrivez directement à',
    },
  },
  legal: {
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    lead: 'Qui édite ce site, comment sont traitées vos données et ce que vous pouvez en faire.',
    todo: 'À compléter',
    sections: [
      {
        title: 'Éditeur du site',
        items: [
          { label: 'Nom commercial', value: 'Apex Guide' },
          { label: 'Responsable de la publication', value: 'Luis Muresan, guide-conférencier indépendant' },
          { label: 'Statut juridique', value: null },
          { label: 'SIRET', value: null },
          { label: 'Adresse', value: null },
          { label: 'E-mail', value: CONTACT_EMAIL },
          { label: 'Téléphone', value: CONTACT_PHONE },
        ],
      },
      {
        title: 'Hébergement',
        items: [
          { label: 'Hébergeur', value: null },
          { label: 'Adresse', value: null },
        ],
      },
      {
        title: 'Propriété intellectuelle',
        paragraphs: [
          'Les textes, photographies et éléments graphiques de ce site sont la propriété d’Apex Guide, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.',
        ],
      },
      {
        title: 'Données personnelles',
        paragraphs: [
          'Le formulaire de contact collecte votre nom, votre adresse e-mail, votre numéro de téléphone et le contenu de votre message. Ces informations servent uniquement à répondre à votre demande de visite et ne sont ni vendues ni utilisées à d’autres fins.',
          'Le message est transmis par e-mail à Apex Guide au moyen du service Web3Forms, qui agit comme sous-traitant technique pour l’acheminement. Aucune copie n’est conservée sur ce site.',
          `Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition. Pour l’exercer, écrivez à ${CONTACT_EMAIL}. Vous pouvez aussi saisir la CNIL (cnil.fr).`,
        ],
      },
      {
        title: 'Cookies et stockage local',
        paragraphs: [
          'Ce site ne dépose aucun cookie de mesure d’audience ni de publicité. Votre navigateur conserve seulement vos préférences d’affichage (langue et thème), qui ne quittent pas votre appareil.',
          'Les polices de caractères sont chargées depuis Google Fonts, ce qui transmet votre adresse IP à Google lors de l’affichage des pages.',
        ],
      },
      {
        title: 'Responsabilité',
        paragraphs: [
          'Apex Guide s’efforce de maintenir des informations exactes et à jour, sans pouvoir garantir l’absence d’erreur. Les descriptions de visites sont indicatives et peuvent évoluer selon les lieux, la saison et les conditions d’accès. Apex Guide ne saurait être tenu responsable du contenu des sites tiers vers lesquels ce site pourrait renvoyer.',
        ],
      },
    ],
  },
  notFound: { title: 'Page introuvable', text: "Cette page n'existe pas ou a été déplacée.", cta: "Retour à l'accueil" },
  footer: { tagline: 'Guide certifié · Visites dans toute la France', legal: 'Mentions légales', rights: 'Tous droits réservés' },
};

export type Dictionary = typeof fr;

export const en: Dictionary = {
  meta: { title: 'Apex Guide, guided tours by Luis Muresan' },
  nav: { home: 'Home', about: 'About', services: 'Tours', reviews: 'Reviews', contact: 'Contact', book: 'Book' },
  common: { colorScheme: 'Toggle theme', menu: 'Menu', skip: 'Skip to content', more: 'Learn more' },
  home: {
    eyebrow: 'Certified guide',
    title: 'Apex Guide by Luis Muresan',
    lead: 'Passionate about great History and its most secret anecdotes, I invite you to take a new look at art, heritage and the city.',
    ctaReviews: 'Reviews',
    ctaBook: 'Book',
    ctaWork: 'Artwork of the week',
    servicesTitle: 'Our tours',
    servicesLead: 'In the city, in museums or out in nature: choose your way of travelling through time.',
    workLabel: 'Artwork of the week',
    workTitle: 'The Centre Pompidou by Renzo Piano and Richard Rogers',
    workQuote: 'At the heart of Paris, then, a heart: a muscle, a pump that draws in and pushes out…',
    workQuoteAuthor: 'Francis Ponge',
    workText: 'The institution is closing for five years of works; its collection is spread across other cultural venues.',
    reviewsTitle: 'They followed the guide',
    reviewsAll: 'See all reviews',
    aboutTitle: 'Your guide',
    aboutText: 'With a Master’s degree in History and a certified guide-lecturer, Luis introduces you to historic neighbourhoods, museums and masterpieces.',
    aboutCta: 'Get to know me',
    bandTitle: 'A tour in mind? Book all year round.',
  },
  about: {
    eyebrow: 'About',
    title: 'Luis Muresan',
    role: 'Founder of Apex Guide · Certified guide-lecturer',
    quote: 'Passionate about great History and its most secret anecdotes, I invite you to take a new look at art, heritage and the city.',
    photoAlt: 'Portrait of Luis Muresan sitting in a garden',
    credentials: [
      { title: 'Master’s in History', text: 'A university background to give substance to every tour.' },
      { title: 'Certified guide-lecturer', text: 'An official qualification to lead tours in museums and monuments.' },
      { title: 'All across France', text: 'Paris, Le Havre, Fontainebleau, the Normandy coast: tours all year round.' },
    ],
    expertiseTitle: 'Areas of expertise',
    expertise: [
      { title: 'Historic Parisian neighbourhoods', text: 'Reading the city through its streets, façades and forgotten stories.' },
      { title: 'Major museums and monuments', text: 'Meeting permanent collections and temporary exhibitions.' },
      { title: 'Decoding masterpieces', text: 'Understanding what you are looking at: context, artist, symbols, anecdotes.' },
    ],
    approachTitle: 'How I guide',
    approach: [
      'My tours blend great History with the most secret anecdotes: simple, lively explanations accessible to everyone.',
      'They are tailor-made for families, school groups or professional groups, indoors and outdoors.',
    ],
    audienceTitle: 'Who for?',
    audience: ['Families and friends', 'School groups', 'Professional groups', 'Curious travellers'],
    stepsTitle: 'How it works',
    steps: [
      { title: 'We talk', text: 'Tell me what you want, your group, your dates.' },
      { title: 'I prepare the route', text: 'A tailor-made itinerary, in the city, a museum or the forest.' },
      { title: 'Meet on site', text: 'I guide, you enjoy.' },
    ],
    reviewsTitle: 'What my visitors say',
    cta: 'Book a tour',
  },
  services: {
    eyebrow: 'Tours',
    title: 'A tour for every wish',
    lead: 'On foot, by bike, in a museum or on a hike, for individuals and groups alike.',
    custom: 'Tailor-made tours for families, school groups and professional groups.',
    items: [
      { id: 'hike', title: 'Hike & visit', place: 'Fontainebleau, Étretat', text: 'Between city and nature, put on your hiking shoes and follow the guide!' },
      { id: 'museum', title: 'Museum tours', place: 'Paris', text: 'Meet the permanent collections and the temporary exhibitions.' },
      { id: 'walk', title: 'Walking tours', place: 'Paris, historic neighbourhoods', text: 'Rediscover the city on foot: great History, secret anecdotes, monuments and masterpieces.' },
      { id: 'bike', title: 'Cycling tours', place: 'Paris, Le Havre', text: 'Discover the streets and heritage in a different way.' },
    ],
    discover: 'Book this tour',
    ctaTitle: 'Another route in mind?',
    ctaText: 'Every tour can be adapted to your group, your interests and your pace.',
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'They followed the guide',
    lead: 'Feedback from visitors who took part in a tour.',
    all: 'All',
    empty: 'No reviews in this category yet.',
    cta: 'Book a tour',
  },
  contact: {
    title: 'Contact & booking',
    lead: 'Tours all across France, book all year round.',
    infoTitle: 'Details',
    where: 'Tours all across France',
    when: 'Book all year round',
    form: {
      name: 'First and last name',
      email: 'Email',
      phone: 'Phone',
      tour: 'Type of tour',
      tourPlaceholder: 'Not specified',
      date: 'Preferred date (optional)',
      people: 'Number of people',
      message: 'Message',
      send: 'Send request',
      required: 'Required',
      invalidEmail: 'Invalid email',
      success: 'Your request has been sent. Luis will get back to you shortly.',
      error: 'Sending failed. Please try again or write directly to',
    },
  },
  legal: {
    eyebrow: 'Legal information',
    title: 'Legal notice',
    lead: 'Who publishes this site, how your data is handled and what you can do with it.',
    todo: 'To be completed',
    sections: [
      {
        title: 'Site publisher',
        items: [
          { label: 'Trade name', value: 'Apex Guide' },
          { label: 'Publication manager', value: 'Luis Muresan, independent guide-lecturer' },
          { label: 'Legal status', value: null },
          { label: 'Company ID (SIRET)', value: null },
          { label: 'Address', value: null },
          { label: 'Email', value: CONTACT_EMAIL },
          { label: 'Phone', value: CONTACT_PHONE },
        ],
      },
      {
        title: 'Hosting',
        items: [
          { label: 'Host', value: null },
          { label: 'Address', value: null },
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'Unless stated otherwise, the texts, photographs and graphic elements of this site belong to Apex Guide. Any reproduction, representation or distribution, in whole or in part, without prior written permission is prohibited.',
        ],
      },
      {
        title: 'Personal data',
        paragraphs: [
          'The contact form collects your name, email address, phone number and the content of your message. This information is used only to answer your tour request and is neither sold nor used for any other purpose.',
          'The message is sent by email to Apex Guide through the Web3Forms service, which acts as a technical processor for delivery. No copy is kept on this site.',
          `Under the GDPR, you have the right to access, rectify, erase and object to the use of your data. To exercise these rights, write to ${CONTACT_EMAIL}. You may also contact the CNIL (cnil.fr).`,
        ],
      },
      {
        title: 'Cookies and local storage',
        paragraphs: [
          'This site sets no analytics or advertising cookies. Your browser only keeps your display preferences (language and theme), which never leave your device.',
          'Fonts are loaded from Google Fonts, which sends your IP address to Google when pages are displayed.',
        ],
      },
      {
        title: 'Liability',
        paragraphs: [
          'Apex Guide strives to keep information accurate and up to date but cannot guarantee it is error-free. Tour descriptions are indicative and may change depending on places, season and access conditions. Apex Guide cannot be held responsible for the content of third-party sites this site may link to.',
        ],
      },
    ],
  },
  notFound: { title: 'Page not found', text: 'This page does not exist or has been moved.', cta: 'Back to home' },
  footer: { tagline: 'Certified guide · Tours all across France', legal: 'Legal notice', rights: 'All rights reserved' },
};
