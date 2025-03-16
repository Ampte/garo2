import React from 'react'
import './component.css'

const Home = () => {
    return(
        <>
        <div className='home'>
            <div className='header'>
                <button className='bar'><i class="fa-solid fa-bars-staggered" style={{fontSize: 'large'}}></i></button>
                <h1>Garo2</h1>
                <button className='three-dot'><i class="fa-solid fa-ellipsis-vertical" style={{fontSize:'large'}}></i></button>
            </div>
            <div className='sidebar'>
                <h1>sidebar</h1>
            </div>
            <div className='chatBox'>
               <div className='chats'>
               <div className='hint'>
                    <p>hint for messaging</p>
                </div>
                <div className='message'>
                    <p>message</p>
                </div>
                <div className='response'>
                    <p>response</p>
                </div>
               </div>
               <div className='message-inputs'>
                <form>
                    <input type='text' name='message' placeholder='Type to search...'/>
                    <button type='submit' className='submit'><i class="fa-solid fa-paper-plane" style={{fontSize: 'large',color: 'green'}}></i></button>
                </form>
               </div>
                </div>  
        </div>
        </>
    );
};

export default Home;