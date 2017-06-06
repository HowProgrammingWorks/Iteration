#include "stdafx.h"
#include <iostream>
#include "conio.h"

using namespace std;

void Break()
{
	bool flag = true;
	while (true)
	{
		cout << "Hello ";
		if (flag) break;
		cout << "World!";
	}

	cout << "There!";

	_getch();
}