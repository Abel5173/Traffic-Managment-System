using System;
using System.ComponentModel.DataAnnotations;

namespace Models.vehicle
{
    public class Vehicle
    {
        [Key]
        [Required(ErrorMessage = "plate_no field is required")]
        public string plate_no { get; set; }

        public string motor_no { get; set; }

        public DateTime? purchased_date { get; set; }
    }
}
