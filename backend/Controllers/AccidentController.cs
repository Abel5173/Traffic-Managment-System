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

    [HttpGet]
    public ActionResult<IEnumerable<Accident>> get()
    {

        return _context.accident.ToArray();

    }


   

}