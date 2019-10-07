using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    public class CustomerDetailContext : DbContext
    {
        public CustomerDetailContext(DbContextOptions<CustomerDetailContext> options) :base(options)
        {

        }
        public DbSet<CustomerDetail> CustomerDetails { get; set; }
    }
}
