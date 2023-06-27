using System.ComponentModel.DataAnnotations;

namespace Models.vehicle_owner
{
    public class VehicleOwner
    {
        [Required(ErrorMessage = "vehicle_owner_id field is required")]
        public int? vehicle_owner_id { get; set; }
        public string? vehicle_id { get; set; }

        public string? fullname { get; set; }

        public string? phone { get; set; }
    }
}
