using System.Collections;
using System.Globalization;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;



[ApiController]
[Route("api/dashboard")]
public class DashboardController:ControllerBase{


  private readonly ApplicationDbContext _context ;

    public DashboardController( ApplicationDbContext context)
    {
            this._context = context ;
         
        
    }

    [HttpGet("lifelost")]
    public ActionResult<int> getlifelost()
    {

      var totallifelost  = _context.accident.Sum(a=>a.life_lost);
        return totallifelost;

    }

        [HttpGet("majorphysicalinjury")]
    public ActionResult<int> getmajorphysicalinjury()
    {

      var majorphysicalinjury  = _context.accident.Sum(a=>a.major_injury);
        return majorphysicalinjury;

    }

        [HttpGet("minorphysicalinjury")]
    public ActionResult<int> getminorphysicalinjury()
    {

      var getminorphysicalinjury  = _context.accident.Sum(a=>a.minor_injury);
        return getminorphysicalinjury;

    }

           [HttpGet("totalaccident")]
    public ActionResult<int> totalaccident()
    {

      var getminorphysicalinjury  = _context.accident.Count();
        return getminorphysicalinjury;

    }

             [HttpGet("totaldriver")]
    public ActionResult<int> Driver()
    {

      var driver  = _context.driver.Count();
        return driver;

    }

             [HttpGet("totalofficer")]
    public ActionResult<int> officer()
    {

      var officer  = _context.Officer.Count();
        return officer;

    }

             [HttpGet("totalvehicle")]
    public ActionResult<int> vehicle()
    {

      var vehicle  = _context.vehicle.Count();
        return vehicle;

    }

               [HttpGet("overspeed")]
    public ActionResult<int> vehioverseed()
    {

      var overspeed  = _context.penalty.Where( a=> a.violation_type.Contains("Over")).Count();
        return overspeed;

    }


                   [HttpGet("phonewhiledriving")]
    public ActionResult<int> phonewhiledriving()
    {

      var phone  = _context.penalty.Where( a=> a.violation_type.Contains("phone")).Count();
        return phone;

    }


                       [HttpGet("nobelt")]
    public ActionResult<int> nobelt()
    {

      var belt  = _context.penalty.Where( a=> a.violation_type.Contains("no")).Count();
        return belt;

    }

                          [HttpGet("drink")]
    public ActionResult<int> drink()
    {

      var drink  = _context.penalty.Where( a=> a.violation_type.Contains("drink")).Count();
        return drink;

    }

                             [HttpGet("red")]
    public ActionResult<int> red()
    {

      var red  = _context.penalty.Where( a=> a.violation_type.Contains("red")).Count();
        return red;

    }

                               [HttpGet("totalpenalty")]
    public ActionResult<int> totalpenalty()
    {

      var penalty  = _context.penalty.Count();
        return penalty;

    }

      
  



   

}