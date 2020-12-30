using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ReactCRUD.Models;
using ReactCRUD.Services;
namespace ReactCRUD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService userService;
        public UsersController()
        {
            this.userService = new UserService();
        }
        // GET api/users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userService.GetAll().ToArray();
        }
        // GET api/users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(userService.GetById(id));
        }
        // POST api/users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            return CreatedAtAction("Get", new { id = user.Id }, userService.Create(user));
        }
        // PUT api/users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User user)
        {
            userService.Update(id, user);
            return NoContent();
        }
        // DELETE api/users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            userService.Delete(id);
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}