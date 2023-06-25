using System.ComponentModel.DataAnnotations;

public class Accident_driver
{
    public int? accident_driver_id { get; set; }

    [Required(ErrorMessage = "accident_id field is required")]
    public int? accident_id { get; set; }

    [Required(ErrorMessage = "driver_id field is required")]
    public int? driver_id { get; set; }
}
