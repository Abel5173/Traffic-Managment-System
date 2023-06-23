using System.ComponentModel.DataAnnotations;

namespace models.penalty;
public class Penalty {
    
     [Required(ErrorMessage =" id field is required ")]
    public int? penalty_id { get; set; }

    //  [Required(ErrorMessage =" Operationid field is required ")]
    public int?  driver_license { get; set; }

    //  [Required(ErrorMessage =" id field is required ")]
    public string? violation_type  { get; set; }
    public System.DateTime? date  { get; set; }
    public string? penalty_leve  { get; set; }
    public  int? penalty_driver_id { get; set; }
    public  string? amount { get; set; }


}