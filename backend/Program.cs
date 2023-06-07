using apidb2;
using apidb2.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;



var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

var connectionString  = builder.Configuration.GetConnectionString("bookconnection");

builder.Services.AddDbContext<ApplicationDbContext>(options => {

    options.UseMySql(connectionString ,ServerVersion.AutoDetect(connectionString));

});

builder.Services.AddControllers();

//this is adding services to the controller
builder.Services.AddCors(options =>{
    
    options.AddDefaultPolicy(builder =>{
        builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
    });
   
    
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
