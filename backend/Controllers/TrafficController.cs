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

        return _context.Officer.ToArray();

    }

        [HttpGet("search")]
public ActionResult<IEnumerable<Accident>> SearchOfficer(string query)
{
    // Connect to your data source (e.g., a database) and perform the search query
    var searchResults = _context.Officer
                          .Where(o => o.fullname.Contains(query) || o.officer_id.ToString().Contains(query))
                          .ToList();

    return Ok(searchResults);
}


   

}