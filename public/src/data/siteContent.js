/* ── Asset paths ─────────────────────────────────────────────── */
const heroImage          = '/Lana Del Ray Hero image.jpg'
const featuredAlbumImage = '/Poplar Album Image.jpg'
const aboutBgImage       = '/About section bg.jpg'
const musicBgImage       = '/music bg.jpeg'
const facebookIcon       = '/social icons/Facebook.png'
const instagramIcon      = '/social icons/Instagram.png'
const twitterIcon        = '/social icons/et_twitter.png'
const linkedInIcon       = '/social icons/LinkedIn.png'

/* ── Navigation ──────────────────────────────────────────────── */
export const navItems = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  { label: 'Music',   to: '/music' },
  { label: 'Video',   to: '/video' },
  { label: 'Contact', to: '/contact' },
]

/* ── Hero ────────────────────────────────────────────────────── */
export const heroContent = {
  heroImage,
  featuredAlbumImage,
  title: 'Popular Album',
  eyebrow: 'Paradise Edition 12',
  description:
    'Listen to \u2018Paradise\u2019 available on all streaming platforms. Order the new album on vinyl and CD today!',
}

/* ── About ───────────────────────────────────────────────────── */
export const aboutContent = {
  bgImage: aboutBgImage,
  title: 'Lana Del Ray',
  tagline: 'Singer, songwriter, and poet of a lost America.',
  short:
    'Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its melancholic exploration of glamour and romance, with frequent references to pop culture and 1950s\u20131970s Americana. She is the recipient of numerous awards and nominations, and has been recognized as one of the defining songwriters of the 21st century.',
  paragraphs: [
    'Born and raised in New York, Lana Del Rey began writing at the age of eleven and started performing in clubs at eighteen. After years of developing her sound and visual aesthetic, she broke through with the viral success of her single \u201cVideo Games\u201d in 2011, followed by the critically acclaimed debut album Born to Die in 2012.',
    'Her cinematic, orchestral style draws from a wide range of influences including baroque pop, dream pop, psychedelic rock, and classic Hollywood film scores. Each album represents a distinct era: from the tragic glamour of Ultraviolence to the sun-soaked freedom of Lust for Life, and the stripped-back folk of Chemtrails Over the Country Club.',
    'Beyond music, Lana is an accomplished poet and short-film director. Her poetry collection Violet Bent Backwards Over the Grass debuted at number two on the New York Times Best Seller list. She continues to push artistic boundaries while maintaining a deeply personal connection with her audience.',
  ],
  stats: [
    { value: '9',     label: 'Studio Albums' },
    { value: '40M+',  label: 'Monthly Listeners' },
    { value: '16B+',  label: 'Total Streams' },
    { value: '6',     label: 'Grammy Nominations' },
  ],
}

/* ── Albums ───────────────────────────────────────────────────── */
export const albumCards = [
  {
    title: 'Born to Die',
    year: 2012,
    image: '/Album image 1.jpg',
    description:
      'A lush, melancholic anthem of youth, heartbreak, and doomed Hollywood dreams.',
  },
  {
    title: 'Ultraviolence',
    year: 2014,
    image: '/album image 1.png',
    description:
      'A dark, cinematic spiral through toxic love, vintage glamour, and beautiful destruction.',
  },
  {
    title: 'Honeymoon',
    year: 2015,
    image: '/Album image 2.png',
    description:
      'A languid, jazz-infused reverie drifting between old Hollywood decadence and bittersweet devotion.',
  },
  {
    title: 'Lust For Life',
    year: 2017,
    image: '/album image 3 (1).png',
    description:
      'A dreamy, hopeful journey where old-soul romance meets freedom, reflection, and reinvention.',
  },
  {
    title: 'Norman F***ing Rockwell!',
    year: 2019,
    image: '/Album image 3.png',
    description:
      'A masterful, piano-driven meditation on modern love, disillusionment, and the California dream.',
  },
  {
    title: 'Chemtrails Over the Country Club',
    year: 2021,
    image: '/Album image 2.png',
    description:
      'A pastoral, folk-tinged exploration of friendship, nostalgia, and quiet rebellion.',
  },
]

/* ── Videos ───────────────────────────────────────────────────── */
export const videoCards = [
  { title: 'Complete',            image: '/Top Video image 01.jpg', length: '4:32' },
  { title: 'Honeymoon',           image: '/Top Video image 02.jpg', length: '6:01' },
  { title: 'Say Yes To Heaven',   image: '/Top Video image 03.jpg', length: '3:30' },
  { title: 'Paradise',            image: '/Top Video image 04.jpg', length: '3:42' },
  { title: 'Young and Beautiful', image: '/Top Video image 05.jpg', length: '5:31' },
  { title: 'Summertime Sadness',  image: '/Top Video image 06.jpg', length: '4:42' },
  { title: 'West Coast',          image: '/Top Video image 07.jpg', length: '5:12' },
  { title: 'Love',                image: '/Top Video image 08.jpg', length: '5:17' },
  { title: "Doin' Time",          image: '/Top Video image 09.jpg', length: '3:54' },
]

