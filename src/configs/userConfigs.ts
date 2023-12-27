import { assets } from '../assets';

export const userConfigs = {
  name: 'Ciel',
  usernames: ['ciel_sachen', 'manacchi'],
  socials: {
    github: 'https://github.com/Manacchi/',
    instagram: 'https://instagram.com/ciel_sachen/',
    spotify: 'https://open.spotify.com/user/fzxyoq7x52v1i5om3rrrn7nw2?si=1a12e87d049e4c8a',
    youtube: 'https://youtube.com/@ciel_sachen/',
  },
  schools: [{
    name: 'Casa Real Montessori Inc.',
    location: 'Parkplace Avenue, The Parkplace Village, Anabu I-D, Imus, Cavite, Philippines',
    grades: 'Kindergarten\nElementary (Gr. 1 - 6)',
    duration: '2011 - 2018',
    images: {
      seal: assets.images.crmiSeal,
      campus: assets.images.crmiCampus,
    },
  }, {
    name: 'De La Salle Santiago Zobel School - Vermosa',
    location: 'Archers Road, Vermosa, Pasong Buaya II, Imus, Cavite, Philippines',
    grades: 'Junior Highschool (Gr. 7 - 10)\nSenior Highschool (Gr. 11 - 12)',
    duration: '2018 - 2024',
    images: {
      seal: assets.images.dlszSeal,
      campus: assets.images.dlszvCampus,
    },
  }],
  projects: [{
    title: 'Estelle',
    description: 'A Discord bot I develop for myself when I\'m bored!',
    image: assets.images.estelleDiscordAvatar,
    languageIcon: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png',
    link: 'https://github.com/Manacchi/Estelle/',
  }, {
    title: 'Auxiliaries',
    description: 'A basic mod that adds new building blocks and items.',
    image: assets.images.auxiliariesBanner,
    languageIcon: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png',
    link: 'https://github.com/Manacchi/Auxiliaries/',
  }],
};
