import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const exerciseTime = props.activity.time;
    const {img, title, descr, age, time} = props.activity;

    return (
        <div className='activity'>

            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{descr}</p>
            <span>For-Age: {age}</span><br />
            <span id='activity-time'>Time: {time}m</span><br />
            <button onClick={() => {props.addToList(exerciseTime)}}>Add to list</button>

        </div>
    );
};

export default Activity;



