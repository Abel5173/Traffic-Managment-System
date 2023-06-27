using Microsoft.AspNetCore.Mvc;
using apidb2.Services;

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
        public ActionResult<IEnumerable<Accident>> SearchAccidents(string query)
        {
            int queryId;
            if (int.TryParse(query, out queryId))
            {
                var searchResults = _context.accident
                    .Where(a => a.accident_id == queryId)
                    .ToList();

                return Ok(searchResults);
            }

            return BadRequest("Invalid query input.");
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

        // [HttpPost]
        // public async Task<IActionResult> CreateAccident(Accident accident)
        // {
        //     try
        //     {
        //         // Add the accident to the context
        //         _context.Accidents.Add(accident);
        //         await _context.SaveChangesAsync();

        //         // Associate the vehicles with the accident
        //         if (accident.AccidentVehicles != null && accident.AccidentVehicles.Count > 0)
        //         {
        //             foreach (var vehicle in accident.AccidentVehicles)
        //             {
        //                 var accidentVehicle = new AccidentVehicle
        //                 {
        //                     accident_id = accident.accident_id,
        //                     vehicle_id = vehicle.vehicle_id
        //                 };

        //                 _context.AccidentVehicle.Add(accidentVehicle);
        //             }

        //             await _context.SaveChangesAsync();
        //         }

        //         // Associate the drivers with the accident
        //         if (accident.AccidentDrivers != null && accident.AccidentDrivers.Count > 0)
        //         {
        //             foreach (var driver in accident.AccidentDrivers)
        //             {
        //                 var accidentDriver = new AccidentDriver
        //                 {
        //                     accident_id = accident.accident_id,
        //                     driver_id = driver.driver_id
        //                 };

        //                 _context.AccidentDriver.Add(accidentDriver);
        //             }

        //             await _context.SaveChangesAsync();
        //         }

        //         // Associate the reporter address with the accident
        //         if (accident.ReporterAddress != null)
        //         {
        //             var reporterAddress = new ReporterAddress
        //             {
        //                 reporter_id = accident.ReporterAddress.reporter_id,
        //                 address_id = accident.ReporterAddress.address_id,
        //                 accident_id = accident.accident_id
        //             };

        //             _context.ReporterAddresses.Add(reporterAddress);
        //             await _context.SaveChangesAsync();
        //         }

        //         return Ok();
        //     }
        //     catch (Exception ex)
        //     {
        //         return BadRequest("Error creating accident: " + ex.Message);
        //     }
        // }

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
