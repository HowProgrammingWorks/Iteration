# There is no do-while loop in python
# But we can emulate it

a = 0
while True:
	print(a)
	a += 1
	if not a < 10:
		break
