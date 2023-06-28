using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using Models.penalty;
using Models.penalty_driver;

[ApiController]
[Route("api/penalty")]
public class penaltyController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public penaltyController(ApplicationDbContext context)
    {
        this._context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Penalty>> Get()
    {
        var query = from driver in _context.driver
                    join penaltyDriver in _context.penalty_driver on driver.license_no equals penaltyDriver.driver_id
                    join penalty in _context.penalty on penaltyDriver.penalty_id equals penalty.penalty_id
                    select new
                    {
                        driver.fullname,
                        driver.license_no,
                        penalty.amount,
                        penalty.date,
                        penalty.penalty_leve,
                        penalty.violation_type,
                        penalty.penalty_id,
                    };

        var result = query.ToList();

        return Ok(result);
    }

    [HttpGet("search")]
    public ActionResult<IEnumerable<Penalty>> SearchPenalty(string query)
    {
        var search = from driver in _context.driver.Where(a => a.license_no.Contains(query))
                    join penaltyDriver in _context.penalty_driver on driver.license_no equals penaltyDriver.driver_id
                    join penalty in _context.penalty on penaltyDriver.penalty_id equals penalty.penalty_id
                    select new
                    {
                        driver.fullname,
                        driver.license_no,
                        penalty.amount,
                        penalty.date,
                        penalty.penalty_leve,
                        penalty.violation_type,
                        penalty.penalty_id
                    };

          var result = search.ToList();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePenalty([FromBody] PenaltyInputModel penaltyInput)
    {
        try
        {
            Penalty penalty = new Penalty
            {
                violation_type = penaltyInput.ViolationType,
                date = penaltyInput.Date,
                penalty_leve = penaltyInput.PenaltyLevel,
                amount = penaltyInput.Amount
            };

            _context.penalty.Add(penalty);
            await _context.SaveChangesAsync();

            penalty_driver penaltyDriver = new penalty_driver
            {
                penalty_id = penalty.penalty_id,
                driver_id = penaltyInput.DriverId
            };

            _context.penalty_driver.Add(penaltyDriver);
            await _context.SaveChangesAsync();

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest("Error creating penalty: " + ex.Message);
        }
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var selecteditem = await _context.penalty.FindAsync(id);
        if (selecteditem != null)
        {
            _context.penalty.Remove(selecteditem);
            await _context.SaveChangesAsync();

            return Ok();
        }

        return BadRequest();
    }
}
