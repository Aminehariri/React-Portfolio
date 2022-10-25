// skills imgages 

import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import tailwind from '../assets/skills/tailwind.png'
import bootstrap from '../assets/skills/boots-removebg-preview.png'
import js from '../assets/skills/javascript.png'
import reactIMG from '../assets/skills/react.png'
import git from '../assets/skills/Git.webp'
import php from '../assets/skills/php.webp'
import mysql from   '../assets/skills/mysql.webp'

// work section imgages 

import htmlPorfolio from '../assets/projects/porfolioone.jpg'
import ReactPorfolio from '../assets/projects/ReactPortfolio.jpg'
import msservices from '../assets/projects/ms.jpg'
import Bank from '../assets/projects/Bank.jpg'

export const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "About",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Work",
    title: "Portfolio",
  },
  {
    id: "Contact", 
    title: "Contact",
  },
];


export const skills=[
  {
    id:1,
    img:html,
    title:'HTML'
  },
  {
    id:2,
    img:css,
    title:'CSS'
  },
  {
    id:3,
    img:bootstrap,
    title:'BOOTSTRAP'
  },
  {
    id:4,
    img:tailwind,
    title:'TAILWIND'
  },
  {
    id:5,
    img:js,
    title:'JAVASCRIPT'
  },
  {
    id:6,
    img:reactIMG,
    title:'REACT-JS'
  },
  {
    id:8,
    img:php,
    title:'PHP'
  },
  {
    id:9,
    img:mysql,
    title:'MY-SQL'
  },
  {
    id:7,
    img:git,
    title:'GIT'
  }
]


export const projects=[
  {
    id:1,
    img:Bank,
    title:'Bank Website',
    link:'#',
    describe:'I’m creating my own portfolio website from scratch to show my project and skills on internet ,Using html css javascript for frontend side .And for backend i’m using php and mysql as database to store the messages that are comming from the contact form . I’m almost done with the frontend side still some features to add then i’m gonna start the backend side .',
    skills:{
      one:'REACT-JS',
      two:"TAILWIND CSS",
      three:'',
      four:''
    },
    github:'#'
  },
  {
    id:2,
    img:msservices,
    title:'Job website',
    link:'#',
    describe:'creation a website for the company MS-services (Employing Company) that the users can search for job and apply for the positions that suit them.and easly the classement of the job request',
    skills:{
      one:'HTML',
      two:"CSS",
      three:'BOOTRSTAP',
      four:'JAVASCRIPT'
    },
    github:'#'

  }
  ,{
    id:3,
    img:ReactPorfolio,
    title:'React Portfolio',
    link:'#',
    describe:'I’m creating my own portfolio website from scratch to show my project and skills on internet ,Using html css javascript for frontend side .And for backend i’m using php and mysql as database to store the messages that are comming from the contact form . I’m almost done with the frontend side still some features to add then i’m gonna start the backend side .',
    skills:{
      one:'REACT-JS',
      two:"TAILWIND CSS",
      three:'',
      four:''
    },
    github:'#'
  }
  ,{
    id:4,
    img:htmlPorfolio,
    title:'Porfolio Website',
    link:'https://aminehariri.github.io/Portfolio-website/index.html',
    describe:'I’m creating my own portfolio website from scratch to show my project and skills on internet ,Using html css javascript for frontend side .And for backend i’m using php and mysql as database to store the messages that are comming from the contact form . I’m almost done with the frontend side still some features to add then i’m gonna start the backend side .',
    skills:{
      one:'REACT-JS',
      two:"TAILWIND CSS",
      three:'',
      four:''
    },
    github:'https://github.com/Aminehariri/Portfolio-website'
  }
  
]


const About_me =[{
  Full_name:'Amine Hariri',
  Work:'Web developer',
  Skills:'HTML ,CSS,BOOTSTRAP,TAILWIND,JAVASCRIPT,REACT JS ,PHP,MY-SQL',
  Website:'aminehariri.me'
}]