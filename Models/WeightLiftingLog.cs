using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    public class WeightLiftingLog : LogBase
    {
        public int WeightLiftingLogId { get; set; }
        public List<WeightLiftingExercise> Exercises { get; set; }
        public Guid UserId { get; set; }
        public int TotalSets { get; set; }
    }
}