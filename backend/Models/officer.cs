using System.ComponentModel.DataAnnotations;

namespace Models.officer
{
    public class Officer
    {
        public int officer_id { get; set; }

        public string fullname { get; set; }

        public int phone_no { get; set; }

        public string password { get; set; }

        public string username { get; set; }

        public string status { get; set; }
    }
}
