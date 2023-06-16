using System.ComponentModel.DataAnnotations;
namespace models.vehicle_owner;
public class vehicle_owner {
    
     [Required(ErrorMessage =" vehicle_owner_id field is required ")]
    public int? vehicle_owner_id  { get; set; }

    //  [Required(ErrorMessage =" Operationid field is required ")]
    public int?  vehicle_id { get; set; }

    //  [Required(ErrorMessage =" id field is required ")]
    public string? fullname { get; set; }
    public int? phone  { get; set; }

   


}