def shortestWordEditPath(source, target, words):
  """
  @param source: str
  @param target: str
  @param words: str[]
  @return: int
  """
  alphabets = 'abcdefghijklmnopqrstuvwxyz'
  wordMap = set(words)
  queue = [[source,0]]
  seen = set([source])


  while queue:
    print(queue)
    word, depth = queue.pop(0)

    if word == target:
      return depth

    for idx in range(len(word)):
      for alphabet in alphabets:
        word2 = list(word)
        word2[idx] = alphabet
        word2 = ''.join(word2)

        if word2 in wordMap and word2 not in seen:
          queue.append([word2,depth+1])
          seen.add(word2)

  return -1        
        
source = "bit"
target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
     
print(shortestWordEditPath(source, target, words))