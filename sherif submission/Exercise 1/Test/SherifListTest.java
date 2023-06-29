import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class SherifListTest {
    SherifLst lst;
    @BeforeEach
    void setUp(){
        lst = new SherifLst();
    }

    @Test
    void add(){
        lst.add(1);
        assertEquals(1, lst.size());
        assertEquals(1, lst.capacity());
    }

    @Test
    void addTwoValues(){
        lst.add(1);
        lst.add(2);
        assertEquals(2, lst.size());
        assertEquals(2, lst.capacity());
    }

    @Test
    void addTestThree(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        assertEquals(3, lst.size());
        assertEquals(4, lst.capacity());
    }

    @Test
    void addTestFour(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        lst.add(4);
        assertEquals(4, lst.size());
        assertEquals(4, lst.capacity());
    }
    @Test
    void addTestFive(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        lst.add(4);
        lst.add(5);
        assertEquals(5, lst.size());
        assertEquals(8, lst.capacity());
    }
    @Test
    void testGet(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        lst.add(4);
        lst.add(5);

        Object found = lst.get(1);

        assertEquals(2, found);
    }

    @Test
    void testSetReturnsTrue(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        lst.add(4);
        lst.add(5);

        boolean found = lst.set(1, 200);


        assertTrue(found);
    }

    @Test
    void testGetReturnsValue(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        lst.add(4);
        lst.add(5);

        boolean found = lst.set(1, 200);

        assertEquals(200, lst.get(1));
    }

    @Test
    void testGetIndexOutOfRangeThrowsException(){
        lst.add(1);
        lst.add(2);
        lst.add(3);
        lst.add(4);
        lst.add(5);

        assertThrows(IndexOutOfBoundsException.class, ()-> lst.get(7));
    }

    @Test
    void testSetIndexOutOfRangeThrowsException(){
        lst.add(1);
        lst.add(2);


        assertThrows(IndexOutOfBoundsException.class, ()-> lst.set(8, 40));
    }

}
