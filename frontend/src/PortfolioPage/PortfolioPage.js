import React from 'react';
import './PortfolioPage.css';
import { FaReact, FaJava, FaAws } from 'react-icons/fa';
import { SiMysql, SiJavascript } from "react-icons/si";
import { GrGithub, GrDocker } from "react-icons/gr";
import { RiScissors2Line } from "react-icons/ri";
import { BsHouseFill } from "react-icons/bs";
import { DiGit } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";

const PortfolioPage = () => {
    return (
        < div className='PortfolioPage' >
            <h1>Projects</h1>
            <div className='Projects'>
                <div className='SnippetBox'>
                    <a href='https://github.com/dbob486/snippetBox' target="blank">
                        <p>SnippetBox</p>
                        <RiScissors2Line />
                    </a>
                </div>
                <span />
                <div className='RGRemodels'>
                    <a href='https://github.com/dbob486/rgremodels' target="blank">
                        <p>RG Remodels</p>
                        <BsHouseFill />
                    </a>
                </div>
            </div>
            <div className='Skills'>
<<<<<<< AD
                <SiJavascript>JavaScript</SiJavascript>
=======
                <h1>Skills</h1>
                <div className='FirstRowSkills'>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>React</p>
                        <FaReact />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>Java</p>
                        <FaJava />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>C/C++</p>
                        <CgCPlusPlus />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>MySQL</p>
                        <SiMysql />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>JavaScript</p>
                        <SiJavascript />
                    </div>
                </div>
                <div className='SecondRowSkills'>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>Github</p>
                        <GrGithub />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>Docker</p>
                        <GrDocker />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>Git</p>
                        <DiGit />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>AWS</p>
                        <FaAws />
                    </div>
                    <div className='SkillIcon'>
                        <p className='HideIcon'>Golang</p>
                        <img src='https://cdn.worldvectorlogo.com/logos/go-6.svg' alt='golang' />
                    </div>
                </div>
>>>>>>> 73a617f17d74a86ce3a52431413cdec67daa23a8
            </div>
        </div >
    )
}

export default PortfolioPage;