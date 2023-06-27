namespace Models.Address
{
    public class Address
    {
        public int address_id { get; set; }
        public string? region { get; set; }
        public string? wereda { get; set; }
        public string? kebele { get; set; }
        public string? specific_location { get; set; }
        public string? zone { get; set; }
    }
}
