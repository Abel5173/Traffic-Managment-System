using System.ComponentModel.DataAnnotations;

namespace models.driver;
public class Driver {
    
     [Required(ErrorMessage =" fullname field is required ")]
    public string? fullName  { get; set; }

    //  [Required(ErrorMessage =" Operationid field is required ")]
    public int?  phone_no { get; set; }

    //  [Required(ErrorMessage =" id field is required ")]
    public int? age { get; set; }
    public string? nationality  { get; set; }
    public int? license_no  { get; set; }
    public int? accident_driver_id  { get; set; }

    public int? penalty_driver_id  { get; set; }
   


}