using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.penalty;

[ApiController]
[Route("api/Accident")]
public class AccidentController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AccidentController(ApplicationDbContext context)
    {
        this._context = context;
    }

    [HttpGet("search")]
public ActionResult<IEnumerable<Accident>> SearchAccidents(string query)
{
    // Connect to your data source (e.g., a database) and perform the search query
    var searchResults2 = _context.accident
                          .Where(a => a.accident_id.ToString().Contains(query) || a.accident_vechile_id.ToString().Contains(query))
                          .ToList();

    return Ok(searchResults2);
}

        [HttpGet]

public IActionResult GetJoinedData()
        {
           var query = from accident in _context.accident
             join address in _context.address on accident.address equals address.address_id
             join vehicle in _context.vehicle on accident.accident_vechile_id equals vehicle.accident_vehicle_id
             join driver in _context.driver on accident.accident_driver_id equals driver.accident_driver_id
             join officer in _context.Officer on accident.reporter equals officer.officer_id
             select new
             {
                 AccidentId = accident.accident_id,
                 AccidentType = accident.accident_type,
                 PropertyLossInMoney = accident.property_loss_in_money,
                 PropertyLoss = accident.property_loss,
                 data = accident.date,
                 MajorInjury = accident.major_injury,
                 MinorInjury = accident.minor_injury,
                 LifeLost = accident.life_lost,
                 Description = accident.description,
                 address.region,
                 address.zone,
                 address.wereda,
                 address.kebele,
                 address.specific_location,
                 VehiclePlateNo = vehicle.plate_no,
                 DriverFullName = driver.fullName,
                 OfficerFullName = officer.fullname
             };

        var result = query.ToList();

        // Process and return the result
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateAccident(Accident accident)
    {
        try
        {
            _context.accident.Add(accident);
            await _context.SaveChangesAsync();

            return Ok();
        }
        catch (Exception ex)
        {
            // Handle exception and return appropriate response
            return BadRequest("Error creating accident: " + ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var selecteditem = await _context.accident.FindAsync(id);
        if (selecteditem != null)
        {
            _context.accident.Remove(selecteditem);
            await _context.SaveChangesAsync();

            return Ok();
        }

        return BadRequest();
    }
}
