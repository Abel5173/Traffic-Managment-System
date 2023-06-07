using System.Collections.Generic;
using System.Linq;
using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.penalty;

[ApiController]
[Route("api/Agent")]
public class penaltyController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public penaltyController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Penalty>> get()
    {

        return _context.penalty.ToArray();

    }


   

}