import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text:"Let's hit the beach!",
        iconName:"sun",
    },
    winter: {
        text:"Burr, it is cold",
        iconName:"snowflake",
    },
}

const getSeason = (lat,month)=> {
    if(month > 2 && month < 9){
        return  lat > 0 ? 'summer' : 'winter';
    }else{
        return  lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    //console.log(props.lat)
    const season = getSeason(props.lat,new Date().getMonth());
    /*const text =  season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    const icon = season === 'winter' ? 'Snowflake' : 'sun';*/
    const { text,iconName } = seasonConfig[season];
    return (
    <div className={`season-display ${season}`}>
        <i className={`massive icon-left ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`massive icon-right ${iconName} icon`}></i>
    </div>
    );
};

export default SeasonDisplay;