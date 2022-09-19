function buyCar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve('buy a car')
        }, 1000)
    })
}

function planTrip(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Lets go to Manali`)
        }, 2000);
    })
}

function reachedManali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`reached Manali`)
        }, 2000);
    })
}    

function reachedMountain(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`reached Mountain`)
        }, 2000);
    })
}

async function fun(){
    const msg = await buyCar();
    console.log(msg);
    const msg1 = await planTrip();
    console.log(msg1)
    const msg2 = await reachedManali();
    console.log(msg2)
    const msg3 = await reachedMountain();
    console.log(msg3)

}
fun()