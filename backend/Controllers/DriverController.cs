using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using Models.Driver;

[ApiController]
[Route("api/driver")]
public class DriverController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public DriverController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Driver>> Get()
    {
        var drivers = _context.driver.ToList();
        return Ok(drivers);
    }

    [HttpGet("search")]
    public ActionResult<IEnumerable<Driver>> SearchDriver(string query)
    {
        var searchResults = _context.driver
            .Where(d => d.license_no.Contains(query) || d.fullname.Contains(query))
            .ToList();

        return Ok(searchResults);
    }
}
