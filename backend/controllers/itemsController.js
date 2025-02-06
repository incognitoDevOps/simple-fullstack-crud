let items = []; // In-memory storage for simplicity

const getAllItems = (req, res) => {
  res.json(items);
};

const createItem = (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  items[itemIndex] = { ...items[itemIndex], ...req.body };
  res.json(items[itemIndex]);
};

const deleteItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.status(204).send();
};

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};