const blog = require('../model/BlogSite')

const DeleteBlog =  async (req, res) => {
    const blogId = req.params.id;
    try {
        // Find the blog post by ID and remove it from the database
        const deletedBlog = await blog.findByIdAndRemove(blogId);

        if (!deletedBlog) {
            // Blog post with the provided ID not found
            return res.status(404).json({
                message: 'Blog post not found',
            });
        }

        // Blog post successfully deleted
        res.status(200).json({
            message: 'Blog post deleted successfully',
            data: deletedBlog,
        });
    } catch (error) {
        // Handle any errors that occurred during the deletion process
        console.error('Error deleting blog post:', error);
        return res.status(500).json({
            message: 'Failed to delete blog post',
            error: error.message,
        });
    }
}


module.exports = DeleteBlog;