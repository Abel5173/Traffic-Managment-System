using System.ComponentModel.DataAnnotations;

namespace Models.penalty
{
    public class Penalty
    {
        [Key]
        [Required(ErrorMessage = "penalty_id field is required")]
        public int penalty_id { get; set; }

        [Required(ErrorMessage = "violation_type field is required")]
        public string violation_type { get; set; }

        [Required(ErrorMessage = "date field is required")]
        public System.DateTime date { get; set; }

        [Required(ErrorMessage = "penalty_leve field is required")]
        public string penalty_leve { get; set; }

        [Required(ErrorMessage = "amount field is required")]
        public string amount { get; set; }
    }
}
