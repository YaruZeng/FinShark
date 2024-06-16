using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) 
        : base(dbContextOptions) // pass in data into DbContext
        {
            
        }

        public DbSet<Stock> Stocks { get; set; } // Create a table in database
        public DbSet<Comment> Comments { get; set; } // Create a table in database
    }
}