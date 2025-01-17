export const libraryToName = (library, location = 'us') => {
  const mapping = {
    mixed: location.toUpperCase() + ' TOP 100',
    applemusic: 'Apple Music',
    lastfm: 'LastFm',
    spotify: 'Spotify',
    youtube: 'YouTube'
  };

  return mapping[library] || 'Mixed Tape';
};

export const libraryToIconName = (library) => {
  const mapping = {
    mixed: 'music',
    applemusic: ['fab', 'itunes-note'],
    lastfm: ['fab', 'lastfm'],
    spotify: ['fab', 'spotify'],
    youtube: ['fab', 'youtube']
  };

  return mapping[library] || 'music';
}
