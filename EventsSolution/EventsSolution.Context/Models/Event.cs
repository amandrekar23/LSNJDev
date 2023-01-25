using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution.Context.Models
{
	public  class Event
	{
		public int Id { get; set; }
		[MaxLength(50)]
		public string Title { get; set; }
		public string Description { get; set; }
		public string Notes { get; set; }
		public DateTime Date { get; set; }

		public int EventTypeId { get; set; }
	}
}
