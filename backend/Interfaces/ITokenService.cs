using finshark.Models;

namespace finshark.Interfaces
{
    public interface ITokenService
    {
        string createToken(User user);
    }
}
