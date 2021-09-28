var images = [
    "https://i.pinimg.com/originals/db/f5/08/dbf508e27715f8ed3730bec349092789.jpg",
    "https://i.pinimg.com/originals/e0/b2/83/e0b2830b825d53dd396f322694295271.jpg",
    "https://thumbs.dreamstime.com/b/angry-mother-design-style-character-vector-illustration-89494535.jpg"
];
var names = [
    "Chanchal Chhabra",
    "Sanjeev,Chaitanya,Vivaan Chhabra",
    "Preeti Chhabra"
];
var i=0;
function update(){
    i++;
    var Numbers_of_family_member_in_array = 14;
    if(i > Numbers_of_family_member_in_array){
        i=0
    }
    var updatedimage=images[i];
    var updatedname=names[i];
document.getElementById("family_member_image").src = updatedimage;
document.getElementById("family_member_name").innerHTML = updatedname;
}