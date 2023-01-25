using EventsSolution.Context.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution.Repository.Interface
{
	public interface IEventsRepository
	{
		Event GetEventById(int ID);
		IEnumerable<Event> GetAllEvents();
	}
}
