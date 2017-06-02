# There is no continue label in python
i = 0

while i < 10:
	i += 1
	print("Hello")
	if i == 5:
		continue
	print("World")
