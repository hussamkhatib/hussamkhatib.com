type Project = {
  description: string
  link: string
  video: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    description: 'Pasta',
    link: 'https://www.pastacopy.app/',
    video: 'pasta.mp4',
  },
  {
    description: 'ShipperCRM',
    link: 'https://www.shippercrm.com/',
    video: 'shippercrm.mp4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/hussamkhatib_/',
  },
  {
    label: 'X',
    link: 'https://x.com/hussamkhatib3',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/hussamkhatib',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hussamkhatib/',
  },
]
