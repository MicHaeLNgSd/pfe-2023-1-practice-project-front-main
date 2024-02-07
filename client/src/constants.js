const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 5000;
const CONSTANTS = {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
  NAVIGATION_LIST: [
    {
      title: 'Name ideas',
      items: [
        { name: 'Beauty', link: 'http://www.google.com' },
        { name: 'Consulting', link: 'http://www.google.com' },
        { name: 'E-Commerce', link: 'http://www.google.com' },
        { name: 'Fashion & Clothing', link: 'http://www.google.com' },
        { name: 'Finance', link: 'http://www.google.com' },
        { name: 'Real Estate', link: 'http://www.google.com' },
        { name: 'Tech', link: 'http://www.google.com' },
        { name: 'More Categories', link: 'http://www.google.com' },
      ],
    },
    {
      title: 'contests',
      items: [
        { name: 'HOW IT WORKS', link: 'http://www.google.com' },
        { name: 'PRICING', link: 'http://www.google.com' },
        { name: 'AGENCY SERVICE', link: 'http://www.google.com' },
        { name: 'ACTIVE CONTESTS', link: 'http://www.google.com' },
        { name: 'WINNERS', link: 'http://www.google.com' },
        { name: 'LEADERBOARD', link: 'http://www.google.com' },
        { name: 'BECOME A CREATIVE', link: 'http://www.google.com' },
      ],
    },
    {
      title: 'Our Work',
      items: [
        { name: 'NAMES', link: 'http://www.google.com' },
        { name: 'TAGLINES', link: 'http://www.google.com' },
        { name: 'LOGOS', link: 'http://www.google.com' },
        { name: 'TESTIMONIALS', link: 'http://www.google.com' },
      ],
    },
    {
      title: 'Names For Sale',
      items: [
        { name: 'POPULAR NAMES', link: 'http://www.google.com' },
        { name: 'SHORT NAMES', link: 'http://www.google.com' },
        { name: 'INTRIGUING NAMES', link: 'http://www.google.com' },
        { name: 'NAMES BY CATEGORY', link: 'http://www.google.com' },
        { name: 'VISUAL NAME SEARCH', link: 'http://www.google.com' },
        { name: 'SELL YOUR DOMAINS', link: 'http://www.google.com' },
      ],
    },
    {
      title: 'Blog',
      items: [
        { name: 'ULTIMATE NAMING GUIDE', link: 'http://www.google.com' },
        { name: 'POETIC DEVICES IN BUSINESS NAMING', link: 'http://www.google.com' },
        { name: 'CROWDED BAR THEORY', link: 'http://www.google.com' },
        { name: 'ALL ARTICLES', link: 'http://www.google.com' },
      ],
    },
  ],
};
export default CONSTANTS;
