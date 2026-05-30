import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
         panel,turbine,batteries, inspection, 
         electrical, mechanical, member1, member2, 
         member3, member4, elevator, solar_1, solar_2, light_1, light_2, light_3, hvac} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Project",id:'project'},
    {name:"Clients",id:'testimonial'},
    {name:"FAQ",id:'faq'},
    {name:"Contact",id:'contact'},
];

export const services = [
  {
    name:"Renewable Energy (Solar and Wind mills)",
    image:panel,
    description:`We provide installation, supply, and energy needs assessments to deliver
                 efficient and sustainable solar power solutions tailored to your property.`,
  },
  {
    name:"Wind Mills",
    image:turbine,
    description:`harness strong winds by installing turbines, supply clean 
                 electricity to the grid or batteries`,
  },
  {
    name:"Electrical Engineering Services",
    image:electrical,
    description:`Reliable electrical design, load calculation, and power installation 
                 services by COREN-certified engineers.`,
  },
  {
    name:"Mechanical Engineering Services",
    image:mechanical,
    description:`Expert mechanical engineering solutions for HVAC, metal works, 
                 and elevator installations by COREN-certified engineers.`,
  },  
  {
    name:"consultancy and Site Inspection",
    image:inspection,
    description:`Thorough on-site assessments to evaluate your property.
                 Also determine the most efficient and cost-effective solar installation plan.`,

  },
]


export const projects = [
  {
    title:"Solar System Installation",
    image:solar_2,
    category:"Solar Panel",
    description:`10KW Solar system installation at Omotosho`,
  },
  {
    title:"Heating, Ventilation and approvals (HVAC)",
    image:hvac,
    category:"Mechanical",
    description:`HVAC system supply and installation in Kaduna, Kano and FCT`,
  },
  {
    title:"Street Lightening",
    image:light_1,
    category:"Street Light",
    description:`500 Solar Powered street lights installed in Imo West`,
  },
  {
    title:"Street Lightening",
    image:light_2,
    category:"Street Light",
    description:`15 Solar Power street lights installed in Ijapo Estate, Akure, Ondo`,
  },
  {
    title:"Street Lightening",
    image:light_3,
    category:"Street Light",
    description:`400 Solar street light across multiple locations
                  in Ondo South senetorial districts`,
  },
  {
    title:"Electrification",
    image:"https://en.wikipedia.org/wiki/File:20111110-OC-AMW-0030_-_Flickr_-_USDAgov.jpg",
    category:"Electrical",
    description:`ECN Rural Electrification projects done in Kano, Ondo, Kaduna, Zamfara
                 Plateau and Jigawa States`,
  },
  {
    title:"Solar System Installation",
    image:solar_1,
    category:"Solar Panel",
    description:`40KW SOlar system - Ile-Ife, Osun State, Sango, Ogun State`,
  },
  {
    title:"Solar System Installation",
    image:solar_2,
    category:"Solar Panel",
    description:`Multiple 10KW Solar system in Akure (Alagbaka, ijapo, etc)`,
  },
  {
    title:"Elevator and Escalator Installation",
    image:elevator,
    category:"Mechanical",
    description:`Elevator installation in Lagos`
  }
];

export const faq = [
  {
    title:"How do solar panels work?",
    description:`
       Solar panels convert sunlight into electricity 
       using photovoltaic (PV) cells. When sunlight hits the cells, 
       it creates an electric field that generates direct current (DC) 
       electricity. This DC electricity is then converted to 
       alternating current (AC) electricity using an inverter, making 
       it usable for your home or business.
    `,
  },
  {
    title:"What are the benefits of installing solar panels?",
    description:`
       Installing solar panels can reduce or eliminate your 
       electricity bills, increase the value of your property, 
       decrease your carbon footprint, and provide a renewable 
       source of energy. Additionally, many regions offer incentives 
       and rebates for solar installations.
    `,
  },
  {
    title:"How much does a solar power system cost?",
    description:`
      The cost of a solar power system varies depending on the size of
       the system, the type of equipment used, and your location. On 
       average, a residential solar panel system can range from $15,000 
       to $25,000 before incentives and rebates.
    `,
  },
  {
    title:"How long will it take for my solar panels to pay for themselves?",
    description:`
    The payback period for solar panels typically ranges from 6 to 10 years, 
    depending on factors such as your energy usage, the cost of electricity 
    in your area, and the available financial incentives.
    `,
  },
  {
    title:"Will my solar panels work during a power outage?",
    description:`
      Most grid-tied solar power systems will not function during a power 
      outage for safety reasons unless they are paired with a battery
       storage system or a solar generator that allows for off-grid 
       operation.
    `,
  },
  {
    title:"How much maintenance do solar panels require?",
    description:`
    Solar panels require minimal maintenance. Regular cleaning to remove dust, 
    dirt, and debris, as well as periodic inspections to ensure everything is 
    functioning properly, is generally sufficient. Most panels come with a 
    25-year warranty.
    `,
  },
  {
    title:"Do I need a battery storage system?",
    description:`
      While a battery storage system is not required, it can be beneficial 
      for storing excess energy generated during the day for use at night or 
      during power outages. Batteries can also help you become more energy
      independent.
    `,
  },
]

export const testimonial = [
  {
    image:profile2,
    name:'Olusola Edward',
    review:`Great service from start to finish. The solar installation was professional, 
            on time, and very knowledgeable. They explained everything clearly and completed the 
            work neatly with minimal disruption. The system is working perfectly and has already 
            helped reduce my electricity costs. Highly recommended for anyone looking to switch to reliable solar energy.`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:`Impressive service from ttechelectrical; very professional, reliable, and detail-oriented. 
            The installation was clean and well done, and the system works flawlessly. What really stands 
            out is the quality of service and attention to comfort. They went above and beyond to ensure 
            everything was perfect, and I couldn't be happier with the results.
`
  },
];

export const contacts = [
  {
    name:"Email",
    value:"info@ttechelectrical.com.ng",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+234 703 832 0523",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:[
      "C11, Major V.O Abiola lane, Okuta Elerinla Estate, Akure.",

      "2 All for God Shopping Plaza, Fajuyi Road, Ile-Ife.",
      
      "17 Idama Estate, PTI road, Warri, Delta State."
    ],
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"About Us",id:'about'},
        {name:"Services",id:'services'},
        {name:"Team",id:'team'},
        {name:"Project",id:'project'},
        {name:"Clients",id:'testimonial'},
        {name:"FAQ",id:'faq'},
        {name:"Contact",id:'contact'},
      ]
    },
    {
        name:"Gallery",
        routes:[
          {name:"Privacy Policy"},
          {name:"Terms and Conditions"},
          {name:"Cookie Policy"},
        ]
      },
]


