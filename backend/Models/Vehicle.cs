using System;
using System.ComponentModel.DataAnnotations;

namespace models.vehicle; 
public class Vehicle {
    
     [Required(ErrorMessage =" id field is required ")]
    public string? plate_no { get; set; }

    //  [Required(ErrorMessage =" Operationid field is required ")]
    public string?  motor_no { get; set; }

    //  [Required(ErrorMessage =" id field is required ")]
    public System.DateTime? purchased_date { get; set; }
    public int? accident_vehicle_id  { get; set; }
    public  int? vehicle_owner_id { get; set; }


}