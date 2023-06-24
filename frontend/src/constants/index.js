import inter from '../images/inter.png';
import sec from '../images/security.png';
import scale from '../images/scalability.png';
import smart from '../images/smart.png';
import insta from '../images/instagram.png';
import face from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

export const SOCIAL = [
  { id: '1', img: insta },
  { id: '2', img: face },
  { id: '3', img: twitter },
  { id: '4', img: linkedin },
];

export const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0',
  },
  headers: {
    'X-RapidAPI-Key': '9a23f3e1eamsh898fb91ca932343p1a694ejsnd08729966739',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  },
};
export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'market',
    title: 'Market',
  },
  {
    id: 'about',
    title: 'About',
  },
];
export const LINKS = [
  {
    id: '1',
    title: 'Usefull Links',
    details: [
      { id: '1', detail: 'Content' },
      { id: '2', detail: 'How it Works' },
      { id: '3', detail: 'Create' },
      { id: '4', detail: 'Explore' },
      { id: '5', detail: 'Terms & Services' },
    ],
  },
  {
    id: '2',
    title: 'Community',
    details: [
      { id: '1', detail: 'Help Center' },
      { id: '2', detail: 'Partners' },
      { id: '3', detail: 'Suggestions' },
      { id: '4', detail: 'Blog' },
      { id: '5', detail: 'Newsletters' },
    ],
  },
  {
    id: '3',
    title: 'Partner',
    details: [
      { id: '1', detail: 'Our Partners' },
      { id: '2', detail: 'Become a partner' },
    ],
  },
];

export const ABOUT = [
  {
    id: '1',
    img: inter,
    title: 'Interoperability',
    detail:
      'Our team is commited to providing the best online experience for our ',
  },
  {
    id: '2',
    img: sec,
    title: 'Security',
    detail:
      'Our team is commited to providing the best online experience for our ',
  },
  {
    id: '4',
    img: scale,
    title: 'Scalability',
    detail:
      'Our team is commited to providing the best online experience for our ',
  },
  {
    id: '5',
    img: smart,
    title: 'Smart Contracts',
    detail:
      'Our team is commited to providing the best online experience for our ',
  },
];
