export const AUDIO_TRACKS = {
  september: { file: 'September.mp3', title: 'September' },
}

// Map slides to tracks. Adjust these rules as you pick real songs.
export function getTrackForSlide(slide) {
  if (!slide) return null
  return AUDIO_TRACKS.september
}
