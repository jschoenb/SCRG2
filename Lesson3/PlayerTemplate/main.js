'use strict';

let playlist;
let id = 1;

window.onload = () => {
    let buttons = document.
        querySelectorAll("input[type='button']");
    for(let button of buttons){
        button.onclick = (e) => {
            addPieceOfMusic(e.currentTarget);
        }
    }

    fetch("playlist.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.table(data.elements);
        playlist = new Playlist(data.name);
        for(let element of data.elements){
            let {id,title,interpret,type} = element;
            if(type ==="album"){
                let album = new Album(id,title,interpret);
                for(let song of element.songs){
                    let {id, title,interpret,duration} = song;
                    album.addSong(new Song(id,title,interpret,duration));
                }
                playlist.addPieceOfMusic(album);
            } else { //song
                let song = new Song(id,title,interpret,element.duration);
                playlist.addPieceOfMusic(song);
            }
        }
        playlist.printHTMLTable(document.querySelector("#playlist"));
    })
}

function addPieceOfMusic(button){
    //Song
    let title = document.querySelector("#title").value;
    let interpret = document.querySelector("#interpret").value;
    let duration = Number(document.querySelector("#duration").value);
    if(button.id==="addSong"){
        let song = new Song(id,title,interpret,duration);
        playlist.addPieceOfMusic(song);
        song.printHTMLTable(document.querySelector("#playlist"));
    } else if (button.id==="addAlbum"){
        let album = new Album(id,title,interpret);
        playlist.addPieceOfMusic(album);
        album.printHTMLTable(document.querySelector("#playlist"));
    } else if (button.id==="addSongToAlbum"){
        let song = new Song(id,title,interpret,duration);
        let albumId = document.querySelector("#albums").value;
        console.log(albumId);
        let album = playlist.getAlbum(albumId);

        console.log(album);

        album.addSong(song);
        album.updateDuration();
    }
    ++id;
}