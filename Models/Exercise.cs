using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    [Serializable]
    public class WeightLiftingExercise
    {
        public int WeightLiftingExerciseId { get; set; }   
        public int WeightLiftingLogId { get; set; }
        public string Name { get; set; }
        public int Sets { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }
    }
}
