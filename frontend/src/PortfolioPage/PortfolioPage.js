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
            <div className='Projects'>
                <h1>Projects</h1>
                <div className='ProjectNames'>
                    <p>SnippetBox</p>
                    <span />
                    <p>RG Remodels</p>
                </div>
                <div className='ProjectIcons'>
                    <a> <RiScissors2Line /> </a>
                    <span />
                    <a> <BsHouseFill /> </a>
                </div>
            </div>
            <div className='Skills'>
                <h1>Skills</h1>
                <div className='FirstRowSkills'>
                    <FaReact />
                    <FaJava />
                    <CgCPlusPlus />
                    <SiMysql />
                    <SiJavascript />
                </div>
                <div className='SecondRowSkills'>
                    <GrGithub />
                    <GrDocker />
                    <DiGit />
                    <FaAws />
                </div>
            </div>
        </div >
    )
}

export default PortfolioPage;