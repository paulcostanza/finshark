using finshark.Interfaces;
using finshark.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace finshark.Service
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config) // IConfiguraiton: allows us to access the appsettings.json file and get the secret key for token generation
        {
            _config = config;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:SigningKey"]));
        }
        public string createToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.GivenName, user.UserName)
            };

            // siging credentials: used to sign the token with the secret key, what kind of encryption algorithm do you want?
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            // create token as an object, .net does everything else after the creation
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims), // claims is like a wallet, you put everything in it
                Expires = DateTime.Now.AddDays(7), // token expires in 7 days
                SigningCredentials = creds,
                Issuer = _config["JWT:Issuer"],
                Audience = _config["JWT:Audience"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token); // return as string, not as object
        }
    }
}
