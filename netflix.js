let conf = confirm('Are You 18+ ?');
console.log(conf);

let search = document.getElementById('btn');
search.addEventListener('click',run);

function run()
{
    console.log('Clicked the Search Button');
}

window.addEventListener('keydown',function run2(Event){
    console.log(Event.code);
})