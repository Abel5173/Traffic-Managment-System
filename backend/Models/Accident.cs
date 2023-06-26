namespace Models.Accident
{
public class Accident
{
    public int accident_id { get; set; }
    public string accident_type { get; set; }
    public DateTime date { get; set; }
    public int reporter { get; set; }
    public int address { get; set; }
    public int life_lost { get; set; }
    public int major_injury { get; set; }
    public int minor_injury { get; set; }
    public int property_loss { get; set; }
    public string property_loss_in_money { get; set; }
    public string description { get; set; }
    public int accident_vehicle_id { get; set; }
    public int accident_driver_id { get; set; }
}
}