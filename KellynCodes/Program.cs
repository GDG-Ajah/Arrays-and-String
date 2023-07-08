IDynamicArrary<int> dynamicArray = new DynamicArray<int>();
Console.WriteLine($"Count: {dynamicArray.Add(5)}");
Console.WriteLine($"Capacity: {dynamicArray.Capacity()}");
Console.WriteLine($"Size: {dynamicArray.Size()}");
Console.WriteLine($"Count: {dynamicArray.Add(3)}");
Console.WriteLine($"Count: {dynamicArray.Add(3)}");
Console.WriteLine($"Count: {dynamicArray.Add(3)}");
Console.WriteLine($"Count: {dynamicArray.Add(3)}");
Console.WriteLine($"Count: {dynamicArray.Add(3)}");
Console.WriteLine($"Capacity: {dynamicArray.Capacity()}");
Console.WriteLine($"Size: {dynamicArray.Size()}");
dynamicArray.Set(0, 6);

