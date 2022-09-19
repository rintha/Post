console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);

});

const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log('wife : I have tickets');
    console.log('husband :we should go in');
    console.log('wife : no I am hungry');
    return new Promise((resolve, reject) => 
        resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t)=>{
    console.log('husband : I got some popcorn');
    console.log('husband :we should go in');
    console.log('wife : I need butter on my popcorn');
    return new Promise((resolve, reject) => 
        resolve(`${t} butter`));
})

getButter.then((t)=>console.log(t));

console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');