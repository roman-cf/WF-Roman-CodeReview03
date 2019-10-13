//-----------------------------------at-the-beginning-----------------------------------------------------
var moviedata = movieJson;
var strGenre = "all";
selectOptionValues();

	//-------------------------------------Genre-Selctor-creating------------------------------------------------
	var arrSelect = [["all","Abenteuer","Drama","Krimi"],["Genre","Abenteuer","Drama","Krimi"]];
	let dropDown = document.createElement("select");
		dropDown.id = "sorter2";
		dropDown.addEventListener("change",genreSort,false);
		document.getElementsByTagName("nav")[0].appendChild(dropDown);
			for (i=0; i<arrSelect[0].length;i++){
				var option = document.createElement("option");
					option.value = arrSelect[0][i];
					option.textContent = arrSelect[1][i];
					dropDown.appendChild(option);
			}
	//---ENDE--------------------------------Genre-Selctor-creating------------------------------------------------

document.getElementById("sorter").addEventListener("click",firstSort,false);
window.onload = movieBoxBuilder(strGenre);
//---End of beginning--------------------------------------------------------------------------------------

// ---------------------------------MovieBox Builder------------------------------------------------------
function movieBoxBuilder(strGenre){
	const myNode = document.getElementById("movielist");
	myNode.innerHTML = ''
		 
	for (var i=1; i < moviedata.length; i++){

		var thisID = moviedata[i].movieID; //for later usage its important to have an unique id to hold the value of likes after sorting an refresh the site

		if (strGenre == "all"){
			mBoxElementBuilder(thisID,i);
		}else if (moviedata[i].genre == strGenre){
			mBoxElementBuilder(thisID,i);
		}
	} 
}
// ---------------------------------End of MovieBox Builder------------------------------------------------------

//-------------------------------MovieBox Element Builder-------------------------
function mBoxElementBuilder(thisID,i){
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
//-------------------------------End of MovieBox Element Builder-------------------

//-------------------------------Search-Function-for-Database-------------------
function positionFinder(obj, attr, value) {
    for(var i = 0; i < obj.length; i ++) {
        if(obj[i][attr] === value) {
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

//--------------------------------Sort Function----------------------------------
function firstSort() {
	moviedata.sort(function(a, b){
		return a.likes-b.likes
	});
	movieBoxBuilder(document.getElementById("sorter2").value);
}
//--ENDE------------------------------Sort Function-------------------------------

//--------------------------------Genre Event Function----------------------------
function genreSort(){
	var strGenre = document.getElementById("sorter2").value;	
	movieBoxBuilder(strGenre);
	//console.log(strGenre);
}
//--ENDE--------------------------Genre Event Function----------------------------


//-------test-------------------------------------------

function selectOptionValues(){
	var selectArr = ["all"];

	for(var i=0; i < moviedata.length; i ++){
		
		var check = moviedata[i].genre;
		
		for(var j=0; j < selectArr.length; j ++){
			console.log("schleife zwei, runde "+j);
			console.log(selectArr[j]);
			console.log("check: "+check);

			if(selectArr[j]!=check){
			selectArr.push(check);
				
			};
		};

	};
	console.log(selectArr);

}