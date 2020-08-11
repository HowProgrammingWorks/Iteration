using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace forEaach
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] a = new int[] { 7, 10, 1, 5, 2 };
            int i = 0;
            foreach (int item in a)
            {
                Console.WriteLine("{0} {1} {2}", i, GetStringArray(a), item);
                i++;
            }
            Console.ReadLine();
        }
        private static string GetStringArray(int[] array)
        {
            string result = "[ ";
            for (int i = 0; i < array.Length; i++)
            {
                result += array[i];
                if (i != array.Length - 1)
                    result += ", ";
            }
            result += " ]";
            return result;
        }
    }
}
