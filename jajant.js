function Peli(name , genre , year) {
    this.name = name;
    this.genre = genre;
    this.meme = year;
}
var Peli1 = new Peli("Morbius", "Basura", 2022);
var Peli2 = new Peli("Morbius 2: it's morbin time", "Basura", 2024);
var Peli3 = new Peli("The Emoji Movie", "Basura", 2017);
var VideoClub = [Peli1, Peli2, Peli3];
console.log(Peli1,Peli2);
console.log(Peli2);
console.log(Peli3);
console.log(VideoClub);
console.log(VideoClub[2]);
