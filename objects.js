var playlist = {
  Kanye: "Gold Digger"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function deleteFromPlaylist(playlist, artistName){
  delete artistName.playlist
  return playlist;
}
