const posts = [
    {title : `Post One` , body : `This is post one`},
    {title : `Post Two` , body : `This is post two`}
];


function getPost(){
    setTimeout(() => {
        let output = '';
           posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
           });
        document.body.innerHTML = output;
    }, 1000);
        
}

function createPost(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('error:something went wrong')
            }
            
        }, 2000);
       
    });
}
function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout( () =>{
            if(posts.length>0){
                const lastElement = posts.pop()
                resolve(lastElement);
            }else{
                reject('array is empty now');
            }
        },1000);
    });
}

createPost({title:`Post Three`,body:`This is post three`})
createPost({title:`Post Four`,body:`This is post four`})

.then(()=>{
    getPost()
    deletePost().then((deleteElement)=>{
        console.log(deleteElement)
        getPost();
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                getPost();
                deletePost().then(()=>{
                    getPost();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('Inside catch block',err)
                })
            }).catch((err)=>{})
            }).catch((err)=>{})
        }).catch((err)=>{})
    })
})
.catch(err => console.log(err))
