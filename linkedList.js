class SinglyLinkedNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // 1. Add to head
    addToHead(value) {
      const newNode = new SinglyLinkedNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // 2. Remove from head
    removeFromHead() {
      if (this.head === null) {
        return null; // List is empty
      }
      const removedValue = this.head.value;
      this.head = this.head.next;
      return removedValue;
    }
  
    // 3. Add to tail
    addToTail(value) {
      const newNode = new SinglyLinkedNode(value);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // 4. Remove from tail
    removeFromTail() {
      if (this.head === null) {
        return null; // List is empty
      }
      if (this.head.next === null) {
        const removedValue = this.head.value;
        this.head = null;
        return removedValue;
      }
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const removedValue = current.next.value;
      current.next = null;
      return removedValue;
    }
  
    // 5. Read - get value at index
    read(index) {
      let current = this.head;
      let currentIndex = 0;
      while (current !== null) {
        if (currentIndex === index) {
          return current.value;
        }
        current = current.next;
        currentIndex += 1;
      }
      return null; // Index out of bounds
    }
  
    // 6. Add at index
    addAtIndex(index, value) {
      if (index === 0) {
        this.addToHead(value);
        return;
      }
      const newNode = new SinglyLinkedNode(value);
      let current = this.head;
      let currentIndex = 0;
      while (current !== null && currentIndex < index - 1) {
        current = current.next;
        currentIndex += 1;
      }
      if (current === null) {
        return null; // Index out of bounds
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  
    // 7. Remove from index
    removeFromIndex(index) {
      if (index === 0) {
        return this.removeFromHead();
      }
      let current = this.head;
      let currentIndex = 0;
      while (current !== null && currentIndex < index - 1) {
        current = current.next;
        currentIndex += 1;
      }
      if (current === null || current.next === null) {
        return null; // Index out of bounds
      }
      const removedValue = current.next.value;
      current.next = current.next.next;
      return removedValue;
    }
  }
  
  // Example usage:
  const list = new SinglyLinkedList();
  list.addToHead(10);
  list.addToTail(20);
  list.addToTail(30);
  console.log(list.removeFromHead()); // Output: 10
  console.log(list.removeFromTail()); // Output: 30
  list.addAtIndex(1, 25);
  console.log(list.read(1));          // Output: 25
  console.log(list.removeFromIndex(1)); // Output: 25
  