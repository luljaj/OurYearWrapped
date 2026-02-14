export const AUDIO_TRACKS = {
  september: { file: 'September.mp3', title: 'September' },
  wacoTexas: { file: 'Waco, Texas.mp3', title: 'Waco, Texas' },
}

// Map slides to tracks. Adjust these rules as you pick real songs.
export function getTrackForSlide(slide) {
  if (!slide) return null
  // Default track for the Wrapped experience.
  return AUDIO_TRACKS.wacoTexas
}
