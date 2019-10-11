var moviedata = movieJson;

window.onload = movieBoxBuilder();

 // ---------------------------------MovieBox Builder------------------------------------------------------
function movieBoxBuilder(){

	for (var i=1; i < moviedata.length; i++){

		let mBox = document.createElement("div");
			mBox.className = "moviebox";
			mBox.id = "mBox"+ i;
			document.getElementById("movielist").appendChild(mBox);

			let mImg = document.createElement("img");
				mImg.className = "mPic";
				mImg.src = "./img/" + moviedata[i].picurl;
				document.getElementById("mBox"+i).appendChild(mImg);

			let mTitle = document.createElement("p");
				mTitle.className = "movieTitle";
				mTitle.id = "mTitle"+i;
				mTitle.textContent = moviedata[i].title;
				document.getElementById("mBox"+i).appendChild(mTitle);

			let mDscrptn = document.createElement("p");
				mDscrptn.className = "movieDscrptn";
				mDscrptn.id = "mDscrptn"+i;
				mDscrptn.textContent = moviedata[i].dscrptn;
				document.getElementById("mBox"+i).appendChild(mDscrptn);

			let lBox = document.createElement("div");
				lBox.className = "likeBox";
				lBox.id = "lBox"+i;
				document.getElementById("mBox"+i).appendChild(lBox);

				let liKes = document.createElement("p");
					liKes.className = "liKes";
					liKes.id = "liKes"+i;
					liKes.textContent = "Like ";
					liKes.addEventListener("click", function(e){
						Liker(e.target.id);			
					});
					document.getElementById("lBox"+i).appendChild(liKes);

					let thumbUp = document.createElement("i");
						thumbUp.className = "fa fa-thumbs-up";
						thumbUp.id = "liKes"+i;
						document.getElementById("liKes"+i).appendChild(thumbUp);

				let likeO = document.createElement("div");
					likeO.className = "likeO";
					likeO.id = "likeO"+i;
					likeO.textContent = moviedata[i].likes;
					document.getElementById("lBox"+i).appendChild(likeO);

	} 
}// ---------------------------------End of MovieBox Builder------------------------------------------------------

// ab hier noch test

function Liker(e){
	btnId = Number(e.slice(5));
	var likes = moviedata[btnId].likes +1;
	moviedata[btnId].likes =  likes;
	document.getElementById("likeO"+btnId).innerHTML = likes;
	//console.log(btnId);
	test();
}

var testvar="genre";

function test(testvar){

	for (testvar in moviedata){
		if (moviedata[testvar] == "Abenteuer"){
		console.log(moviedata[testvar]);
		}
	}

}