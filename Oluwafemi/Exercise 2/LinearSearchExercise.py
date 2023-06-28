def LinearSearch(list, target):

     target_found = False
     for i in range(len(list)):
          if list[i] == target:
               print(target, " found at position: ", i)
               target_found = True
               
     if not target_found:
          print(target, " not in the list")

LinearSearch([2, 3, 5, 6, 7, 56, 78], 56)
     
