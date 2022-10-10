using System.ComponentModel.DataAnnotations;

namespace WebAtividadeEntrevista.Models
{
    /// <summary>
    /// Classe de Modelo de Cliente
    /// </summary>
    public class BeneficiarioModel
    {
        public long Id { get; set; }

        /// <summary>
        /// Nome
        /// </summary>
        [Required]
        public string NomeModal { get; set; }        

        /// <summary>
        /// CPF
        /// </summary>
        [Required]
        public string CPFModal { get; set; }
    }
}