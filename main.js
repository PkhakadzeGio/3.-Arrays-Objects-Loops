//1.
//ForEach ით ვერ გავაკეთე თუ კეთდება თუ შეიძლება რომ ამიხსნათ

const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
  ];
  
  function findYoungest(users){
    let youngestUser = users[0];
    for (let i = 1; i < users.length; i++){
      if (users[i].age < youngestUser.age){
        youngestUser = users[i];
      }
    }
    return youngestUser.name;
  }
  
  const youngestUserName = findYoungest(users);
  console.log('Youngest User is ' + youngestUserName);

//2.ეს თუ სწორია საერთოდ :))

function objectFunc(user) {
    let copiedUser = {};
    for (let a in user) {
        copiedUser[a] = user[a];
    }
    return copiedUser;
  }
  
  const user = {
    firstName: "Giorgi",
    lastName: "Pkhakadze",
    age: 29,
    email: "email@email.com"
  };
  
  const copiedUser = objectFunc(user);
 
  console.log(copiedUser);

//3.

function randomNum () {
    return Math.floor(Math.random() * 6) ;
}

const result = randomNum();
console.log(result);

function play() {
    let A = 0;
    let B= 0;
    
    while (A !== 3 && B !== 3) {
      let randomNum = Math.floor(Math.random() * 6) + 1;
      if (randomNum === 1) {
        A++;
      } else if (randomNum === 2) {
       B++;
      }
    }
    
    if (A === 3) {
      console.log("A მოიგო თამაში") ;
    } else {
      console.log("B მოიგო თამაში");
    }
  }

  console.log(play());

