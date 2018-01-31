var playlist = {
  Kanye: "Gold Digger"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete artistName.Playlist
  return playlist;
}
