public class AccidentInputModel
{
    public string AccidentType { get; set; }
    public DateTime Date { get; set; }
    public int LifeLost { get; set; }
    public int MajorInjury { get; set; }
    public int MinorInjury { get; set; }
    public int PropertyLoss { get; set; }
    public string PropertyLossInMoney { get; set; }
    public string Description { get; set; }
    public List<string> VehiclePlateNos { get; set; }
    public List<string> DriverLicenseNos { get; set; }
    public string Region { get; set; }
    public string Wereda { get; set; }
    public string Kebele { get; set; }
    public string SpecificLocation { get; set; }
    public string Zone { get; set; }
    public int officer_id { get; set; }

}