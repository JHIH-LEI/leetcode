/** head least end new
 * @param {number} capacity
 */

function LRUCache(capacity) {
  const newHead = new CacheNode(0, 0);
  const newEnd = new CacheNode(0, 0);
  this.head = newHead;
  this.end = newEnd;
  newHead.next = newEnd;
  newEnd.pre = newHead;
  this.capacity = capacity;
  this.cache = new Map();
}

function CacheNode(key, value, pre = null, next = null) {
  this.key = key;
  this.value = value;
  this.pre = pre;
  this.next = next;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cache.get(key);
  if (node) {
    this.put(key, node.value);
    return node.value;
  }

  return -1;
};

LRUCache.prototype.remove = function (node) {
  const prevNode = node.pre;
  const nextNode = node.next;
  prevNode.next = nextNode;
  nextNode.pre = prevNode;
  this.cache.delete(node.key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // remove node
    const oldNode = this.cache.get(key);
    this.remove(oldNode);
  } else if (this.cache.size >= this.capacity) {
    // remove least used
    const leastNode = this.head.next;
    this.remove(leastNode);
  }
  // new
  const newNode = new CacheNode(key, value);
  const oldNew = this.end.pre;

  newNode.pre = oldNew;
  newNode.next = this.end;
  oldNew.next = newNode;
  this.end.pre = newNode;
  this.cache.set(key, newNode);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
