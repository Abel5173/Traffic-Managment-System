public class PenaltyInputModel
{
    public int PenaltyId { get; set; }
    public string ViolationType { get; set; }
    public DateTime Date { get; set; }
    public string PenaltyLevel { get; set; }
    public string Amount { get; set; }
    public string DriverId { get; set; }
}