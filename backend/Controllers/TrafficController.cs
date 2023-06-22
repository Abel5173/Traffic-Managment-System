using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.officer;

[ApiController]
[Route("api/officer")]
public class officerController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public officerController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Officer>> get()
    {
 

         var searchResults = _context.Officer
                            .Where(o => o.status.StartsWith("Active"))
                            .ToList();

        return Ok(searchResults);
        // return _context.Officer.ToArray();

    }

        [HttpGet("search")]
    public ActionResult<IEnumerable<Accident>> SearchOfficer(string query)
    {
        var searchResults = _context.Officer
                            .Where(o => o.fullname.Contains(query) || o.officer_id.ToString().Contains(query))
                            .ToList();

        return Ok(searchResults);
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodoItem(int id)
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
    public async Task<IActionResult> Puttraffic(int id, Officer officer)
    {


        if (id != officer.officer_id)

        {
            Console.Write(id);
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