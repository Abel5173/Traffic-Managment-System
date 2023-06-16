using Microsoft.EntityFrameworkCore;
using models.officer;
using models.penalty;
using models.driver ;
using models.vehicle; 
using models.vehicle_owner;
using models.Accident_vehicle;
using models.Address;

namespace apidb2.Services;

public class ApplicationDbContext : DbContext {

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }

    public DbSet<Penalty> penalty { get; set; }
    public DbSet<Accident> accident { get; set; }

    public DbSet<Officer> Officer {get ; set ;}
    public DbSet<Driver> driver {get ; set ;}
    public DbSet<Vehicle> vehicle {get ; set ;}
    public DbSet<vehicle_owner> vehicle_owner {get ; set ;}
    public DbSet<Accident_vehicle> accident_vehicle {get ; set;}
    public DbSet<Address>address {get ;set ;}



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
        modelBuilder.Entity<vehicle_owner>()
             .HasKey(p => p.vehicle_owner_id);
        modelBuilder.Entity<Accident_vehicle>()
             .HasKey(p => p.accident_vehicle_id);
        modelBuilder.Entity<Address>()
             .HasKey(p => p.address_id);     
                        
    }

    

  
}