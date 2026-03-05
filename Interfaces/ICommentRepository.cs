using finshark.Models;

namespace finshark.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllSync();
        Task<Comment?> GetByIdAsync(int id);
        Task<Comment> CreateAsync(Comment commentModel); 
        Task<Comment?> DeleteAsync(int id);
    }
}
