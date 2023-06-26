using System.ComponentModel.DataAnnotations;

namespace Models.Accident_vehicle
{
    public class Accident_vehicle
    {
        [Key]
        public int accident_vehicle_id { get; set; }

        [Required(ErrorMessage = "accident_id field is required")]
        public int accident_id { get; set; }

        [Required(ErrorMessage = "vehicle_id field is required")]
        public string vehicle_id { get; set; }
    }
}
