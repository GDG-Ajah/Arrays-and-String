class DynamicArray:

     def __init__(self):
          self.capacity = 1
          self.size = 0
          self.elements = []

     def add(self, val):
          if self.size < self.capacity:
               self.elements.append(val)
               self.size += 1
          elif self.size == self.capacity:
               self.capacity *= 2
               self.elements.append(val)
               self.size += 1
               
     def get(self, i):
          if i >= self.size:
               raise ValueError('Out of bounds')
          else:
               print(self.elements[i])
               return self.elements[i]

     def set(self, i, val):
          if i >= self.size:
               raise ValueError('Out of bounds')
               return False
          else:
               self.elements[i] = val
               return True
          
     def __str__(self):
          print(str(self.elements))
     
     def get_size(self):
          print("Array size => ", self.size)
          return self.size

     def get_capacity(self):
          print("Capacity => ", self.capacity)
          return self.capacity

num = DynamicArray()
num.add(1)
num.add(2)
num.get_size()
num.get_capacity()
num.add(3)
num.get_size()
num.get_capacity()
num.__str__()
num.get(2)
num.set(2, 4)
num.__str__()



