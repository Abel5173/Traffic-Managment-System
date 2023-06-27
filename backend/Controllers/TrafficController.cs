using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using Models.officer;

[ApiController]
[Route("api/officer")]
public class OfficerController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public OfficerController(ApplicationDbContext context)
    {
        this._context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Officer>> Get()
    {
        var searchResults = _context.Officer
                            .Where(o => o.status.StartsWith("Active"))
                            .ToList();

        return Ok(searchResults);
    }

    [HttpGet("search")]
    public ActionResult<IEnumerable<Officer>> SearchOfficer(string query)
    {
        var searchResults = _context.Officer
                            .Where(o => o.fullname.Contains(query) || o.officer_id.ToString().Contains(query))
                            .ToList();

        return Ok(searchResults);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var selecteditem = await _context.Officer.FindAsync(id);
        if (selecteditem == null)
        {
            return NotFound();
        }

        _context.Officer.Remove(selecteditem);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Officer officer)
    {
        if (id != officer.officer_id)
        {
            return BadRequest();
        }

        var todoItem = await _context.Officer.FindAsync(id);
        if (todoItem == null)
        {
            return NotFound();
        }

        todoItem.status = "Left";

        await _context.SaveChangesAsync();

        return NoContent();
    }
}
