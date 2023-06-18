using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.penalty;

[ApiController]
[Route("api/penalty")]
public class penaltyController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public penaltyController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Penalty>> get()
    {

        return _context.penalty.ToArray();

    }


    [HttpGet("search")]
public ActionResult<IEnumerable<Accident>> Searchpenalty(string query)
{
    // Connect to your data source (e.g., a database) and perform the search query
    var searchResults = _context.penalty
                          .Where(d => d.driver_name.Contains(query) || d.driver_license.ToString().Contains(query))
                          .ToList();

    return Ok(searchResults);
}


   

}