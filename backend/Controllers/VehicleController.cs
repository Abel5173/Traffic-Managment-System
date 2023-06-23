using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using  models.vehicle_owner;



[ApiController]
[Route("api/vehicle")]
public class VehicleController:ControllerBase{


  private readonly ApplicationDbContext _context ;

    public VehicleController( ApplicationDbContext context, IConfiguration configuration)
    {
            this._context = context ;
         
        
    }

    // [HttpGet]
    // public ActionResult<IEnumerable<Vehicle>> get()
    // {
    //     return _context.vehicle.ToArray();

    // }
    [HttpGet]
    public IActionResult GetJoinedData()
        {
            var query = from vehicle_owner in _context.vehicle_owner
                        join vehicle in _context.vehicle on vehicle_owner.vehicle_owner_id equals vehicle.vehicle_owner_id
                        join accident_vehicle in _context.accident_vehicle on vehicle.accident_vehicle_id equals accident_vehicle.accident_vehicle_id
                        select new
                        {
                            vehicle.motor_no,
                            vehicle.plate_no,
                            vehicle.purchased_date,
                            vehicle_owner.fullname,
                            accident_vehicle.accident_vehicle_id,
                        };

            var result = query.ToList();

            // Process and return the result
            return Ok(result);
        }

    [HttpGet("search")]
public ActionResult<IEnumerable<Accident>> SearchOfficer(string query)
{
    // Connect to your data source (e.g., a database) and perform the search query
    var searchResults = _context.vehicle
                          .Where(v => v.plate_no.Contains(query))
                          .ToList();

    return Ok(searchResults);
}



   

}