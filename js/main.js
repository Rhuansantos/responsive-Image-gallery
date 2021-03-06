// importing library
import Unsplash, {
    toJson
} from 'unsplash-js';


const unsplash = new Unsplash({
    applicationId: "4cdc291407264ed612ccd71b42f2c2d5a587c118b79bf17cd74d039adbd76695",
    secret: "528318694d98fa55275e5b50e640e0e11ab6377dd7b34949a1d3186d065b4fac",
    callbackUrl: "/photos/random"
});



function photos() {

    unsplash.photos.getRandomPhoto({
            featured: true,
            count: 12
        })
        .then(toJson)
        .then(json => {
            console.log(json);
            view(json);
        });


}

function view(data) {

    let gallery = document.getElementById('gallery');
    let template = null;
    let w320 = "?w=320";
    let w640 = "?w=640";
    let w800 = "?w=800";




    for (let i = 0; i < data.length; i++) {

        console.log(i);

        template = `
			
			<li class="photo">

			<img src="${data[i].urls.raw}"

               srcset=" ${data[i].urls.raw + w320} 320w,
                        ${data[i].urls.raw + w640} 620w,
                        ${data[i].urls.raw + w800} 800w"
                alt="">

                <ul>
					<li><img  class="icons" src="assets/user-icon.svg" alt=""><h2>${data[i].user.first_name}</h2></li>
					<li><img class="icons" src="assets/heart.svg" alt=""><h2>${data[i].user.total_likes}</h2></li>
				</ul>

			</li>



		`;

        gallery.insertAdjacentHTML('beforeend', template);

    }

}


 document.getElementById('logo').addEventListener('click', (event) => {

 	let photos = document.getElementsByClassName('photos');


 })

photos();


