using System.ComponentModel.DataAnnotations;

namespace models.Accident_vehicle;
public class Accident_vehicle {
    
     [Required(ErrorMessage =" accident_vehicle_id field is required ")]
    public int? accident_vehicle_id { get; set; }

    //  [Required(ErrorMessage =" Operationid field is required ")]
    public int?  accident_id { get; set; }

    //  [Required(ErrorMessage =" id field is required ")]
    public int? vehicle_id { get; set; }

   


}