using EventsSolution.Context.DataAccess;
using EventsSolution.Repository.Interface;
using EventsSolution.Repository.Implementations;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using EventsSolution;

var configManager = new ConfigurationBuilder()
	.AddJsonFile("appsettings.json", false, true)
	.AddEnvironmentVariables()
	.Build();
var settings = configManager.GetRequiredSection("Settings").Get<Settings>();
var allowedOrigin = settings?.AllowedOrigin;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//var AllowSpecificOrigins = "_AllowSpecificOrigins";
//builder.Services.AddCors(options =>
//{
//	options.AddPolicy(name: MyAllowSpecificOrigins,
//					  policy =>
//					  {
//						  policy.WithOrigins("http://localhost:4200");
//						  policy.WithHeaders("*.*");
//					  });
//});
builder.Services.AddCors(options =>
{
	options.AddDefaultPolicy(
		builder =>
		{
			builder
			//.WithOrigins("http://localhost:4200")
			.WithOrigins(allowedOrigin)
			.SetIsOriginAllowedToAllowWildcardSubdomains()
			.SetIsOriginAllowed((host) => true)
			.AllowAnyMethod()
			.AllowAnyHeader()
			.AllowCredentials();
		});
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<EventDbContext>(options =>
			options.UseSqlServer(builder.Configuration.GetConnectionString("EventConnection"),b => b.MigrationsAssembly("EventsSolution.Context")));
builder.Services.AddScoped<IEventsRepository, EventsRepository>();
builder.Services.AddScoped<IEventsDataContext, EventsDataContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
//app.UseCors(AllowSpecificOrigins);
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
