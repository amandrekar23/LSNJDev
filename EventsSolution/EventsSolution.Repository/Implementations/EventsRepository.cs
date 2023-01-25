using EventsSolution.Context.DataAccess;
using EventsSolution.Context.Models;
using EventsSolution.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution.Repository.Implementations
{
	public class EventsRepository : IEventsRepository
	{
		private readonly IEventsDataContext _eventsDataContext;

		public EventsRepository(IEventsDataContext eventsDataContext)
		{
			_eventsDataContext = eventsDataContext;
		}

		IEnumerable<Event> IEventsRepository.GetAllEvents()
		{
			return _eventsDataContext.GetAllEvents();
		}

		Event IEventsRepository.GetEventById(int ID)
		{
			return _eventsDataContext.GetEventById(ID);
		}

	}
}
