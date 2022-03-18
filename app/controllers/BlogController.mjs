import BlogRepository from "../repositories/BlogRepository.mjs";

const BlogController = {
  async index(req, res) {
    try {
      const blogRepo = new BlogRepository();
      const data = await blogRepo.findAll();

      return res.status(200).json({
        status: true,
        data: data,
      });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async show(req, res) {
    try {
      const blogId = req.params.id;
      const blogRepo = new BlogRepository();
      const blog = await blogRepo.getBlogById(blogId);
      if (!blog)
        return res.status(404).json({
          status: false,
          message: "Blog not found",
        });

      return res.status(200).json({
        status: true,
        data: blog,
      });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async store(req, res) {
    try {
      const body = req.body;
      const blogRepo = new BlogRepository();

      const result = blogRepo.insertOne(body);

      if (result)
        return res.status(200).json({
          status: true,
          message: "Blog has saved",
        });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const blogId = req.params.id;
      const body = req.body;
      const blogRepo = new BlogRepository();
      const result = blogRepo.updateBlog(blogId, body);

      if (result)
        return res.status(200).json({
          status: true,
          message: "Blog has updated",
        });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async destroy(req, res) {
    try {
      const blogId = req.params.id;
      const blogRepo = new BlogRepository();

      const blog = await blogRepo.delete(blogId);

      if (!blog) {
        return res.status(404).json({
          status: false,
          message: "Blog not found",
        });
      }

      return res.status(200).json({
        status: true,
        message: "Blog has deleted",
      });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },
};

export default BlogController;
