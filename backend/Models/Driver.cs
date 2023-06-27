using System.ComponentModel.DataAnnotations;

namespace Models.Driver
{
    public class Driver
    {
        [Required(ErrorMessage = "fullName field is required")]
        public string? FullName { get; set; }

        public int? PhoneNo { get; set; }

        public int? Age { get; set; }

        public string? Nationality { get; set; }

        // [Required(ErrorMessage = "license_no field is required")]
        public string? license_no { get; set; }

        public int? AccidentDriverId { get; set; }

        public int? PenaltyDriverId { get; set; }
    }
}
