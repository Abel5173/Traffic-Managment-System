using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
{

          private readonly ApplicationDbContext _context ;
    public AuthController( ApplicationDbContext context)
    {
        this._context = context ;
    }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
        
            var officer = await _context.Officer.FirstOrDefaultAsync(o => o.username == model.Username);

            if (officer != null && officer.password == model.Password)
            {
                // Authentication successful
                return Ok(new { message = "Login successful" });
            }

            // Authentication failed
            return Unauthorized(new { message = "Invalid credentials" });
        }

    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}

  
    



