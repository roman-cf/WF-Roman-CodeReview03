//-----------------------------------at-the-beginning-----------------------------------------------------
var moviedata = movieJson;
window.onload = movieBoxBuilder();


// ---------------------------------MovieBox Builder------------------------------------------------------
function movieBoxBuilder(){

	for (var i=1; i < moviedata.length; i++){

		var thisID = moviedata[i].movieID;

		let mBox = document.createElement("div");
			mBox.className = "moviebox";
			mBox.id = "mBox"+ thisID;
			document.getElementById("movielist").appendChild(mBox);

			let mImg = document.createElement("img");
				mImg.className = "mPic";
				mImg.src = "./img/" + moviedata[i].picurl;
				document.getElementById("mBox"+thisID).appendChild(mImg);

			let mTitle = document.createElement("p");
				mTitle.className = "movieTitle";
				mTitle.id = "mTitle"+thisID;
				mTitle.textContent = moviedata[i].title;
				document.getElementById("mBox"+thisID).appendChild(mTitle);

			let mDscrptn = document.createElement("p");
				mDscrptn.className = "movieDscrptn";
				mDscrptn.id = "mDscrptn"+thisID;
				mDscrptn.textContent = moviedata[i].dscrptn;
				document.getElementById("mBox"+thisID).appendChild(mDscrptn);

			let lBox = document.createElement("div");
				lBox.className = "likeBox";
				lBox.id = "lBox"+thisID;
				document.getElementById("mBox"+thisID).appendChild(lBox);

				let liKes = document.createElement("p");
					liKes.className = "liKes";
					liKes.id = "liKes"+thisID;
					liKes.textContent = "Like ";
					liKes.addEventListener("click", function(e){
						Liker(e.target.id);			
					});
					document.getElementById("lBox"+thisID).appendChild(liKes);

					let thumbUp = document.createElement("i");
						thumbUp.className = "fa fa-thumbs-up";
						thumbUp.id = "liKes"+thisID;
						document.getElementById("liKes"+thisID).appendChild(thumbUp);

				let likeO = document.createElement("div");
					likeO.className = "likeO";
					likeO.id = "likeO"+thisID;
					likeO.textContent = moviedata[i].likes;
					document.getElementById("lBox"+thisID).appendChild(likeO);

	} 
}// ---------------------------------End of MovieBox Builder------------------------------------------------------

//-------------------------------Search-Function-for-Database-------------------
function positionFinder(array, attr, value) {
    for(var i = 0; i < array.length; i ++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
//--ENDE------------------------Search-Function-Database-----------------------

//--------------------------------Like-Counter---------------------------------
function Liker(e){
	btnId = Number(e.slice(5));

	var movieIdLocal = positionFinder(moviedata,"movieID",btnId);
	var likes = moviedata[movieIdLocal].likes + 1;
	
	document.getElementById("likeO"+btnId).innerHTML = likes;
	moviedata[movieIdLocal].likes = likes;
}
//--ENDE------------------------------Like-Counter------------------------------

// ab hier noch test
var testvar="genre";

function test(testvar){

	for (testvar in moviedata){
		if (moviedata[testvar] == "Abenteuer"){
		console.log(moviedata[testvar]);
		}
	}

}