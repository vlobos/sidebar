const restGen = (rid=0, results=[]) => {

  const adjOrNo = Math.floor(Math.random() * 2);

  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const starter = ['Lord Voldemort\'s', 'The', 'Deathly', 'Death Eater\'s', 'Tom\'s', 'Riddle\'s', 'Tom Riddle\'s', 'Slytherin', 'Dementor\'s', 'Dark Wizard\'s']

  const adj = [' Unforgiveable', ' Deadly', ' Deathly', ' Dark']

  const middle = [' Horcrux ', ' Dark Mark ', ' Elder Wand ', ' Imperius Curse ', ' Killing Curse ', ' Cruciatus Curse ', ' Prophecy ', ' Philosopher\'s Stone ', ' Curse ']

  const closer = ['of the Dark Arts', 'of Azkaban', 'of Revenge', 'of the Pure Blood', 'that Shall not be Named', 'of the Dark Lord']
  
  const name = random(starter) + random(adj) + random(middle) + random(closer);    

  const rest = { name }

  if (rid < 10000000) {
    results.push(rest)
    rid += 1
    restGen(rid, results)
  }
  return results;
}

/* --- Hours Gen --- */

const hoursGen = (rid=0, results=[]) => {
   
  const hours = { rid }
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  if (rid < 10000001) {
    days.map(day => {
     
      const timesNum = Math.floor(Math.random() * 2);
      let hours1 = Math.floor(Math.random() * 8 + 5);
      let hours2 = (num) => {
        return num === 0 ? Math.floor(Math.random() * 6 + 7) : Math.floor   (Math.random() * 6)
      }
      hours2 = hours2(timesNum);
      if (hours2 === 0) hours2 = 12;

      let mins1 = (hour1, hour2) => {
        return hour1 === hour2 ? Math.floor(Math.random() * 59) : Math.floor    (Math.random() * 60)
      }
      mins1 = mins1(hours1, (hours2 + 12));

      let mins2 = (hour1, hour2, min) => {
        return hour1 === hour2 && Math.floor(Math.random() * 60) < min ? mins +     (Math.floor(Math.random() * (60 - mins))) : Math.floor(Math.random()  * 60)  ;
      }

      mins2 = mins2(hours1, (hours2 + 12), mins1)

      if (mins2 < 10) {
        mins2 = '0' + mins2;
      }

      if (mins1 < 10) mins1 = '0' + mins1;
      if (hours1 === 12) {
        hours1 = hours1.toString() + ':' + mins1 + ' pm - ';
      } else {
        hours1 = hours1.toString() + ':' + mins1 + ' am - ';
      }

      
      let hours3 = Math.floor(Math.random() * 5 + 4)
      let hours4 = (hour) => {
        return Math.floor(Math.random() * 6 + 7) < hour ? hour + Math.floor   (Math.random() * (12 - hour)) : Math.floor(Math.random() * 6 + 7)
      } 
      hours4 = hours4(hours3);

      let mins3 = (hour3, hour4) => {
        return hour3 === hour4 ? Math.floor(Math.random() * 59) : Math.floor    (Math.random() * 60);
      }

      mins3 = mins3(hours3, hours4);

      let mins4 = (hour3, hour4, min) => {
        return hour3 === hour4 && Math.floor(Math.random() * 60) < min ? min +    Math.floor(Math.random() * (60 - min)) : Math.floor(Math.random() * 60);
      }

      mins4 = mins4(hours3, hours4, mins3);

      if (mins3 < 10) mins3 = '0' + mins3;
      if (mins4 < 10) mins4 = '0' + mins4; 

      let time1 = hours1 + hours2 + ':' + mins2 + ' pm'; 
      if (timesNum === 0 && hours2 === 12) time1 = time1.slice(0, -2) + 'am'
      let time2 = hours3.toString() + ':' + mins3 + ' pm - ' + hours4 + ':' +     mins4 + ' pm';
      if (hours4 > 11) time2 = time2.slice(0,-2) + 'am';
      if (timesNum === 1) {
        time1 = time1 + '\n' + time2;
      }
     hours[day] = time1
    })
    results.push(hours);
    rid += 1
    hoursGen(rid, results)
  }  
  return results
}

/*--- Details --- */
const detailsGen = (rid=0, results=[]) => {
  const price = () => {
    return Math.floor(Math.random() * 60)
  }
  const randomI = (detail) => {
    return Math.floor(Math.random() * detail.length);
  }

  const Today = ''
  const price1 = price()
  const price2 = Math.floor(price1 * (Math.random() + 1))
  const Price_Range = '$' + price1 + '-' + price2
  const health = ['A', 'B', 'C', 'D', 'E', 'F']

  const details = {rid, Today, Price_Range, Health_Score: health[randomI(health)]}



  if (rid < 10000001) {
    results.push(details)
    rid += 1
    detailsGen(rid, results)
  }

  return results;
}

/*-- Miscellenous --*/
const miscGen = (rid = 0, results = []) => {
  const include = () => {
    return Math.floor(Math.random() * 5)
  }

  const random = (choices) => {
    return Math.floor(Math.random() * choices.length)
  }

  const genAns = ['Yes', 'No', 'Yup', 'Nope', 'Yes', 'No', 'Maybe', 'Yes', 'Maybe', 'No', 'Possibly', 'No', 'Possibly', 'Maybe', 'Yes', 'You Wish', 'Yup', 'Nope', 'Yes', 'No', '?', 'Yes', 'None', 'Yes', 'Yes', 'None', 'None' ];


  const data = ['Takes_Reservations', 'TakeZout', 'Accepts_Credit_Cards', 'Accepts_Apple_Pay', 'Good_For', 'Parking', 'Bike_Parking', 'Wheelchair_Accessible', 'Good_For_Kids', 'Good_For_Groups', 'Dogs_Allowed', 'Attire', 'Ambience', 'Noise_Level', 'Alcohol', 'Outdoor_Seating', 'Wifi', 'Has_TV', 'Caters', 'Gender_Neutral_Restrooms','Smoking']

  const misc = {rid}

  data.map(item => {
    if (include() < 3 ) {
      misc[item] = genAns[random(genAns)]
    }
  })

  if (rid < 10000001) {
    results.push(misc)
    rid += 1
    miscGen(rid, results)
  }

  return results
}

const restaurantData = restGen(0,[]);
const hoursData = hoursGen(0,[]);
const detailsData = detailsGen(0,[]);
const miscData = miscGen(0,[]);

module.exports = {
  restaurant,
  hours,
  details,
  misc
};