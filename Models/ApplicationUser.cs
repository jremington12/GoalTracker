using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    public class ApplicationUser : IdentityUser
    {
        private Guid UserId { get; set; }
    }
}