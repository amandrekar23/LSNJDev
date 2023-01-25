using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution.Context.Models
{
	public class EventType
	{
		public int Id { get; set; }
		[MaxLength(50)]
		public string Title { get; set; }
		public string Description { get; set; }
	}
}
