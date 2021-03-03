def check_variables(value):
  primes=[2,3,5,7]
  
  if value in primes:
    return value
  else:
    return 0


def sum_variables(value):
  total=0
  
  while(value >0):
   total=check_variables(value)+total
   value=value-1
  return total
print(sum_variables(10)) 
