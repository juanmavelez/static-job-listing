import { IState } from '../interfaces/StateInterface'

export const initialState: IState = {
  filter: [],
  offers: [
    {
      id: 1,
      company: 1,
      isNew: true,
      isFeatured: true,
      position: 'Senior Frontend Developer',
      role: 1,
      level: 1,
      postedAt: '1d ago',
      contract: 1,
      location: 1,
      languages: [1, 2, 3],
      tools: [],
    },
    {
      id: 2,
      company: 2,
      isNew: true,
      isFeatured: true,
      position: 'Fullstack Developer',
      role: 2,
      level: 2,
      postedAt: '1d ago',
      contract: 2,
      location: 2,
      languages: [4],
      tools: [1],
    },
    {
      id: 3,
      company: 3,
      isNew: true,
      isFeatured: false,
      position: 'Junior Frontend Developer',
      role: 1,
      level: 3,
      postedAt: '2d ago',
      contract: 2,
      location: 1,
      languages: [3],
      tools: [1, 2],
    },
    {
      id: 4,
      company: 4,
      isNew: false,
      isFeatured: false,
      position: 'Junior Frontend Developer',
      role: 1,
      level: 3,
      postedAt: '5d ago',
      contract: 2,
      location: 1,
      languages: [2, 3],
      tools: [],
    },
    {
      id: 5,
      company: 5,
      isNew: false,
      isFeatured: false,
      position: 'Software Engineer',
      role: 2,
      level: 2,
      postedAt: '1w ago',
      contract: 1,
      location: 3,
      languages: [3],
      tools: [3, 2],
    },
    {
      id: 6,
      company: 6,
      isNew: false,
      isFeatured: false,
      position: 'Junior Backend Developer',
      role: 3,
      level: 3,
      postedAt: '2w ago',
      contract: 1,
      location: 4,
      languages: [6],
      tools: [4],
    },
    {
      id: 7,
      company: 7,
      isNew: false,
      isFeatured: false,
      position: 'Junior Developer',
      role: 1,
      level: 3,
      postedAt: '2w ago',
      contract: 1,
      location: 3,
      languages: [1, 3],
      tools: [2],
    },
    {
      id: 8,
      company: 8,
      isNew: false,
      isFeatured: false,
      position: 'Junior Frontend Developer',
      role: 1,
      level: 3,
      postedAt: '2w ago',
      contract: 1,
      location: 1,
      languages: [3],
      tools: [6, 2],
    },
    {
      id: 9,
      company: 9,
      isNew: false,
      isFeatured: false,
      position: 'Full Stack Engineer',
      role: 2,
      level: 2,
      postedAt: '3w ago',
      contract: 2,
      location: 3,
      languages: [3, 4],
      tools: [5],
    },
    {
      id: 10,
      company: 10,
      isNew: false,
      isFeatured: false,
      position: 'Front-end Dev',
      role: 1,
      level: 3,
      postedAt: '1mo ago',
      contract: 2,
      location: 3,
      languages: [3],
      tools: [5, 2],
    },
  ],
  companies: [
    {
      id: 1,
      name: 'Photosnap',
      logo: './images/photosnap.svg',
    },
    {
      id: 2,
      name: 'Manage',
      logo: './images/manage.svg',
    },
    {
      id: 3,
      name: 'Account',
      logo: './images/account.svg',
    },
    {
      id: 4,
      name: 'MyHome',
      logo: './images/myhome.svg',
    },
    {
      id: 5,
      name: 'Loop Studios',
      logo: './images/loop-studios.svg',
    },
    {
      id: 6,
      name: 'FaceIt',
      logo: './images/faceit.svg',
    },
    {
      id: 7,
      name: 'Shortly',
      logo: './images/shortly.svg',
    },
    {
      id: 8,
      name: 'Insure',
      logo: './images/insure.svg',
    },
    {
      id: 9,
      name: 'Eyecam Co',
      logo: './images/eyecam-co.svg',
    },
    {
      id: 10,
      name: 'The Air Filter Company',
      logo: './images/the-air-filter-company.svg',
    },
  ],
  roles: [
    {
      id: 1,
      name: 'Frontend',
    },
    {
      id: 2,
      name: 'Fullstack',
    },
    {
      id: 3,
      name: 'Backend',
    },
  ],
  contracts: [
    {
      id: 1,
      name: 'Full Time',
    },
    {
      id: 2,
      name: 'Part Time',
    },
    {
      id: 3,
      name: 'Contract',
    },
  ],
  levels: [
    {
      id: 1,
      name: 'Senior',
    },
    {
      id: 2,
      name: 'Midweight',
    },
    {
      id: 3,
      name: 'Junior',
    },
  ],
  locations: [
    {
      id: 1,
      name: 'USA Only',
    },
    {
      id: 2,
      name: 'Remote',
    },
    {
      id: 3,
      name: 'Worldwide',
    },
    {
      id: 4,
      name: 'UK Only',
    },
  ],
  languages: [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'JavaScript',
    },
    {
      id: 4,
      name: 'Python',
    },
    {
      id: 5,
      name: 'React',
    },
    {
      id: 6,
      name: 'Ruby',
    },
  ],
  tools: [
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'Sass',
    },
    {
      id: 3,
      name: 'Ruby',
    },
    {
      id: 4,
      name: 'RoR',
    },
    {
      id: 5,
      name: 'Django',
    },
    {
      id: 6,
      name: 'Vue',
    },
  ],
};
