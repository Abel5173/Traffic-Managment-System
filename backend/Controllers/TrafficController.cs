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
                            .Where(o => o.fullname.Contains(query) || o.username.Contains(query))
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

        var existingOfficer = await _context.Officer.FindAsync(id);
        if (existingOfficer == null)
        {
            return NotFound();
        }

        existingOfficer.fullname = officer.fullname;
        existingOfficer.phone_no = officer.phone_no;
        existingOfficer.password = officer.password;
        existingOfficer.username = officer.username;
        existingOfficer.status = officer.status;

        await _context.SaveChangesAsync();

        return NoContent();
    }

}
