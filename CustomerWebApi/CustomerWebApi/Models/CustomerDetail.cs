using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    public class CustomerDetail
    {
        [Key]
        
        public int id { get; set;}
        [Required]
        
        public string Name { get; set; }
        [Required]
        
        public string Surname { get; set; }
        [Required]
       
        public string TaxId { get; set; }
        [Required]
        
        public string Phone { get; set; }
        [Required]
        
        public string Adress { get; set; }

    }
}
