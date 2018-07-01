const faker = require('faker');
const fs = require('fs');

/*==== DATA GENERATORS ====*/

/*--- Restaurant Name Data ---*/
let restaurantName = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const starter = ['Mom\'s', 'The', 'Authentic', 'Pop\'s', 'Tom\'s', 'Best', 'Delicious', 'A', 'Our', 'Urban', 'Super', 'The Best', 'Decadent']
  const middle = [' Incredible ', ' Delicious ', ' Latin ', ' Mexican ', ' Thai ', ' American ', ' Melting ', ' Sizzlin ', ' Savory ', ' Family Friendly ', ' Italian ', ' French ']
  const closer = ['Bites', 'Eats', 'Plate', 'Pot', 'Experience', 'Place', 'Saloon', 'Home-Cooking', 'Kitchen', 'Taste', 'Deli', 'Grill', 'Restaurant', 'Cuisine']
  const name = random(starter) + random(middle) + random(closer);    
  return name;
}

/*--- Hours Data ---*/
const hours = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const hours = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']
  const times = random(hours) + ' am - '+ random(hours) + ' pm'    
  return times;
}

/* ---Details ---*/

const health = () => {
  const health = ['A', 'B', 'C', 'D', 'E', 'F'];
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return random(health);
}

const priceRange = () => {
  const price = () => {
    return Math.floor(Math.random() * 60)
  }
  const price1 = price()
  const price2 = Math.floor(price1 * (Math.random() + 1))
  const finalprice = '$' + price1 + '-' + price2
  return finalprice;
}

/*--- Misc ---*/
const yesNo = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const answer = ['Yes', 'No']
  return random(answer);
}

const goodFor = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const answer = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Happy Hour']
  return random(answer);
}

const attire = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const answer = ['Casual', 'Formal', 'Semi-casual']
  return random(answer);
}

const ambience = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const answer = ['Casual', 'Trendy', 'Classy', 'Hipster']
  return random(answer);
}

const noise = () => {
  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const answer = ['Loud', 'Quiet', 'Moderate']
  return random(answer);
}

/*=== STREAMS ===*/

// let restStream = fs.createWriteStream('data/restdata.csv', {'flags': 'a'});
// let detailsStream = fs.createWriteStream('data/detailsdata.csv', {'flags': 'a'});
// let hrsStream = fs.createWriteStream('data/hrsdata.csv', {'flags': 'a'});
// let miscStream = fs.createWriteStream('data/miscdata.csv', {'flags': 'a'});
let sidebarStream = fs.createWriteStream('data/sidebardata.csv', {'flags': 'a'});


// /*--Restaurant write--*/

// const writeMisc = (writer) => {
//   let i = 10000000;
//   let j = 1
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       j++;
//       if (i === 0) {
//         // last time!
//         writer.write(`${restaurantName()}\n`);
//         console.log('done');
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(`${restaurantName()}\n`);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeMisc(restStream)

// /*--Details write--*/

// const writeMisc = (writer) => {
//     let i = 10000000;
//     let j = 1
//     function write() {
//       let ok = true;
//       do {
//         i--;
//         j++;
//         if (i === 0) {
//           // last time!
//           writer.write(`${i}, ${priceRange()}, ${health()}\n`);
//           console.log('done');
//         } else {
//           // see if we should continue, or wait
//           // don't pass the callback, because we're not done yet.
//           ok = writer.write(`${i}, ${priceRange()}, ${health()}\n`);
//         }
//       } while (i > 0 && ok);
//       if (i > 0) {
//         // had to stop early!
//         // write some more once it drains
//         writer.once('drain', write);
//       }
//     }
//     write();
//   }
  
//   writeMisc(detailsStream)

// /*--Hours write--*/

// const writeMisc = (writer) => {
//   let i = 10000000;
//   let j = 1
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       j++;
//       if (i === 0) {
//         // last time!
//         writer.write(`${i}, ${hours()}, ${hours()}, ${hours()}, ${hours()}, ${hours()}, ${hours()}, ${hours()}\n`);
//         console.log('done');
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(`${i}, ${hours()}, ${hours()}, ${hours()}, ${hours()}, ${hours()}, ${hours()}, ${hours()}\n`);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeMisc(hrsStream)

// /*--Misc write--*/

// const writeMisc = (writer) => {
//   let i = 10000000;
//   let j = 1
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       j++;
//       if (i === 0) {
//         // last time!
//         writer.write(`${j},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${goodFor()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${attire()},${ambience()},${noise()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()}\n`);
//         console.log('done');
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(`${j},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${goodFor()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${attire()},${ambience()},${noise()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()}\n`);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeMisc(miscStream)

/*--- Sidebar Data Write for MariaDB and non-relational db ---*/

const writeMisc = (writer) => {
    let i = 10000000;
    let j =1
    function write() {
      let ok = true;
      do {
        i--;
        j++;
        if (i === 0) {
          writer.write(`${j},${restaurantName()},${priceRange()},${health()},${hours()},${hours()},${hours()},${hours()},${hours()},${hours()},${hours()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${goodFor()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${attire()},${ambience()},${noise()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()}\n`);
          console.log('done');
        } else {
          ok = writer.write(`${j},${restaurantName()},${priceRange()},${health()},${hours()},${hours()},${hours()},${hours()},${hours()},${hours()},${hours()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${goodFor()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${attire()},${ambience()},${noise()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()},${yesNo()}\n`);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }
  
  writeMisc(sidebarStream);

  //for mariadb, datagenerator does not generate id. 