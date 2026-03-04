// builder: controlls dependency injection, provides services, acts like a module from JS

using finshark.Data;
using finshark.Interfaces;
using finshark.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // adds controllers to the application, allows us to use controllers to handle requests, etc.

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// this is needed to avoid circular reference issues when serializing our models to JSON, especially when we have navigation properties that reference each other (e.g., Stock has Comments, and Comment has a reference back to Stock)
builder.Services.AddControllers().AddNewtonsoftJson(options => {
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore; // this is needed to avoid circular reference issues when serializing our models to JSON, especially when we have navigation properties that reference each other (e.g., Stock has Comments, and Comment has a reference back to Stock)
});

builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")); // not built yet
});

builder.Services.AddScoped<IStockRepository, StockRepository>(); // adds the stock repository to the dependency injection container, allows us to use the stock repository in our controllers, etc.
builder.Services.AddScoped<ICommentRepository, CommentRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline -
// what controlls the actual pipeline of the application, what happens when a request is made to the application
// where middleware is located, how the application responds to requests, etc.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
