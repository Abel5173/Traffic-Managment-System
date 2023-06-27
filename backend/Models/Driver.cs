using System.ComponentModel.DataAnnotations;

namespace Models.Driver
{
    public class Driver
    {
        [Required(ErrorMessage = "fullName field is required")]
        public string? fullname { get; set; }

        public int? phone_no { get; set; }

        public int? age { get; set; }

        public string? nationality { get; set; }

        // [Required(ErrorMessage = "license_no field is required")]
        public string? license_no { get; set; }
    }
}
