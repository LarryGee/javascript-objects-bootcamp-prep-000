var playlist = {
  Kanye: 'Gold Digger'
}

function updatePlaylist(playlist, artistName) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}