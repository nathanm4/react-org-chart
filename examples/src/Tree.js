import React from 'react'
import { useState, useEffect } from 'react';
import OrgChart from '@unicef/react-org-chart'

import avatarPersonnel from './assets/avatar-personnel.svg'
import nathanPicture from './assets/nathan-picture.svg'
import earth from './assets/earth.jpg'

export const tree6 = (async () => {
  try {
    const response = await fetch('http://localhost:8080/people/36');
    const data = await response.json();

    return [{
      id: data.id,
      person: {
        id: data.id,
        avatar: data.avatar || avatarPersonnel,
        department: data.department || '',
        name: data.name,
        title: data.title,
        totalReports: data.totalReports || 0,
      },
      hasChild: data.hasChild || false,
      hasParent: true,
      children: [],
    }];
  } catch (error) {
    console.error('Error fetching Tree6 data:', error);
    return [];
  }
})();


export const tree = {
  id: 100,
  person: {
    id: 100,
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFeut-csilJBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725427041944?e=1733961600&v=beta&t=0MAv1OyjlbGCYZWRREuKKOs-exkTipE-LoZR6ysbC0I',
    department: '',
    name: 'Henry monger',
    title: 'Manager',
    totalReports: 3,
  },
  hasChild: true,
  hasParent: true,
  children: [],
}



export const tree1 = [
  {
    id: 36,
    person: {
      id: 36,
      avatar: nathanPicture,
      department: '',
      name: 'Tomasz polaski',
      title: 'IT Specialist',
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 32,
    person: {
      id: 32,
      avatar: 'https://randomwordgenerator.com/img/picture-generator/52e4d1424f5aa914f1dc8460962e33791c3ad6e04e5074417d2e72d2954ac5_640.jpg',
      department: '',
      name: 'Emanuel walker',
      title: 'IT Specialist',
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 25,
    person: {
      id: 25,
      avatar: earth,
      department: '',
      name: 'Kerry peter',
      title: 'IT Specialist',
      totalReports: 3,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
]

export const tree2 = [
  {
    id: 56,
    person: {
      id: 56,
      avatar: avatarPersonnel,
      department: '',
      name: 'Sam John',
      title: 'HR',
      totalReports: 2,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 66,
    person: {
      id: 66,
      avatar: avatarPersonnel,
      department: '',
      name: 'John doe',
      title: 'Developer',
      totalReports: 0,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 76,
    person: {
      id: 76,
      avatar: avatarPersonnel,
      department: '',
      name: 'Emilia rogers',
      title: 'Developer',
      totalReports: 0,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 60,
    person: {
      id: 60,
      avatar: avatarPersonnel,
      department: '',
      name: 'Ellen cott',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const tree3 = [
  {
    id: 70,
    person: {
      id: 70,
      avatar: avatarPersonnel,
      department: '',
      name: 'Kenneth dom',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 45,
    person: {
      id: 45,
      avatar: avatarPersonnel,
      department: '',
      name: 'Kin baker',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const tree4 = [
  {
    id: 102,
    person: {
      id: 102,
      avatar: avatarPersonnel,
      department: '',
      name: 'Hendy kinger',
      title: 'Manager',
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 455,
    person: {
      id: 455,
      avatar: avatarPersonnel,
      department: '',
      name: 'Kate baker',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 444,
    person: {
      id: 444,
      avatar: avatarPersonnel,
      department: '',
      name: 'John medis',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },

  {
    id: 456,
    person: {
      id: 456,
      avatar: avatarPersonnel,
      department: '',
      name: 'Brett lee',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]
