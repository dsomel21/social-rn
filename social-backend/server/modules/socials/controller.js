import Social from './model';

export const createSocial = async(req, res) => {
  
  console.log('About to try and createSocial()');
  /* Same thing as doing
    const title = req.body.title
    const description = req.body.description
  */
  const { title, description } = req.body;
  const newSocial = new Social({ title, description });

  try {
    return res.status(201).json({
      social: await newSocial.save()
    })
  } catch(e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with Social.'
    })
  }
}

export const getAllSocial = async(req, res) => {
  console.log('About to try and fetch all');
  try {
    return res.status(200).json({
      social: await Social.find({}) 
    });
  } catch(e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with Social.'
    });
  }
}