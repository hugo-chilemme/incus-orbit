import { users } from './store.js';

export default function listUsers(_req, res) {
  res.json({ success: true, data: users });
}
