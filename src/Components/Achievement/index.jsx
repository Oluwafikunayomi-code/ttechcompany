import React, { useState,useRef } from 'react';
import "./Achievement.css";
import { FaUsersLine } from 'react-icons/fa6';
import { FaProjectDiagram, FaAward } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import Odometer from 'react-odometerjs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Achievement = () =>  {
    const [clients,setClients] = useState(0)
    const [projects,setProjects] = useState(0)
    const [team,setTeam] = useState(0)
    const [awards,setAwards] = useState(0)
    const container = useRef(null);
    const updateData = () =>{
        const timeout = setTimeout(() =>{
            setClients(100);
            setProjects(50);
            setTeam(20);
            setAwards(10);
        },500)
        return () => clearTimeout(timeout);
    }

    const resetData = () =>{
        setClients(0);
        setProjects(0);
        setTeam(0);
        setAwards(0);
    }

    useGSAP(() => {
  ScrollTrigger.create({
    trigger: container.current,
    start: "top 80%",
    onEnter: () => {
      gsap.to({}, {
        duration: 2,
        onUpdate: function () {
          const progress = this.progress();
          setClients(Math.floor(progress * 100));
          setProjects(Math.floor(progress * 50));
          setTeam(Math.floor(progress * 20));
          setAwards(Math.floor(progress * 10));
        }
      });
    },
    onLeaveBack: resetData,
  });
}, { scope: container });



    return (
        <div className='achievement__container' ref={container}>
            <div className="container">
                {/* Start achievement */}
                <div className="achievement">
                    <div className="icon__container"><FaUsersLine/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                            value={clients}
                            className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Happy Customers</small>
                    </div>
                </div>
                {/* End achievement */}

                {/* Start achievement */}
                <div className="achievement">
                    <div className="icon__container"><FaProjectDiagram/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                            value={projects}
                            className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Completed Projects</small>
                    </div>
                </div>
                {/* End achievement */}

                {/* Start achievement */}
                <div className="achievement">
                    <div className="icon__container"><GiTeamIdea/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                            value={team}
                            className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Expert Workers</small>
                    </div>
                </div>
                {/* End achievement */}


                {/* Start achievement */}
                <div className="achievement">
                    <div className="icon__container"><FaAward/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                            value={awards}
                            className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Awards Winning</small>
                    </div>
                </div>
                {/* End achievement */}



            </div>
        </div>
    )
}

export default Achievement