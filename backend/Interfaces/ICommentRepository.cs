using finshark.Helpers;
using finshark.Models;

namespace finshark.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllSync(CommentQueryObject queryObject);
        Task<Comment?> GetByIdAsync(int id);
        Task<Comment> CreateAsync(Comment commentModel); 
        Task<Comment?> UpdateAsync(int id, Comment commentModel);
        Task<Comment?> DeleteAsync(int id);
    }
}
