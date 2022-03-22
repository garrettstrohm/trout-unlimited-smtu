import tuWhite from '../../assets/tu-white.png'
import lewistown from '../../assets/fergus.png'
import flyfishing from '../../assets/flyfishing.jpeg'

export const homeObjOne = {
    primary: false,
    lightBg: false,
    bgImg: true,
    waterBg: true,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Lewistown, MT',
    headline: 'Welcome to Snowy Mountain Trout Unlimited',
    description:
      'We are based out of Lewistown, MT and are a small chapter of Trout Conversvationalists.',
    buttonLabel: 'About Us',
    imgStart: '',
    img: lewistown,
    alt: 'splash section',
    start: '',
    route: '/about'
  };

  export const homeObjTwo = {
    primary: true,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'What We\'ve Accomplished',
    headline: 'Learn more about our Chapter History',
    description:
      'Trout habitat around Montana is some of the most prestine in the world. But it doesn\'t mean it can\'t use some help along the way.',
    buttonLabel: 'Chapter History',
    imgStart: 'start',
    img: flyfishing,
    alt: 'flyfishing',
    start: 'true',
    route: '/history'
  };

  export const homeObjThree = {
    primary: false,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Donate and Join',
    headline: 'How to Join or Donate',
    description:
      'Join our chapter and attend our wonderful events and help conserve trout habitat around central Montana today! Don\'t want to join but want to help in some way? Donations are welcome as well!',
    buttonLabel: 'Join/Donate',
    imgStart: '',
    img: tuWhite,
    alt: 'tu logo',
    start: '',
    route: '/join'
  };