var playlist = {
  Kanye: 'Gold Digger'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(Kany: 'Gold Digger') {
  delete playlist.artistName;
  return playlist;
}