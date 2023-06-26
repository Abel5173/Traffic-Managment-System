using System.ComponentModel.DataAnnotations;
namespace Models.Accident_driver{
    public class Accident_driver
    {
        [Key]
        public int accident_driver_id { get; set; }

        [Required(ErrorMessage = "accident_id field is required")]
        public int accident_id { get; set; }

        [Required(ErrorMessage = "driver_id field is required")]
        public string driver_id { get; set; } // Change the data type to match the column type in the database
    }
}
