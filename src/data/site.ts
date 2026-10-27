// Dados de contato — PLACEHOLDER: trocar pelo número/e-mail reais do clube.
const WHATSAPP_NUMBER = '5579900000000'

export const site = {
  name: 'CONTRAPONTO',
  tagline: 'Clube de cultura e ideias',
  city: 'Aracaju, SE',
  email: 'ola@contraponto.club',
  instagram: 'https://instagram.com/contraponto',
  whatsapp: (message = 'Olá! Quero saber mais sobre o CONTRAPONTO.') =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
}

export const nav = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Participe', href: '#participe' },
  { label: 'Dúvidas', href: '#duvidas' },
]
