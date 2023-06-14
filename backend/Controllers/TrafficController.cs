using apidb2.Services;
using Microsoft.AspNetCore.Mvc;
using models.officer;

[ApiController]
[Route("api/officer")]
public class officerController:ControllerBase{


  private readonly ApplicationDbContext _context ;
    public officerController( ApplicationDbContext context)
    {
        this._context = context ;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Officer>> get()
    {

        return _context.Officer.ToArray();

    }


   

}