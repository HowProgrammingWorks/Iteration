using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Breeak
{
    class Program
    {
        static void Main(string[] args)
        {
            const bool flag = true;
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Hello");
                if (flag)
                {
                    break;
                }
                Console.WriteLine("World");
            }
            Console.WriteLine("There");   
        }
    }
}
