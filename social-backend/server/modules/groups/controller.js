import Group from './model';

export const createGroup = async (req, res) => {
  console.log('-----------------');
  console.log(req.body);

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

  const group = new Group({ name, description });

  try {
    return res.status(201).json({
      error: false,
      group: await group.save(),
    });
  } catch (e) {
    return res.status(400).json({
      error: true,
      message: 'Error while saving the group',
    });
  }
};

export const createGroupSocial = async (req, res) => {
  const { title, description } = req.body;
  const { groupId } = req.params;

  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided' });
  }
  if (title.length < 5) {
    return res.status(400).json({ error: true, message: 'Title must have at least 6 characters' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided' });
  }
  if (description.length < 10) {
    return res.status(400).json({ error: true, message: 'Description must have at least 10 characters' });
  }

  if (!groupId) {
    return res.status(400).json({
      error: true,
      message: 'groupId must be provided',
    });
  }

  try {
    // This is going to his the groups/model.js addSocial() function as the (args) parameter
    const [meetup, group] = await Group.addSocial(groupId, { title, description });
    console.log([meetup, group]);
  } catch (e) {
    return res.status(400).json({
      error: true,
      message: 'Social cannot becreated!',
    });
  }
};
