using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.penalty;

[ApiController]
[Route("api/Accident")]
public class AccidentController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public AccidentController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    // [HttpGet]
    // public ActionResult<IEnumerable<Accident>> get()
    // {

    //     return _context.accident.ToArray();

    // }

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


   

}