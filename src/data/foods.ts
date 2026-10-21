// Ungefähre pH-Werte nach der Lebensmittelliste der US-Lebensmittelbehörde FDA
// ("Approximate pH of Foods and Food Products"). Werte schwanken nach Sorte, Reife und Zubereitung.
export type Food = {
  name: string;
  group: 'Obst' | 'Gemüse' | 'Getreide' | 'Eiweiß' | 'Milch' | 'Getränk' | 'Würze';
  ph: [number, number];
  trigger?: string;
  hero?: 'top' | 'bottom';
  heroMobile?: boolean;
};

export const foods: Food[] = [
  { name: 'Zitronensaft', group: 'Obst', ph: [2.0, 2.6], hero: 'top', heroMobile: true },
  { name: 'Cola', group: 'Getränk', ph: [2.4, 2.6], trigger: 'Kohlensäure und Koffein', hero: 'bottom' },
  { name: 'Essig', group: 'Würze', ph: [2.4, 3.4] },
  { name: 'Erdbeeren', group: 'Obst', ph: [3.0, 3.9] },
  { name: 'Wein', group: 'Getränk', ph: [3.0, 3.8], trigger: 'Alkohol entspannt den Schließmuskel' },
  { name: 'Ananas', group: 'Obst', ph: [3.2, 4.0] },
  { name: 'Apfel', group: 'Obst', ph: [3.3, 3.9], hero: 'top' },
  { name: 'Orangensaft', group: 'Getränk', ph: [3.3, 4.2] },
  { name: 'Sauerkraut', group: 'Gemüse', ph: [3.4, 3.6] },
  { name: 'Ketchup', group: 'Würze', ph: [3.5, 3.9] },
  { name: 'Joghurt', group: 'Milch', ph: [4.0, 4.6] },
  { name: 'Bier', group: 'Getränk', ph: [4.0, 5.0], trigger: 'Alkohol und Kohlensäure' },
  { name: 'Tomate', group: 'Gemüse', ph: [4.3, 4.9], hero: 'bottom', heroMobile: true },
  { name: 'Banane', group: 'Obst', ph: [4.5, 5.2] },
  { name: 'Kaffee', group: 'Getränk', ph: [4.9, 5.2], trigger: 'Koffein', hero: 'top' },
  { name: 'Brot', group: 'Getreide', ph: [5.0, 6.2] },
  { name: 'Gurke', group: 'Gemüse', ph: [5.1, 5.7], hero: 'bottom' },
  { name: 'Wassermelone', group: 'Obst', ph: [5.2, 5.8] },
  { name: 'Zwiebel', group: 'Gemüse', ph: [5.3, 5.8], trigger: 'roh oft schlecht verträglich' },
  { name: 'Kartoffel', group: 'Gemüse', ph: [5.4, 6.1] },
  { name: 'Zucchini', group: 'Gemüse', ph: [5.8, 6.1] },
  { name: 'Karotte', group: 'Gemüse', ph: [5.9, 6.3], hero: 'top', heroMobile: true },
  { name: 'Mais', group: 'Gemüse', ph: [5.9, 7.3] },
  { name: 'Reis, gekocht', group: 'Getreide', ph: [6.0, 6.7] },
  { name: 'Spargel', group: 'Gemüse', ph: [6.0, 6.7] },
  { name: 'Honigmelone', group: 'Obst', ph: [6.0, 6.7] },
  { name: 'Weißfisch', group: 'Eiweiß', ph: [6.0, 7.0] },
  { name: 'Haferbrei', group: 'Getreide', ph: [6.2, 6.6], hero: 'bottom' },
  { name: 'Brokkoli', group: 'Gemüse', ph: [6.3, 6.5] },
  { name: 'Avocado', group: 'Obst', ph: [6.3, 6.6], trigger: 'fettreich, in großen Mengen' },
  { name: 'Milch', group: 'Milch', ph: [6.4, 6.8], trigger: 'Vollfett kann belasten, fettarm wählen' },
  { name: 'Hähnchenbrust', group: 'Eiweiß', ph: [6.5, 6.7] },
  { name: 'Tofu', group: 'Eiweiß', ph: [7.0, 7.4], hero: 'top' },
  { name: 'Hühnerei', group: 'Eiweiß', ph: [7.0, 8.0], hero: 'bottom', heroMobile: true },
];

export const PH_MIN = 2;
export const PH_MAX = 9;

export function pos(ph: number) {
  return ((ph - PH_MIN) / (PH_MAX - PH_MIN)) * 100;
}

export function mid(f: Food) {
  return (f.ph[0] + f.ph[1]) / 2;
}

export type Verdict = 'sauer' | 'grenzwertig' | 'saeurearm';

export function verdict(f: Food): Verdict {
  if (mid(f) < 4) return 'sauer';
  if (f.ph[0] < 5) return 'grenzwertig';
  return 'saeurearm';
}

export const verdictLabel: Record<Verdict, string> = {
  sauer: 'Sauer',
  grenzwertig: 'Grenzwertig',
  saeurearm: 'Säurearm',
};

export function formatPh([lo, hi]: [number, number]) {
  const f = (n: number) => n.toLocaleString('de-DE', { minimumFractionDigits: 1 });
  return lo === hi ? f(lo) : `${f(lo)}–${f(hi)}`;
}
