export const fetchSocials = () => 
    fetch('http://localhost:3000/api/socials')
        .then(res => res.json())