using EventsSolution.Context.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution.Context.DataAccess
{
	public class EventsDataContext: IEventsDataContext
	{
		private readonly EventDbContext _dbContext;
		public EventsDataContext(EventDbContext context)
		{
			_dbContext = context;
		}

		
		public IEnumerable<Event> GetAllEvents()
		{
			return _dbContext.Events.ToList();

		}

		public Event GetEventById(int ID)
		{
			return _dbContext.Events.Where(e => e.Id == ID).FirstOrDefault();
		}
	}
}
