export const fetchSocials = () =>
fetch('http://192.168.2.20:3000/api/socials')
  .then(res => res.json())
  .catch(e => console.log('ERRRRRRRRRRORRRRRZ:', e))