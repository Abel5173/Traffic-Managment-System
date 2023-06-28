using Microsoft.AspNetCore.Mvc;
using apidb2.Services;
using Models.Accident_vehicle;
using Models.Accident_driver;
using Models.Address;
using Models.ReporterAddress;

[ApiController]
    [Route("api/Accident")]
    public class AccidentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccidentController(ApplicationDbContext context)
        {
            this._context = context;
        }

        [HttpGet("search")]
        public ActionResult<IEnumerable<Accident>> SearchAccidents(string query1)
        {
                // var searchResults = _context.accident
                //     .Where(a => a.accident_id == query)
                //     .ToList();
                // return Ok(searchResults);


                var query = from accident in _context.accident
                        join accidentVehicle in _context.accident_vehicle on accident.accident_id equals accidentVehicle.accident_id
                        join accidentDriver in _context.accident_driver on accident.accident_id equals accidentDriver.accident_id
                        join vehicle in _context.vehicle on accidentVehicle.vehicle_id equals vehicle.plate_no
                        join driver in _context.driver .Where(a => a.license_no.Contains (query1))  on accidentDriver.driver_id equals driver.license_no
                        join reporterAddress in _context.reporter_address on accident.accident_id equals reporterAddress.accident_id
                        join address in _context.address on reporterAddress.address_id equals address.address_id
                        join officer in _context.Officer on reporterAddress.reporter_id equals officer.officer_id
                        select new
                        {
                            AccidentId = accident.accident_id,
                            AccidentType = accident.accident_type,
                            PropertyLossInMoney = accident.property_loss_in_money,
                            PropertyLoss = accident.property_loss,
                            Date = accident.date,
                            MajorInjury = accident.major_injury,
                            MinorInjury = accident.minor_injury,
                            LifeLost = accident.life_lost,
                            Description = accident.description,
                            address.region,
                            address.zone,
                            address.wereda,
                            address.kebele,
                            address.specific_location,
                            OfficerFullName = officer.fullname,
                            VehiclePlateNo = vehicle.plate_no,
                            DriverLicenseNo = driver.license_no
                        };

            var result = query.ToList();

            return Ok(result);
        }


        [HttpGet]
        public IActionResult GetJoinedData()
        {
            var query = from accident in _context.accident
                        join accidentVehicle in _context.accident_vehicle on accident.accident_id equals accidentVehicle.accident_id
                        join accidentDriver in _context.accident_driver on accident.accident_id equals accidentDriver.accident_id
                        join vehicle in _context.vehicle on accidentVehicle.vehicle_id equals vehicle.plate_no
                        join driver in _context.driver on accidentDriver.driver_id equals driver.license_no
                        join reporterAddress in _context.reporter_address on accident.accident_id equals reporterAddress.accident_id
                        join address in _context.address on reporterAddress.address_id equals address.address_id
                        join officer in _context.Officer on reporterAddress.reporter_id equals officer.officer_id
                        select new
                        {
                            AccidentId = accident.accident_id,
                            AccidentType = accident.accident_type,
                            PropertyLossInMoney = accident.property_loss_in_money,
                            PropertyLoss = accident.property_loss,
                            Date = accident.date,
                            MajorInjury = accident.major_injury,
                            MinorInjury = accident.minor_injury,
                            LifeLost = accident.life_lost,
                            Description = accident.description,
                            address.region,
                            address.zone,
                            address.wereda,
                            address.kebele,
                            address.specific_location,
                            OfficerFullName = officer.fullname,
                            VehiclePlateNo = vehicle.plate_no,
                            DriverLicenseNo = driver.license_no
                        };

            var result = query.ToList();

            return Ok(result);
        }

       [HttpPost]
        public async Task<IActionResult> CreateAccident(AccidentInputModel input)
        {
            try
            {
                var accident = new Accident
                {
                    accident_type = input.AccidentType,
                    date = input.Date,
                    life_lost = input.LifeLost,
                    major_injury = input.MajorInjury,
                    minor_injury = input.MinorInjury,
                    property_loss = input.PropertyLoss,
                    property_loss_in_money = input.PropertyLossInMoney,
                    description = input.Description
                };

                _context.accident.Add(accident);
                await _context.SaveChangesAsync();

                foreach (var plateNo in input.VehiclePlateNos)
                {
                    var vehicle = await _context.vehicle.FindAsync(plateNo);
                    if (vehicle != null)
                    {
                        var accidentVehicle = new Accident_vehicle
                        {
                            accident_id = accident.accident_id,
                            vehicle_id = plateNo
                        };
                        _context.accident_vehicle.Add(accidentVehicle);
                    }
                }

                foreach (var licenseNo in input.DriverLicenseNos)
                {
                    var driver = await _context.driver.FindAsync(licenseNo);
                    if (driver != null)
                    {
                        var accidentDriver = new Accident_driver
                        {
                            accident_id = accident.accident_id,
                            driver_id = licenseNo
                        };
                        _context.accident_driver.Add(accidentDriver);
                    }
                }

                var address = new Address
                {
                    region = input.Region,
                    wereda = input.Wereda,
                    kebele = input.Kebele,
                    specific_location = input.SpecificLocation,
                    zone = input.Zone
                };

                _context.address.Add(address);
                await _context.SaveChangesAsync();

                var reporterAddress = new ReporterAddress
                {
                    address_id = address.address_id,
                    accident_id = accident.accident_id,
                    reporter_id = input.officer_id
                };

                _context.reporter_address.Add(reporterAddress);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest("Error creating accident: " + ex.Message);
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var accident = await _context.accident.FindAsync(id);

            if (accident != null)
            {
                _context.accident.Remove(accident);
                await _context.SaveChangesAsync();
                return Ok();
            }

            return BadRequest();
        }
    }
