using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{

    private readonly DataContext Context;

    public UsersController(DataContext context)
    {
        Context = context;
    }

    [AllowAnonymous]
    [HttpGet("[controller]")]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        return await this.Context.Users.ToListAsync();
    }


    [HttpGet("[controller]/{id}")]
    public async Task<ActionResult<AppUser>> GetUser(int id)
    {
        return await this.Context.Users.FindAsync(id);
    }
}