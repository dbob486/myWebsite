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
                    <img src='https://cdn.worldvectorlogo.com/logos/go-6.svg' alt='golang'/>
                </div>
            </div>
        </div >
    )
}

export default PortfolioPage;