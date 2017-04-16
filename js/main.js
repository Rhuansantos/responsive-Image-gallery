// importing library
import Unsplash, { toJson } from 'unsplash-js';


const unsplash = new Unsplash({
  applicationId: "4cdc291407264ed612ccd71b42f2c2d5a587c118b79bf17cd74d039adbd76695",
  secret: "528318694d98fa55275e5b50e640e0e11ab6377dd7b34949a1d3186d065b4fac",
  callbackUrl: "/photos/random"
});



function photos() {

  unsplash.photos.getRandomPhoto({ featured: true, count: 2})
    .then(toJson)
    .then(json => {
      console.log(json);
    });
}

function view(){
	let gallery = document.getElementById('gallery');
	let tempalte = null;


	for(let i = 0; i < 12; i++){

		console.log(i);
	
		tempalte = `
			
			<li><img src="https://placeholdit.imgix.net/~text?txtsize=80&txt=D&w=550&h=550"></li>

		`;

			gallery.insertAdjacentHTML('beforeend', tempalte);

	}



	// photos();

}

view();

