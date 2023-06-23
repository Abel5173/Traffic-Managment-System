using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.penalty;

[ApiController]
[Route("api/penalty")]
public class penaltyController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public penaltyController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Penalty>> get()
    {

        // return _context.penalty.ToArray();

         var query = from Driver in _context.driver 
                        join penalty in _context.penalty on Driver.license_no equals penalty.driver_license
                      
                        select new
                        {
                            Driver.fullName,
                            Driver.license_no,
                            penalty.amount,
                            penalty.date,
                            penalty.penalty_leve,
                            penalty.violation_type,
                            penalty.penalty_id,
                            penalty.penalty_driver_id
                        };

            var result = query.ToList();

            // Process and return the result
            return Ok(result);

    }


    [HttpGet("search")]
public ActionResult<IEnumerable<Penalty>> Searchpenalty(string query)
{
    // Connect to your data source (e.g., a database) and perform the search query
    


         var search = from Driver in _context.driver 
                        join penalty in _context.penalty on Driver.license_no equals penalty.driver_license  

                             select new
                        {
                            Driver.fullName,
                            Driver.license_no,
                            penalty.amount,
                            penalty.date,
                            penalty.penalty_leve,
                            penalty.violation_type,
                            penalty.penalty_id
                        };   

                         

    return Ok(search.Where(a => a.license_no.ToString().Contains(query) ));
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

           return BadRequest() ;
    }

   

}