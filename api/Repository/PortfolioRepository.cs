using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context;
        public PortfolioRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Stock>> GetUserPortfolio(AppUser user)
        {
            return await _context.Portfolios.Where(p => p.AppUserId == user.Id).Select(p => new Stock
            {
                Id = p.StockId,
                Symbol = p.Stock.Symbol,
                CompanyName = p.Stock.CompanyName,
                Purchase = p.Stock.Purchase,
                LastDiv = p.Stock.LastDiv,
                Industry = p.Stock.Industry,
                MarketCap = p.Stock.MarketCap
            }).ToListAsync();
        }
    }
}