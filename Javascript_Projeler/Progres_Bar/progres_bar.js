let userTxt = document.querySelector(".user-text")
let userImg = document.querySelector(".user-img")
let username = document.querySelector(".username")
let job = document.querySelector(".job")


let user = [
    {
        name: 'Mehmet KILIÇ',
        position: 'IT',
        photo: '/img/mehmet.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti quidem, ut commodi quas, architecto, soluta aliquid minus dolorem sint consectetur in iure amet eaque doloribus. Tempore voluptatem sint iste.',   
    
    },
    {
        name: 'Berkan ÖZMEN',
        position: 'IT',
        photo:'/img/berkan.png',
        text:'Lorem Ipsum dolor sit amet, consectetur adipiscing elit nilibrium et just euismod tempor inv sapien soluta nobis et just euismod tempor inviw',  
    
    },
    {
        name: 'Sude AKÇETUTAN',
        position: 'IT',
        photo:'/img/sude.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium harum est nulla perferendis placeat expedita ad deleniti fugit eveniet impeditdi.',
    
    },
    {
        name: 'Ahmet İLÇİ',
        position: 'IT',
        photo:'/img/ahmet.png',
        text: 'lorem Ips et et ullamcorper et ullamcorper et ullamcorper et ullamcorper et ullamcorper et ullam correlation null hypothesis et et et et et et et et et et et et et et et et  ',
    
    },
    
]

let idx = 1

function updateUser() {
    let {name, position, photo, text} = user[idx]
    username.innerHTML = name
    job.innerHTML = position
    userImg.src=photo
    userTxt.innerHTML = text

idx++

if(idx > user.length - 1) {
    idx = 0
    }
}

setInterval(updateUser, 10000)