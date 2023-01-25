using EventsSolution.Context.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution.Context.DataAccess
{
	public class EventDbContext : DbContext
	{
		public EventDbContext(DbContextOptions<EventDbContext> options) : base(options) { }

		public DbSet<EventType> EventType { get; set; }
		public DbSet<Event> Events { get; set; }
	}
}
