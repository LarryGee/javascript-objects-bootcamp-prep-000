var playlist = {
  RickRoss: 'ashton martin music'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function deletFromPlaylist(playlist, artistName, songTitle) {
  delete aristName.playlist; 
}