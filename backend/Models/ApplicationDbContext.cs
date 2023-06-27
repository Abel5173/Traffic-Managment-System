using Models.Accident_vehicle;
using Models.Accident_driver;
using Models.Address;
using Models.Driver;
using Models.officer;
using Models.penalty;
using Models.vehicle_owner;
using Microsoft.EntityFrameworkCore;
using Models.vehicle;
using Models.ReporterAddress;

namespace apidb2.Services
{
    public class ApplicationDbContext : DbContext
    {
        internal IEnumerable<object> Penalty;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Penalty> Penalties { get; set; }
        public DbSet<Accident> Accidents { get; set; }
        public DbSet<Officer> Officers { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<VehicleOwner> VehicleOwners { get; set; }
        public DbSet<Accident_vehicle> AccidentVehicles { get; set; }
        public DbSet<Accident_driver> Accident_Drivers { get; set; }
        public DbSet<Address> Addresses { get; set; }
          public DbSet<ReporterAddress> ReporterAddresses { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Penalty>()
                .HasKey(p => p.penalty_id);
            modelBuilder.Entity<Accident>()
                .HasKey(p => p.accident_id);
            modelBuilder.Entity<Officer>()
                .HasKey(p => p.officer_id);
            modelBuilder.Entity<Driver>()
                .HasKey(p => p.LicenseNo);
            modelBuilder.Entity<Vehicle>()
                .HasKey(p => p.plate_no);
            modelBuilder.Entity<VehicleOwner>()
                .HasKey(p => p.VehicleOwnerId);
            modelBuilder.Entity<Accident_vehicle>()
                .HasKey(p => p.accident_vehicle_id);
            modelBuilder.Entity<Address>()
                .HasKey(p => p.address_id);
          modelBuilder.Entity<ReporterAddress>()
            .HasKey(ra => ra.Id);
        }
    }
}
