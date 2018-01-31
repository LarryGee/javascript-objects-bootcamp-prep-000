var playlist = {
  RickRoss: 'Ashton Martin Music'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

