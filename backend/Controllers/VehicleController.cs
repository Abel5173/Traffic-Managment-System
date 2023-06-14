using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.officer;
using models.vehicle;

[ApiController]
[Route("api/vehicle")]
public class VehicleController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public VehicleController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Vehicle>> get()
    {

        return _context.vehicle.ToArray();

    }


   

}