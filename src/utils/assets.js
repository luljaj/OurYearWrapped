export function publicImage(filename) {
  // Ensures the correct base path on GitHub Pages project sites.
  return `${import.meta.env.BASE_URL}images/${filename}`
}

export function publicAudio(filename) {
  return `${import.meta.env.BASE_URL}audio/${filename}`
}
