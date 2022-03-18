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

  async getBlogById(blogId) {
    try {
      const blog = await Blog.findById(blogId);

      return blog;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async updateBlog(blogId, body) {
    try {
      const result = await Blog.findOneAndUpdate(
        { _id: blogId },
        { $set: body }
      );

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
