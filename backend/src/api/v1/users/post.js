import { users } from './store.js';

export default function createUser(req, res) {
  const user = {
    id: String(users.length + 1),
    name: req.body?.name || 'Unnamed'
  };

  users.push(user);
  res.status(201).json({ success: true, data: user });
}
