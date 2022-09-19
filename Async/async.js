console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const preMovie = async ()=>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('ticket'), 3000);
    
    });

    const getPopcorn = new Promise((resolve, reject) => 
    resolve(`popcorn`));

    const addButter = new Promise((resolve, reject) => 
    resolve(`Butter`));

    const getColdDrinks = new Promise((resolve, reject) => 
    resolve(`Cold drinks`));

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife : I have the ${ticket}`);
    console.log('husband :we should go in');
    console.log('wife : no I am hungry');

    let popcorn = await getPopcorn;
    
    console.log(`husband : I got some ${popcorn}`);
    console.log('husband :we should go in');
    console.log('wife : I need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband : I got some ${butter} on popcorn`);
    console.log('husband : anything else darling?');
    console.log('wife : can we have  some cold drinks');

    let drinks = await getColdDrinks;
    console.log('wife : lets got we are getting late');
    console.log('husband:thank you for the reminder');
    
    return ticket
}
preMovie().then((m)=>console.log(`person3:shows the ${m}`));

console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');