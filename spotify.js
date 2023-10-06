const playlistData = ['Song 1', 'Song 2', 'Song 3', 'Song 4'];

function populatePlaylist() {
  const playlistElement = document.querySelector('.playlist ul');
  playlistElement.innerHTML = '';

  playlistData.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${song}`;
    playlistElement.appendChild(li);
  });
}

function handleSearch() {
  const searchInput = document.querySelector('.header input');
  const searchTerm = searchInput.value.toLowerCase();

  console.log('Searching for:', searchTerm);
}

const searchInput = document.querySelector('.header input');
searchInput.addEventListener('input', handleSearch);

populatePlaylist();
