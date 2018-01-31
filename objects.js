var playlist = {
  kanye: "Gold Digger"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function FromPlaylist(playlist, artistName){
  delete playlist.kanye;
  return playlist
}
