import Post from '../models/Post.js';
import tryCatch from './utils/tryCatch.js';

export const createPost = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newPost = new Post({ ...req.body, uid, uName, uPhoto });
  await newPost.save();
  res.status(201).json({ success: true, result: newPost });
});