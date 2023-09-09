import React, { useState } from 'react';
import user from '../../img/user.jpg';
import './Sidebar.css'
import { addToLocalStorage } from '../../utilities/utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {
    const {sidebar} = props;

    let exTime = 0;
    
    for(const time of sidebar){
        exTime = exTime + time;
    }

    const [breakTime, setBreakTime] = useState(0);

    const addBreak = (value) => {
        addToLocalStorage(value);
        setBreakTime(value);
    }

    
    const handleToast = () => {
        toast('congratulations you completed this activity');
    }
    
    return (
        <div>
            <div className='user-info'>
                <img src={user} alt="" />
                <div>
                    <p>Zahid Hossain</p>
                    <span>Sydney, Australia</span>
                </div>
            </div>

            <div className='user-info-2'>
               
               <div className='weight'>
                   <h2>41<span>kg</span></h2>
                   <h5>Weight</h5> 
               </div>

               <div className='weight'>
                   <h2>6.5</h2>
                   <h5>Height</h5> 
               </div>

               <div className='weight'>
                   <h2>21<span>yrs</span></h2>
                   <h5>Age</h5> 
               </div>
                
            </div>

            <div className='add-breake'><p>Add A Break</p></div>

            <div className='time-second'>
                <p onClick={() => {addBreak(10)}}>10s</p>
                <p onClick={() => {addBreak(20)}}>20s</p>
                <p onClick={() => {addBreak(30)}}>30s</p>
                <p onClick={() => {addBreak(40)}}>40s</p>
                <p onClick={() => {addBreak(50)}}>50s</p>
            </div>

            <div className='exercise'>Exercise Details</div>

            <div className='activity-time'>
                <h3>Exercise time</h3>
                <p>{exTime}seconds</p>
            </div>

            <div className='activity-time'>
                <h3>Breake time</h3>
                <p>{breakTime}seconds</p>
            </div>

            <div className='btn-complete'>
                <button onClick={handleToast}>Activity Completed</button>
                <ToastContainer />
            </div>
    
        </div>
    );
};

export default Sidebar;