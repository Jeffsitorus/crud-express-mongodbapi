import Blog from "../models/Blog.mjs";

export default class BlogRepository {
  async findAll() {
    try {
      const blogs = await Blog.find();

      return blogs;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async insertOne(body) {
    try {
      const blog = new Blog(body);
      const result = await blog.save();

      return result;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async delete(blogId) {
    try {
      const blog = await Blog.findOne({ _id: blogId });
      const result = blog.remove();

      return result;
    } catch (error) {
      throw error;
      return null;
    }
  }
}
