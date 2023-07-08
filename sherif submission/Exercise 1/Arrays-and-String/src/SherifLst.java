public class SherifLst implements Lst {

    private Object[] array;
    private int numberOfElementsInList;

    public SherifLst(){
        array = new Object[1];
        numberOfElementsInList = 0;
    }

    @Override
    public void add(Object e) {
        boolean outOfRange = numberOfElementsInList == array.length;

        if (outOfRange){
            resize();
        }
        array[numberOfElementsInList] = e;
        ++numberOfElementsInList;
    }

    private void resize() {
        Object[] tempArray = array;

        array = new Object[tempArray.length + tempArray.length];

        for (int i = 0; i < tempArray.length; i++){
            array[i] = tempArray[i];
        }
    }

    @Override
    public Object get(int index) {
        validateIndex(index);
        return array[index];
    }

    private void validateIndex(int index) {
        if (index > size()){
            throw new IndexOutOfBoundsException("Out of Bound");
        }
    }

    @Override
    public boolean set(int index, Object e) {
        validateIndex(index);
        if (index <= numberOfElementsInList){
            array[index] = e;
            return true;
        }
        return false;
    }

    @Override
    public int size() {
        return numberOfElementsInList;
    }

    @Override
    public int capacity() {
        return array.length;
    }
}
