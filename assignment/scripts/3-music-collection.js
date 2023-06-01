console.log('***** Music Collection *****')

// Part 3 - Building a Music Collection
// Update the 3-music-collection.js file to do the following:

// While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

// Required Features
// When testing your functions, write all tests in the JavaScript file!


// Create a variable collection that starts as an empty array.
// Add a function named addToCollection. This function should:
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Add the new object to the end of the collection array
// Return the newly created object
const collection=[];
console.log( 'My collection is:', collection );

function addToCollection( title, artist, yearPublished ){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push( album );
    return album;
}

// Test the addToCollection function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.
console.log( 'Testing addToCollection' );

console.log( addToCollection( 'Palomino', 'Trampled by Turtles', 2010 ));
console.log( addToCollection( 'Trouble', 'Trampled by Turtles', 2007 ));
console.log( addToCollection( 'Revolver', 'The Beatles', 1966 ));
console.log( addToCollection( 'Sgt. Peppers Lonely Hearts Club', 'The Beatles', 1966 ));
console.log( addToCollection( 'Grateful Dead', 'Grateful Dead', 1971));
console.log( addToCollection( 'Californication', 'Red Hot Chili Peppers', 1999));

console.log( 'My collection is now:', collection );


// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
function showCollection( array ){
    console.log( 'There are', array.length - 1, 'items in the array' );
    for( let album of array ){
        console.log( `${album.title} by ${album.artist} published in ${album.yearPublished}` );
    }
}
// Test the showCollection function.
showCollection(collection);


// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
function findByArtist( artist ){
    let artistArray = [];
    for( let album of collection ){
        if( artist === album.artist ){
            artistArray.push( album );
        }
    }
    return artistArray;
}

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log( 'in findByArtist - expect 2 matches', findByArtist('The Beatles'));
console.log( 'in findByArtist - expect empty', findByArtist( 'Dave Brubeck'));
