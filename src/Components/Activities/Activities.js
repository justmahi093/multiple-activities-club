import React, { useState, useEffect } from 'react';
import './Activities.css';
import Activity from '../Activity/Activity';
import Sidebar from '../Sidebar/Sidebar';


const Activities = () => {
    
    const [activities, setActivities] = useState([]);
    
    const [sidebar, setSidebar] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const addToList = (exerciseTime) => {
        const newSidebar = [...sidebar, exerciseTime];
        setSidebar(newSidebar);
    }

    return (
        <div className='activities'>
            
            <div className='activity-container'>
                
                {
                activities.map(activity => <Activity 
                    key={activity.id}
                    activity={activity}
                    addToList = {addToList}
                    ></Activity>)
                }
            </div>

            <div className='sidebar-container'>
                <Sidebar sidebar={sidebar}></Sidebar>
            </div>
            
        </div>
    );
};

export default Activities;
