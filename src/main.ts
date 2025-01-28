class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  size: number = 0;

  add(value: number): void {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  removeAt(index: number): void {
    if (index >= this.size) return;

    // handle head removal
    if (index === 0) {
      this.head = this.head!.next; // Move head to next node
      if (!this.head) { // If list becomes empty clear tail
        this.tail = null;
      }
      this.size--;
      return;
    }

    // Traverse to 1 node before the one we want to remove
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }

    // If the node we want to remove is tail, set current node as tail
    if (current!.next === this.tail) {
      this.tail = current;
    }

    // update current node to skip next node
    current!.next = current!.next!.next;
    this.size--;
  }

  toArray(): number[] {
    const result: number[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

export const processNumbers = (input: number[]): number[] => {
  const list = new LinkedList();

  for (const num of input) {
    if (num < 0) {
      list.add(num);
    } else if (num > 0) {
      list.removeAt(num - 1);
    }
  }

  return list.toArray();
};

// processNumbers([-1, -2, -3, 2]);

// Time complexity: O(n^2)
// Space complexity: O(n)