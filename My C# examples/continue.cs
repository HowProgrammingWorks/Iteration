using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cont
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            while (i < 10) {
            i++;
            Console.WriteLine("Hello");
            if (i == 5) continue;
            Console.WriteLine("Word");
            }
            Console.ReadLine();
        }
    }
}
