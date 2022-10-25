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
    describe:'I’ve found this figma bank design on the internet so i decide to make a website using REACT-JS and TAILWIND ',
    skills:{
      one:'REACT-JS',
      two:"TAILWIND CSS",
      three:'',
      four:''
    },
    github:'https://github.com/Aminehariri/Bank_App'
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
      three:'',
      four:'JAVASCRIPT'
    },
    github:'#'

  }
  ,{
    id:3,
    img:ReactPorfolio,
    title:'React Portfolio',
    link:'#',
    describe:'My second Portfolio .this one was created using REACT-JS and TAILWIND to upgrade my react-js and tailwind skills',
    skills:{
      one:'REACT-JS',
      two:"TAILWIND CSS",
      three:'',
      four:''
    },
    github:'https://github.com/Aminehariri/React-Portfolio'
  }
  ,{
    id:4,
    img:htmlPorfolio,
    title:'Porfolio Website',
    link:'https://aminehariri.github.io/Portfolio-website/index.html',
    describe:'Portfolio website using HTML and CSS and  JS ,BOOTSTRAP it’s 100% responsive i’ve learn a lot of thing while creating this website ,but it was vary hard to edit the content or add some feature.That’s why a decide to create a new one using REACT-JS and TAILWIND',
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