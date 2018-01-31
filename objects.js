var playlist = {
  Kanye: "Gold Digger"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function FromPlaylist(playlist, artistName){
  delete playlist.RickRoss;
  return playlist
}
