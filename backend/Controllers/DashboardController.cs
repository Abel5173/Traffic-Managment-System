using apidb2.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/dashboard")]
public class DashboardController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public DashboardController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("lifelost")]
    public ActionResult<int> GetLifeLost()
    {
        var totalLifeLost = _context.accident.Sum(a => a.life_lost);
        return totalLifeLost;
    }

    [HttpGet("majorphysicalinjury")]
    public ActionResult<int> GetMajorPhysicalInjury()
    {
        var majorPhysicalInjury = _context.accident.Sum(a => a.major_injury);
        return majorPhysicalInjury;
    }

    [HttpGet("minorphysicalinjury")]
    public ActionResult<int> GetMinorPhysicalInjury()
    {
        var minorPhysicalInjury = _context.accident.Sum(a => a.minor_injury);
        return minorPhysicalInjury;
    }

    [HttpGet("totalaccident")]
    public ActionResult<int> GetTotalAccident()
    {
        var totalAccident = _context.accident.Count();
        return totalAccident;
    }

    [HttpGet("totaldriver")]
    public ActionResult<int> GetTotalDriver()
    {
        var totalDriver = _context.driver.Count();
        return totalDriver;
    }

    [HttpGet("totalofficer")]
    public ActionResult<int> GetTotalOfficer()
    {
        var totalOfficer = _context.Officer.Count();
        return totalOfficer;
    }

    [HttpGet("totalvehicle")]
    public ActionResult<int> GetTotalVehicle()
    {
        var totalVehicle = _context.vehicle.Count();
        return totalVehicle;
    }

    [HttpGet("overspeed")]
    public ActionResult<int> GetOverSpeed()
    {
        var overSpeed = _context.penalty.Where(a => a.violation_type.Contains("over"))
            .Count();
        return overSpeed;
    }

    [HttpGet("phonewhiledriving")]
    public ActionResult<int> GetPhoneWhileDriving()
    {
        var phoneWhileDriving = _context.penalty.Where(a => a.violation_type.Contains("phone")).Count();
        return phoneWhileDriving;
    }

    [HttpGet("nobelt")]
    public ActionResult<int> GetNoBelt()
    {
        var noBelt = _context.penalty.Where(a => a.violation_type.Contains("no")).Count();
        return noBelt;
    }

    [HttpGet("drink")]
    public ActionResult<int> GetDrink()
    {
        var drink = _context.penalty.Where(a => a.violation_type.Contains("drink")).Count();
        return drink;
    }

    [HttpGet("red")]
    public ActionResult<int> GetRed()
    {
        var red = _context.penalty.Where(a => a.violation_type.Contains("red")).Count();
        return red;
    }

    [HttpGet("totalpenalty")]
    public ActionResult<int> GetTotalPenalty()
    {
        var totalPenalty = _context.penalty.Count();
        return totalPenalty;
    }
}
