using EventsSolution.Context.Models;
using EventsSolution.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventsSolution.Controllers
{
	[Route("api/Events")]
	[ApiController]
	public class EventsController : ControllerBase
	{
		private readonly IEventsRepository _eventsRepository;

		public EventsController(IEventsRepository eventsRepository) { 
			_eventsRepository = eventsRepository;
		}

		[HttpGet]
		public ActionResult<IEnumerable<Event>> GetAllEvents()
		{
			List<Event> eventsList = new List<Event>();
			IEnumerable<Event> allEvents = _eventsRepository.GetAllEvents();
			foreach (var e in allEvents)
			{
				eventsList.Add(new Event { Id = e.Id, Title = e.Title, Date = e.Date });
			}
			return eventsList;
		}

		[HttpGet("{id}")]
		public ActionResult<Event> GetEvent(int id)
		{
			return _eventsRepository.GetEventById(id);
		}
	}
}
