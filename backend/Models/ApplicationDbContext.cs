using Microsoft.EntityFrameworkCore;
using models.officer;
using models.penalty;

namespace apidb2.Services;

public class ApplicationDbContext : DbContext {

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }

    public DbSet<Penalty> penalty { get; set; }
    public DbSet<Accident> accident { get; set; }

    public DbSet<Officer> Officer {get ; set ;}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Penalty>()
            .HasKey(p => p.penalty_id);
        modelBuilder.Entity<Accident>()
             .HasKey(p => p.accident_id);
        modelBuilder.Entity<Officer>()
             .HasKey(p => p.officer_id);     
    
    }

    

  
}