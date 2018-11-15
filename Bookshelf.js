var book = [
    {
    title: "Ricegum's Little Sis",
    stars: 4,
    author: "Lil Tay"
    },
    {
        title: "The Trump Dealer",
        stars: 1,
        author: "Not Obama"
    },
];
for (var i = 0; i < book.length; i++){
    fill(214, 255, 219);
    rect(i*96+10, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, i*96+10, 26, 90, 100);
    text(book[i].author, i*96+10, 72, 90, 100);
}

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw one book

fill(0, 0, 0);

for (var i = 0; i < book[0].stars; i++) {
    image(getImage("cute/Star"), 13 + i * 20, 90, 20, 30);
}
for (var i = 0; i < book[1].stars; i++) {
    image(getImage("cute/Star"), 107 + i * 17, 90, 20, 30);
}
noFill();
ellipse(255,93,37,39);
fill(330, 7, 7);
rect(206,69,58,49,98);
