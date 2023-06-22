using System.ComponentModel.DataAnnotations;

namespace models.officer;
public class Officer {
    
     [Required(ErrorMessage =" id field is required ")]
    public int? officer_id { get; set; }

    //  [Required(ErrorMessage =" Operationid field is required ")]
    public string?  fullname { get; set; }

    //  [Required(ErrorMessage =" id field is required ")]
    public int? phone_no { get; set; }
    public string? password  { get; set; }
    public string? username  { get; set; }
    public string? status  { get; set; }

   


}