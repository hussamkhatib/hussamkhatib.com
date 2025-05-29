type Reel = {
  description: string
  link: string
  video: string
}

type Service = {
  title: string
  link: string
  image?: string
}

type SocialLink = {
  label: string
  link: string
}

export const REELS: Reel[] = [
  {
    description: '8K Porsche 911 Turbo S',
    link: 'https://www.tiktok.com/@muslimcontentcoach/video/7340713817225121056',
    video: 'reel1.mp4',
  },
  {
    description: 'Some people are just born different ',
    link: 'https://www.tiktok.com/@muslimcontentcoach/video/7338862603306798369',
    video: 'reel2.mp4',
  },
]

export const SERVICES: Service[] = [
  {
    title: 'Master Content Creation (Free Full Course)',
    link: 'https://whop.com/master-content-creation-free',
    image: '/mc-uni.webp',
  },
  {
    title: 'Need Personal Help with growing and selling on Social Media?',
    link: 'https://muslimcontentcoach.co/form?utm_source=instagram&utm_medium=organic&utm_campaign=bio',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/muslimcontentcoach',
  },
  {
    label: 'TikTok',
    link: 'https://www.tiktok.com/@muslimcontentcoach',
  },
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@AbidContentCoach',
  },
]
