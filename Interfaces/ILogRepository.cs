using GoalTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker
{
    public interface ILogRepository<T>
    {
        T QueryById(int id);

        T QueryByUserId(Guid id);

        T QueryTodayByUserId(Guid id);

        void Add(T log);

        void Update(T log);

        void Remove(T log);

        IQueryable Query();
    }
}
