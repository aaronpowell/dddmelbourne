using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web.Mvc;

namespace DevDevDev
{
    public static class GravatarExtensions
    {
        public static string GenerateGravatar<T>(this HtmlHelper<T> html, string email)
        {
            using (var md5Hash = MD5.Create())
            {
                var data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(email));

                return data.Aggregate("", (s, b) => s + b.ToString("x2"));
            }
        }
    }
}