using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.driver;

[ApiController]
[Route("api/driver")]
public class DriverController:ControllerBase{


  private readonly ApplicationDbContext _context ;

    public DriverController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Driver>> get()
    {

        return _context.driver.ToArray();

    }


    [HttpGet("search")]
public ActionResult<IEnumerable<Accident>> SearchDriver(string query)
{
    // Connect to your data source (e.g., a database) and perform the search query
    var searchResults = _context.driver
                          .Where(d => d.license_no.ToString().Contains(query) || d.fullName.Contains(query))
                          .ToList();

    return Ok(searchResults);
}



}