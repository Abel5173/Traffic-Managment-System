using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using Models.vehicle_owner;
using Models.vehicle;
using System;
using System.Threading.Tasks;

[ApiController]
[Route("api/vehicle")]
public class VehicleController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public VehicleController(ApplicationDbContext context)
    {
        this._context = context;
    }

    [HttpGet]
    public IActionResult GetJoinedData()
    {
        var query = from vehicle_owner in _context.VehicleOwners
                    join vehicle in _context.Vehicles on vehicle_owner.VehicleId equals vehicle.plate_no
                    join accident_vehicle in _context.AccidentVehicles on vehicle.plate_no equals accident_vehicle.vehicle_id
                    select new
                    {
                        vehicle.motor_no,
                        vehicle.plate_no,
                        vehicle.purchased_date,
                        vehicle_owner.Fullname,
                        accident_vehicle.accident_vehicle_id
                    };

        var result = query.ToList();

        // Process and return the result
        return Ok(result);
    }

    [HttpGet("search")]
    public ActionResult<IEnumerable<Vehicle>> SearchVehicle(string query)
    {
        var searchResults = _context.Vehicles
                              .Where(v => v.plate_no.Contains(query))
                              .ToList();

        return Ok(searchResults);
    }

}