/* ── Merch ────────────────────────────────────────────────────── */
export const merchItems = [
  { title: 'HONEYMOON: VINYL 2LP',         price: '$38.00', image: '/Merch images/Merch image 01.png' },
  { title: 'BORN TO DIE: VINYL LP',        price: '$33.00', image: '/Merch images/Merch image 02.png' },
  { title: 'Tough 7" Vinyl',               price: '$15.00', image: '/Merch images/Merch image 03.png' },
  { title: 'NORMAN ROCKWELL!',             price: '$40.00', image: '/Merch images/Merch image 04.png' },
  { title: 'Ultraviolence Standard Vinyl', price: '$33.00', image: '/Merch images/Merch image 05.png' },
  { title: 'Chemtrails Over the Country',  price: '$36.00', image: '/Merch images/Merch image 06.png' },
]

/* ── Social Links ─────────────────────────────────────────────── */
export const socialLinks = [
  { name: 'Facebook',  icon: facebookIcon,  href: 'https://facebook.com' },
  { name: 'Instagram', icon: instagramIcon,  href: 'https://instagram.com' },
  { name: 'Twitter',   icon: twitterIcon,    href: 'https://x.com' },
  { name: 'LinkedIn',  icon: linkedInIcon,   href: 'https://linkedin.com' },
]

/* ── Discography timeline (About page) ────────────────────────── */
export const discography = [
  { year: '2012', title: 'Born to Die',                        note: 'Debut major-label release. Reached #1 in eleven countries.' },
  { year: '2012', title: 'Paradise',                            note: 'Extended play. Nominated for a Grammy Award for Best Pop Vocal Album.' },
  { year: '2014', title: 'Ultraviolence',                       note: 'Second studio album. Debuted at #1 on the Billboard 200.' },
  { year: '2015', title: 'Honeymoon',                           note: 'Third studio album. A critical sleeper hit praised for its cinematic scope.' },
  { year: '2017', title: 'Lust for Life',                       note: 'Fourth studio album. Featured collaborations with The Weeknd, A$AP Rocky, and Stevie Nicks.' },
  { year: '2019', title: 'Norman F***ing Rockwell!',            note: 'Fifth studio album. Named album of the year by multiple publications.' },
  { year: '2021', title: 'Chemtrails Over the Country Club',    note: 'Sixth studio album. A folk-inspired departure exploring Americana.' },
  { year: '2021', title: 'Blue Banisters',                      note: 'Seventh studio album. A deeply personal, stripped-back collection.' },
  { year: '2023', title: 'Did You Know That There\'s a Tunnel Under Ocean Blvd', note: 'Eighth studio album. Featuring gospel-influenced, expansive arrangements.' },
]

/* ── Influences (About page) ──────────────────────────────────── */
export const influences = [
  'Elvis Presley',
  'Amy Winehouse',
  'Kurt Cobain',
  'Nancy Sinatra',
  'Bob Dylan',
  'Billie Holiday',
  'Jim Morrison',
  'Joni Mitchell',
  'Leonard Cohen',
  'Jeff Buckley',
]

/* ── Contact page ─────────────────────────────────────────────── */
export const contactContent = {
  heading: 'Get In Touch',
  intro: 'Have a question, press inquiry, or booking request? Reach out through any of the channels below.',
  inquiryTypes: ['General Inquiry', 'Press / Media', 'Booking / Events', 'Merchandise', 'Fan Mail'],
  contacts: [
    {
      desk: 'Press & Media',
      email: 'press@lanadelray.com',
      description: 'For all press inquiries, interview requests, and media accreditation.',
    },
    {
      desk: 'Booking & Events',
      email: 'booking@lanadelray.com',
      description: 'For live performances, festival appearances, and private event bookings.',
    },
    {
      desk: 'Management',
      email: 'mgmt@lanadelray.com',
      description: 'For business proposals, collaborations, and partnership inquiries.',
    },
  ],
  address: {
    line1: 'Lana Del Ray Official',
    line2: 'Los Angeles, CA',
    line3: 'United States',
  },
  hours: 'Mon \u2013 Fri, 9:00 AM \u2013 6:00 PM PST',
}

/* ── Background images (for reuse) ────────────────────────────── */
export const bgImages = {
  about: aboutBgImage,
  music: musicBgImage,
  hero: heroImage,
}
