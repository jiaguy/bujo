import React, { Component } from 'react';
import Choices from './Choices';
<<<<<<< HEAD
import Stats from './Stats';


=======
import Button from 'react-bootstrap/Button';
>>>>>>> 9c8f1aa (ignore these changes, just updating to master)
import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';

import Calculator from './Calculator';
<<<<<<< HEAD

=======
>>>>>>> 9c8f1aa (ignore these changes, just updating to master)

const Age10 = () => {
    return (
       <div className='App'>
            <h1>Age 10</h1>
<<<<<<< HEAD
            <div className='Stat-box'>
                <Stats
                AgeNum="10"
                JobNm="Placeholder"
                CurrBalance="Placeholder"/>
            </div>
            <div className ='Card-deck-div'>
=======
            <div id="choices" className ='Card-deck-div'>
            <p id="demo" onclick="myFunction()">Click me to change my text color.</p>
>>>>>>> 9c8f1aa (ignore these changes, just updating to master)
                <Choices
                    choiceImage1={lawn_mow}
                    choiceTitle1="Mow Lawns" 
                    choiceDesc1="You mow your two neighbour's lawns every two weeks 
                    at a rate of $30 per session."
                    choice1="mow()"
                    choiceImage2={lemonade_stand}
                    choiceTitle2="Lemonade Stand" 
                    choiceDesc2="Run a lemonade stand with your friend every weekend,
                    making a $20 profit every time."
                    choiceImage3={walk_dog}
                    choiceTitle3="Dog Walking" 
                    choiceDesc3="Walk your elderly neighbour's dog three times a week,
                    earning $10 every walk."/>
                <Calculator />
            </div>
       </div>
    );
}

function mow() {
    document.getElementById("choices").style.display = "none";
  }
function myFunction() {
document.getElementById("demo").style.color = "red";
}
export default Age10;