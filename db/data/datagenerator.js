/*--- Restaurant Names---*/

const restaurantName = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const starter = ['Mom\'s', 'The', 'Authentic', 'Pop\'s', 'Tom\'s', 'Best', 'Delicious', 'A', 'Our', 'Urban', 'Super', 'The Best', 'Decadent']
  const middle = [' Incredible ', ' Delicious ', ' Latin ', ' Mexican ', ' Thai ', ' American ', ' Melting ', ' Sizzlin ', ' Savory ', ' Family Friendly ', ' Italian ', ' French ']
  const closer = ['Bites', 'Eats', 'Plate', 'Pot', 'Experience', 'Place', 'Saloon', 'Home-Cooking', 'Kitchen', 'Taste', 'Deli', 'Grill', 'Restaurant', 'Cuisine']
  const name = random(starter) + random(middle) + random(closer);    
  return name;
}

/* --- Hours --- */

const hours = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const hours = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']
  const times = random(hours) + ' am - '+ random(hours) + ' pm'    
  return times;
}

// /*--- Details --- */
// const detailsGen = (rid=0, results=[]) => {
//   const price = () => {
//     return Math.floor(Math.random() * 60)
//   }
//   const randomI = (detail) => {
//     return Math.floor(Math.random() * detail.length);
//   }

//   const Today = ''
//   const price1 = price()
//   const price2 = Math.floor(price1 * (Math.random() + 1))
//   const Price_Range = '$' + price1 + '-' + price2
//   const health = ['A', 'B', 'C', 'D', 'E', 'F']

//   const details = {rid, Today, Price_Range, Health_Score: health[randomI(health)]}

//   if (rid < 10000001) {
//     results.push(details)
//     rid += 1
//     detailsGen(rid, results)
//   }

//   return results;
// }

// /*-- Miscellenous --*/
// const miscGen = (rid = 0, results = []) => {
//   const include = () => {
//     return Math.floor(Math.random() * 5)
//   }

//   const random = (choices) => {
//     return Math.floor(Math.random() * choices.length)
//   }

//   const genAns = ['Yes', 'No', 'Yup', 'Nope', 'Yes', 'No', 'Maybe', 'Yes', 'Maybe', 'No', 'Possibly', 'No', 'Possibly', 'Maybe', 'Yes', 'You Wish', 'Yup', 'Nope', 'Yes', 'No', '?', 'Yes', 'None', 'Yes', 'Yes', 'None', 'None' ];

//   const data = ['Takes_Reservations', 'TakeZout', 'Accepts_Credit_Cards', 'Accepts_Apple_Pay', 'Good_For', 'Parking', 'Bike_Parking', 'Wheelchair_Accessible', 'Good_For_Kids', 'Good_For_Groups', 'Dogs_Allowed', 'Attire', 'Ambience', 'Noise_Level', 'Alcohol', 'Outdoor_Seating', 'Wifi', 'Has_TV', 'Caters', 'Gender_Neutral_Restrooms','Smoking']

//   const misc = {rid}

//   data.map(item => {
//     if (include() < 3 ) {
//       misc[item] = genAns[random(genAns)]
//     }
//   })

//   if (rid < 10000001) {
//     results.push(misc)
//     rid += 1
//     miscGen(rid, results)
//   }

//   return results
// }


module.exports = {
  restaurantName,
  hours
};