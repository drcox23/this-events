//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navContents = document.getElementsByClassName("navi");

for(var i = 0; i<navContents.length; i++){
    navContents[i].addEventListener('click', showContents);
}

function showContents() {
    console.log('test');
    var navItem = this.querySelectorAll('.inner')[0];
    if(navItem.style.display === 'block'){
        navItem.style.display = 'none';
    }else{
        navItem.style.display = 'block';
    }
} 



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var secretMenu = document.getElementsByClassName("name");

for(var i = 0; i<secretMenu.length; i++){
    secretMenu[i].addEventListener('click', showContents2);
}

function showContents2() {
    console.log('test');
    var navItem = this.querySelectorAll('.menu')[0];
    if(navItem.style.display === 'block'){
        navItem.style.display = 'none';
    }else{
        navItem.style.display = 'block';
    }
} 


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
