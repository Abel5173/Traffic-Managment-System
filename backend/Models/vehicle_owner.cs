using System.ComponentModel.DataAnnotations;

namespace Models.vehicle_owner
{
    public class VehicleOwner
    {
        [Required(ErrorMessage = "vehicle_owner_id field is required")]
        public int? VehicleOwnerId { get; set; }
        public string? VehicleId { get; set; }

        public string? Fullname { get; set; }

        public string? Phone { get; set; }
    }
}
