// Zentrale Einstellungen. Alles, was vor dem Launch angepasst werden muss, steht hier.
export const site = {
  name: 'Halsklar',
  claim: 'Leben mit stillem Reflux',
  description:
    'Stiller Reflux erkennen und im Alltag in den Griff bekommen: Selbsttest, Symptome, säurearme Ernährung, Schlaf und ehrliche Erfahrungen eines Betroffenen.',
  // Pseudonym, unter dem die Artikel erscheinen (z. B. „Jonas K.“). Leer = „Von einem Betroffenen“.
  // Der echte Name steht nur im Impressum, das ist in Deutschland Pflicht (§ 5 DDG).
  author: '',
  // Amazon-PartnerNet-Tag, z. B. "halsklar-21". Leer = Links ohne Tag.
  amazonTag: '',
  // Formular-Endpunkt des Newsletter-Anbieters (z. B. Brevo, MailerLite). Leer = Formular aus.
  newsletterAction: '',
};

export const nav = [
  { href: '/erkennen/', label: 'Erkennen' },
  { href: '/selbsttest/', label: 'Selbsttest' },
  { href: '/meine-geschichte/', label: 'Meine Geschichte' },
  { href: '/mein-konzept/', label: 'Mein Konzept' },
  { href: '/ernaehrung/', label: 'Ernährung' },
  { href: '/empfehlungen/', label: 'Empfehlungen' },
];

export function amazonSearch(query: string) {
  const url = new URL('https://www.amazon.de/s');
  url.searchParams.set('k', query);
  if (site.amazonTag) url.searchParams.set('tag', site.amazonTag);
  return url.toString();
}
