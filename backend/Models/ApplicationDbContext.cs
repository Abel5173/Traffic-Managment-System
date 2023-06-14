using Microsoft.EntityFrameworkCore;
using models.officer;
using models.penalty;
using models.driver ;
using models.vehicle; 

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
    
    }

    

  
}