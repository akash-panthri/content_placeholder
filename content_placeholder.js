const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const named = document.getElementById('name')
const date = document.getElementById('date')




const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')




setTimeout(getData,2500)


function getData(){
    header.innerHTML = ' <img src="https://images.unsplash.com/photo-1690751472154-0b608942106c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="">'
    title.innerHTML = 'Superhero'
    profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    excerpt.innerHTML  = "Heroes don't fear the darkness ... they don't stop when they reach the walls ... they don't stand on the shore being scared ... they kill the fear and show the path to everyone ... they bring them to life ... they bring the revolution to say the truth in this fake world"
    named.innerHTML = 'Bhavesh Joshi'
    date.innerHTML = '28 Feb 2020'

    animated_bgs.forEach(bg=>{
        bg.classList.remove('animated-bg')
    })

    animated_bgs_text.forEach(bg=>bg.classList.remove('animated-bg-text'))
}