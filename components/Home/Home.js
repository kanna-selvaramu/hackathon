import React from "react";
import s from "./Home.module.css";
import Image from 'next/image'
import { listEl } from "../../data/headerList";
import logo from "../../static/logo.jpg";
import home_poster from "../../static/home_poster.jpg";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import SchoolIcon from '@mui/icons-material/School';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

const Home = () => {

    const list = listEl

    return (
        <div className={s.cls_HomeWrapper}>
            <div className={s.cls_HeaderWrapper}>
                <div className={s.cls_Header}>
                    <div className={s.cls_HeadLogo}>
                        <Image
                            src={logo}
                            alt="Hackathon"
                            width={50}
                            height={50}
                        />
                        <span className={s.cls_HeadSpan}>HackIdeas</span>
                    </div>
                    <div className={s.HeadList}>
                        {
                            listEl.map(( item, key) => {
                                if (item && item.title && item.href)
                                return (
                                    <a className={s.headListCont} key = {key} href = {`#${item.href}`}>
                                        {item.title}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
            <div className={s.cls_HomeContentWrapper}>
                <div className = {s.cls_HomePoster}>
                    <Image
                        src={home_poster}
                        alt="Hackathon"
                        layout="responsive"
                    />
                </div>
                <div className={s.cls_HomeContent}>
                    <div className = {s.cls_HomeItem} id = "about">
                        <div className = "cls_TitleText">
                            About Hackathon
                        </div>
                        <div className = {s.cls_HomeBody}>
                            HackIdeas is a weekend-long event where the employess come together to work on cool new software and/or
                            hardware projects. This year, we're planning to host HackIdeas as a
                            hybrid event, meaning that hackers will be able to participate
                            both in-person and virtually during the weekends of April.Websites
                            and mobile apps are common types of hacks, but you can build
                            anything! Think outside the box!
                        </div>
                    </div>
                    <div className = {s.cls_HomeItem} id = "list-categories">
                        <div className = "cls_TitleText">
                            Categories
                        </div>
                        <div className = {s.cls_HomeBody} style = {{display: "flex"}}>
                            <div className={s.cls_HomeBullet}><HealthAndSafetyIcon style = {{marginRight: "5px"}}/> HealthCare</div>
                            <div className={s.cls_HomeBullet}><NaturePeopleIcon style = {{marginRight: "5px"}} /> Community</div>
                            <div className={s.cls_HomeBullet}><SchoolIcon style = {{marginRight: "5px"}}/> Education</div>
                            <div className={s.cls_HomeBullet}><SolarPowerIcon style = {{marginRight: "5px"}} /> Sustainabilty</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

