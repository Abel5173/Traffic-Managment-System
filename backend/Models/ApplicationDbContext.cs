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
using Models.penalty_driver;
using Models.vehicle_driver;

namespace apidb2.Services
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Officer> Officer { get; set; }
        public DbSet<Address> address { get; set; }
        public DbSet<Accident> accident { get; set; }
        public DbSet<Driver> driver { get; set; }
        public DbSet<Vehicle> vehicle { get; set; }
        public DbSet<Penalty> penalty { get; set; }
        public DbSet<Accident_driver> accident_driver { get; set; }
        public DbSet<Accident_vehicle> accident_vehicle { get; set; }
        public DbSet<penalty_driver> penalty_driver { get; set; }
        public DbSet<vehicle_driver> vehicle_driver { get; set; }
        public DbSet<VehicleOwner> vehicle_owner { get; set; }
        public DbSet<ReporterAddress> reporter_address { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Penalty>()
                .HasKey(p => p.penalty_id);
            modelBuilder.Entity<Accident>()
                .HasKey(p => p.accident_id);
            modelBuilder.Entity<Officer>()
                .HasKey(p => p.officer_id);
            modelBuilder.Entity<Driver>()
                .HasKey(p => p.license_no);
            modelBuilder.Entity<Vehicle>()
                .HasKey(p => p.plate_no);
            modelBuilder.Entity<vehicle_driver>()
                .HasKey(p => p.vehicle_driver_id);
            modelBuilder.Entity<penalty_driver>()
                .HasKey(p => p.penalty_driver_id);
            modelBuilder.Entity<VehicleOwner>()
                .HasKey(p => p.VehicleOwnerId);
            modelBuilder.Entity<Accident_vehicle>()
                .HasKey(p => p.accident_vehicle_id);
            modelBuilder.Entity<Accident_driver>()
                .HasKey(p => p.accident_driver_id);
            modelBuilder.Entity<Address>()
                .HasKey(p => p.address_id);
            modelBuilder.Entity<ReporterAddress>()
                .HasKey(ra => ra.Id);
        }
    }
}
