using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CustomerWebApi.Models;

namespace CustomerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDetailsController : ControllerBase
    {
        private readonly CustomerDetailContext _context;

        public CustomerDetailsController(CustomerDetailContext context)
        {
            _context = context;
        }

        // GET: api/CustomerDetails
        [HttpGet]
        public IEnumerable<CustomerDetail> GetCustomerDetails()
        {
            return _context.CustomerDetails;
        }

        // GET: api/CustomerDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomerDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customerDetail = await _context.CustomerDetails.FindAsync(id);

            if (customerDetail == null)
            {
                return NotFound();
            }

            return Ok(customerDetail);
        }

        // PUT: api/CustomerDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerDetail([FromRoute] int id, [FromBody] CustomerDetail customerDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customerDetail.id)
            {
                return BadRequest();
            }

            _context.Entry(customerDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CustomerDetails
        [HttpPost]
        public async Task<IActionResult> PostCustomerDetail([FromBody] CustomerDetail customerDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CustomerDetails.Add(customerDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerDetail", new { id = customerDetail.id }, customerDetail);
        }

        // DELETE: api/CustomerDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customerDetail = await _context.CustomerDetails.FindAsync(id);
            if (customerDetail == null)
            {
                return NotFound();
            }

            _context.CustomerDetails.Remove(customerDetail);
            await _context.SaveChangesAsync();

            return Ok(customerDetail);
        }

        private bool CustomerDetailExists(int id)
        {
            return _context.CustomerDetails.Any(e => e.id == id);
        }
    }
}