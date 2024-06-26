const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import body-parser
require('dotenv').config({ path: '../.env' });

const app = express();
const port = 3000;

// Enable CORS
app.use(cors({ origin: 'http://localhost:4200' }));

// Connect to MongoDB
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Parse JSON bodies for POST requests
app.use(bodyParser.json());

// Create a basic blog post model
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
  title: String,
  content: String,
  recipeId: String,
  date: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
const blogRecipeSchema = new Schema({
  title: String,
  content: String,
  img_url: String,
  ingredients: [{
    name: String,
    amount: String
  }],
  date: { type: Date, default: Date.now }
});

const BlogRecipe = mongoose.model('BlogRecipe', blogRecipeSchema);

// Create a new blog post and save it to the database
app.post('/posts', async (req, res) => {
  try {
    const { title, content, recipeId } = req.body; // Assuming the request body contains title and content
    console.log(req.body)
    const newPost = new BlogPost({ title, content, recipeId });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost); // Respond with the saved post
  } catch (error) {
    console.error('Error saving blog post:', error);
    res.status(500).json({ error: 'Error saving blog post' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await BlogPost.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully', deletedPost });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Error deleting post' });
  }
});

// Set up a simple route to retrieve all blog posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving blog posts' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
/////Recipes


app.post('/recipes', async (req, res) => {
  try {
    const { title, content, img_url,  ingredients} = req.body; // Assuming the request body contains title and content
    console.log("Data on the Server:",req.body)
    const newRecipe = new BlogRecipe({ title, content, img_url, ingredients });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe); // Respond with the saved post
  } catch (error) {
    console.error('Error saving blog post:', error);
    res.status(500).json({ error: 'Error saving blog post' });
  }
});

// app.delete('/recipes/:id', async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const deletedPost = await BlogPost.findByIdAndDelete(postId);
//     if (!deletedPost) {
//       return res.status(404).json({ error: 'Post not found' });
//     }
//     res.status(200).json({ message: 'Post deleted successfully', deletedPost });
//   } catch (error) {
//     console.error('Error deleting post:', error);
//     res.status(500).json({ error: 'Error deleting post' });
//   }
// });

// Set up a simple route to retrieve all blog recipes

app.get('/recipes', async (req, res) => {
  try {
    const recipes = await BlogRecipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving blog recipes' });
  }
});


