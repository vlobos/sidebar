import React, { Component } from 'react';
import Details from './Details.jsx';
import Hours from './Hours.jsx';
import Misc from './Misc.jsx';
import axios from 'axios';
import moment from 'moment';

export default class Sidebar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      hours: {},
      misc: {}
    }
  }

  componentDidMount() {

    this.addRestaurants();
  }

  addRestaurants() {
// ---- for MongoDB ----
    const e = Math.floor(Math.random() * 10000000);
      this.getRestaurantInfo(e);
      console.log('searching for restaurant id ', e)
      console.log("The time is ", moment().format('HHmm'))
      
  }

//--- for MongoDB to work with React components as OG written----
  getRestaurantInfo(e) {
    axios('http://localhost:3002/api/restaurants/'+e)
 //   axios(`http://52.53.174.134/api/restaurants/`+ e)
      .then((results) => {
        const rest = results.data[0]
        let details = {
          Price_Range : rest.Price_Range,
          Health_Score: rest.Health_Score
        };

        let hours = {
          Mon: rest.Mon,
          Tue: rest.Tue,
          Wed: rest.Wed,
          Thu: rest.Thu,
          Fri: rest.Fri,
          Sat: rest.Sat,
          Sun: rest.Sun
        };

        let misc = {
          Takes_Reservations: rest.Takes_Reservations,
          TakeZout: rest.TakeZout,
          Accepts_Credit_Cards: rest.Accepts_Credit_Cards , 
          Accepts_Apple_Pay: rest.Accepts_Apple_Pay ,
          Good_For: rest.Good_For ,
          Parking: rest.Parking ,
          Bike_Parking: rest.Bike_Parking ,
          Wheelchair_Accessible: rest.Wheelchair_Accessible ,
          Good_For_Kids: rest.Good_For_Kids ,
          Good_For_Groups: rest.Good_For_Groups ,
          Dogs_Allowed: rest.Dogs_Allowed ,
          Attire: rest.Attire ,
          Ambience: rest.Ambience ,
          Noise_Level: rest.Noise_Level ,
          Alcohol: rest.Alcohol ,
          Outdoor_Seating: rest.Outdoor_Seating ,
          Wifi: rest.Wifi ,
          Has_TV: rest.Has_TV ,
          Caters: rest.Caters ,
          Gender_Neutral_Restrooms: rest.Gender_Neutral_Restrooms ,
          Smoking: rest.Smoking 
        };

        this.setState({
          details: details,
          hours: hours,
          misc: misc
        })
      })
      .catch((err) => {
        console.log("FAILURE!")
      })
  }

  render() {
    const hours = this.state.hours;
    const now = moment().format('H') * 60 + moment().format('m') * 1;
    const today = moment().format('ddd');
    const min = (time) => {
      return time.slice(0,5).replace(/:/, '').trim().slice(2) * 1;
    }
    const oneTime = (time) => {
      return time.slice(10).trim();
    }
    const twoTimes = (time) => {
      return time.slice(-18).replace(/\n/, '').trim();
    }    

    Object.keys(hours).map(day => {
      const open1 = parseInt(hours[day]) * 60 + min(hours[day]);
      const closed1 = (parseInt(oneTime(hours[day])) + 12) * 60 + min(oneTime(hours[day]));
      const open2 = (parseInt(twoTimes(hours[day])) + 12) * 60 + min(twoTimes(hours[day]));
      let closed2 = (parseInt(oneTime(twoTimes(hours[day]))) + 12) * 60 + min(oneTime(twoTimes(hours[day])));
      parseInt(oneTime(twoTimes(hours[day]))) + 12 === 0 ?
        closed2 += 720
        :
        '';

      day !== today ?
        ''
        :
        now >= open1 && now <= closed1 ?
          this.state.isOpen1 = true
          :
          now < open2 || hours[day].length < 25 ?
            this.state.early = true
            :
            now >= open2 && now <= closed2 ?
              this.state.isOpen2 = true
              :
              ''
    });
  

    return(
      <div>
        <div>
          <Details details={this.state.details} hours={this.state.hours} isOpen1={this.state.isOpen1} isOpen2={this.state.isOpen2}/>
        </div>
        <div>
          <Hours hours={this.state.hours} isOpen1={this.state.isOpen1} isOpen2={this.state.isOpen2} early={this.state.early}/>
        </div>
        <div>
          <Misc misc={this.state.misc}/>
        </div>
      </div>
    )
  }
}
