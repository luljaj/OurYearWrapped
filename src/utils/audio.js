export const AUDIO_TRACKS = {
  intro: { file: 'intro.mp3', title: 'Intro (placeholder)' },
  summer: { file: 'summer.mp3', title: 'Summer (placeholder)' },
  struggle: { file: 'struggle.mp3', title: 'Struggle (placeholder)' },
  finale: { file: 'finale.mp3', title: 'Finale (placeholder)' },
}

// Map slides to tracks. Adjust these rules as you pick real songs.
export function getTrackForSlide(slide) {
  const key = slide?.key || ''

  if (key.startsWith('opening-')) return AUDIO_TRACKS.intro
  if (key.startsWith('feb-') || key.startsWith('mar-') || key.startsWith('apr-') || key.startsWith('may-'))
    return AUDIO_TRACKS.intro

  if (key.startsWith('jun-') || key.startsWith('jul-')) return AUDIO_TRACKS.summer

  if (key.startsWith('aug-') || key.startsWith('sep-') || key.startsWith('oct-'))
    return AUDIO_TRACKS.struggle

  if (key.startsWith('nov-') || key.startsWith('dec-') || key.startsWith('jan-') || key.startsWith('close-'))
    return AUDIO_TRACKS.finale

  return null
}

