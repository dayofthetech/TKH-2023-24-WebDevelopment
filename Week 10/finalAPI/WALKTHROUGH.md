https://www.youtube.com/watch?v=bznJPt4t_4s

This video starts by incorporating the main tiles and tile,
style those first to display in page.

body {
    backgroun: gray
    margin: 0;
}

the class tiles is a div in html
.titles {
    margin:48px auto;
    width: max-content;
    display: grid;
    grid-template-column: repeat(4, 100px);
    gap: 16px;
}

class of individual tile
.title {
    height: 100px;
    background: black
    border: 5 px solid gray
    cursor: pointer
}


min 5:30 working on js
to duplicate the array, the spread opeator was use, to the example was
const array = ['one', 'two', 'three']
const arrayDuplicate = [...array, ...array]

for my project I will have to display that array of items twice,


min 10 rendering tiles
at building the tiles, for loop was used, and the count is tileCount.lenght in this case 16

to make sure there are only two copies of each item,

    splice(randomIndex, 1);

so i will have to have my items saved in an array, perform the iteration and then item = mainlist[randomindex]


