const posts = [
    {title : `Post One` , body : `This is post one`, createdAt: new Date().getTime()},
    {title : `Post Two` , body : `This is post two`,createdAt: new Date().getTime()}
];
let interValId =0

function getPost(){
    clearInterval(interValId);
    interValId = setInterval(() => {
        let output = '';
        for( let i = 0;i<posts.length;i++){
            output+= `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)}</li>`
        }
        console.log('timer running id = ',interValId)
        document.body.innerHTML = output;
    }, 1000);
        
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime()});
        callback();
    }, 2000);
}

function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime()});
        callback();
    }, 6000);
}

getPost();
createPost({title:`Post Three` ,body:`This is post three`},getPost);
createPost({title:`Post Four` ,body:`This is post four`},getPost);


var timer;
var count = 0;
function lastEdited(){
    counr = 0;
    clearInterval(timer)
    timer = setInterval(() => {
        count++;
        console.log(count)
    }, 5000);
}
