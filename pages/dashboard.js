import React, { useEffect, useState } from "react";
const queryString = require('query-string');
import { useSelector } from "react-redux";
import s from '../styles/Dashboard.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from "next/router";

const Dashboard = () => {

    const [ category , setCategory ] = useState("All Challenges");
    const [ data , setData ] = useState([]);
    const { challenges }  = useSelector((state) => state.challenges);
    const router = useRouter();

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        if(parsed.category)
            setCategory(parsed.category);
    },[]);

    useEffect(() => {
        console.log("test", category , challenges )
        if(challenges !== null && category != "") {
            if(category === "All Challenges") 
                setData(challenges)
            else {
                let  temp = challenges.filter((item) => item.cat === category)
                if(temp.length > 0)
                    setData(temp)
            }
        }
    }, [ challenges , category])

    return (
        <div className = {s.cls_dashboardWrapper}>
            <div className={s.cls_dashboardTitle}>{category}</div>
            <div className= {s.cls_dashBody}>
                {
                    data && data.length > 0 && data.map((item, key) => {
                        let date = "";
                        if(item.date) {
                            date = new Date(parseInt(item.date)).toDateString()
                            console.log(item.date, date)
                            
                        }
                        return (
                            <div key = {key} className={s.cls_dashCont}>
                                {
                                    item.title && item.title != "" &&
                                    <div className = {s.cls_dashContTitle}>
                                        {item.title}
                                    </div>
                                }
                                {
                                    item.desc && item.desc != "" &&
                                    <div className = {s.cls_dashContDesc}>
                                        {item.desc}
                                    </div>
                                }
                                <div className={s.cls_dashContFooter}>
                                    {
                                        date && date != "" && 
                                        <div className={s.cls_dateStr}>
                                            {date}
                                        </div>
                                    }
                                    {
                                        item.upvote && 
                                        <div className={s.cls_upVoteCont}>
                                            <FavoriteBorderIcon color = "primary" style = {{marginRight : "5px"}}/>
                                            {item.upvote}
                                        </div>
                                    }
                                </div>
                            </div>    
                        )
                    })
                }
            </div>  
            <div className="cls_BtnWrap">
                <div className={s.cls_NewBtn} onClick={() => router.push("/newChallenge")}>Add New Challenge</div>
            </div>
        </div>
    )
}

export default Dashboard;