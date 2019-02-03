import Group from './model';

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided' });
  }
  if (name.length < 6) {
    return res.status(400).json({ error: true, message: 'Name must have at least 6 characters' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'description must be provided' });
  }
  if (description.length < 10) {
    return res.status(400).json({ error: true, message: 'description must have at least 10 characters' });
  }

  const group = new Group({ title, description });

  try {
    return res.status(201).json({
      error: false,
      group: await group.save(),
    });
  } catch (e) {
    return res.status(400).json();
  }
};
