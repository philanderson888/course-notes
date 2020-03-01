# Tests - Questions

# Select Items Containing

    /**
         * String names - add all names starting with
         * the letter m to a new List.
         * Please note that names can start with a lower or uppercase letter.
         */
        public List<String> question3(String[] names) {
            
        }

# Fibonacci

[https://www.algoexpert.io/questions/Nth Fibonacci](https://www.algoexpert.io/questions/Nth%20Fibonacci) 

    Given n return the nth number in the Fibonacci sequence
    
    0,1,[(n-2)+(n-1)] 
    ie
    0,1,1,2,3,5,8 etc

# Sum The First 100 Fibonacci Numbers

    /**
         * Extract the odd numbers from the first 100 elements of the
         * Fibonacci sequence and return the sum
         */
        public long question5() {
            
        }

# Find Max Value In Array

    /**
         * Return the highest number in a
         * random array of numbers
         */
        public int question6(int[] numbers) {
            
        }

# Count Words In A String

    /**
         * Given a string of words
         * extract either the full string if it is
         * less than 10 words long or
         * the first 10 words followed by ' ...' if
         * it is longer than 10 words.
         */
        public String question7(String review) {
            // use string builder
        }

# Prime Numbers

    /**
         * Return the highest prime less than 100
         */

# Find Missing Numbers In Sequence

    /**
         * Given an array that stores numbers between
         * 1 and 20, determine what is the highest missing number.
         * <p>
         * if no numbers are missing then return 0;
         */

# Count Word Occurrences

    /**
         * Return the most frequently used word in a string
         */

# Add Items To Dictionary From Array

    /**
         * Add employees held in a two dimensional array into a dictionary, using id as the key
         */
        public Dictionary<Integer, String> question4(String[,] staff) {
            
        }

# Harder Ones

[142 Resources for Mastering Coding Interviews](https://medium.com/better-programming/the-software-engineering-study-guide-bac25b8b61eb)

    import java.util.*;
    
    public class Questions {
    
        /**
         * Write code to swap the values of the 2 parameters, x and y,
         * passed into the method
         *
         * @param x
         * @param y
         */
        public void question1(int x, int y) {
            System.out.println("x = " + x + " and y = " + y);
            int tmp = x;
            x = y;
            y = tmp;
            System.out.println("x now = " + x + " and now y = " + y);
        }
    
        /**
         * Sum the even numbers up to 100 and then return the average for them.
         */
        public double question2() {
            int[] evens = new int[50];
            int j = 0;
            for (int i = 2; i < 100; i++) {
                if (i % 2 == 0) {
                    evens[j] = i;
                    j++;
                }
            }
            double sum = 0;
            for (int element : evens) {
                sum = sum + element;
            }
            return sum / evens.length;
        }
    
        /**
         * String names - add all names starting with
         * the letter m to a new List.
         * Please note that names can start with a lower or uppercase letter.
         */
        public List<String> question3(String[] names) {
            List<String> namesWithM = new ArrayList<>();
            for (String name : names) {
                if (name.substring(0, 1).equalsIgnoreCase("m")) {
                    namesWithM.add(name);
                }
            }
            return namesWithM;
        }
    
        /**
         * Add employees held in a two dimensional array into a hashmap, using id as the key
         */
        public Map<Integer, String> question4(String[][] staff) {
            Map<Integer, String> employees = new HashMap<>();
            for (int i = 0; i < staff.length; i++) {
                String[] employee = staff[i];
                employees.put(Integer.parseInt(employee[0]), employee[1]);
            }
            return employees;
        }
    
        /**
         * Extract the odd numbers from the first 100 elements of the
         * Fibonacci sequence and return the sum
         */
        public long question5() {
            long[] fib = new long[20];
            fib[0] = 0;
            fib[1] = 1;
            long sum = 1;
            for (int i = 2; i < fib.length; i++) {
                fib[i] = fib[i - 2] + fib[i - 1];
                if (fib[i] % 2 != 0) {
                    sum = sum + fib[i];
                }
            }
            return sum;
        }
    
        /**
         * Return the highest number in a
         * random array of numbers
         */
        public int question6(int[] numbers) {
            int highest = 0;
            for (int i = 0; i < numbers.length; i++) {
                if (numbers[i] > highest) {
                    highest = numbers[i];
                }
            }
            return highest;
        }
    
        /**
         * Given a string of words
         * extract either the full string if it is
         * less than 10 words long or
         * the first 10 words followed by ' ...' if
         * it is longer than 10 words.
         */
        public String question7(String review) {
            String[] words = review.split(" ");
            StringBuilder builder = new StringBuilder();
            if (words.length <= 10) {
                return review;
            } else {
                for (int i = 0; i < 10; i++) {
                    builder.append(words[i] + " ");
                }
                builder.append("...");
            }
            return builder.toString();
        }
    
        /**
         * Return the highest prime less than 100
         */
        public int question8() {
            int prime = 0;
            for (prime = 3; prime > 0; prime--) {
                boolean isPrime = true;
                int i = 2;
                while (isPrime && i < Math.sqrt(prime)) {
                    if (prime % i == 0) {
                        isPrime = false;
                    } else {
                        i++;
                    }
                }
                if (isPrime) {
                    return prime;
                }
            }
            return 0;
        }
    
        /**
         * Given an array that stores numbers between
         * 1 and 20, determine what is the highest missing number.
         * <p>
         * if no numbers are missing then return 0;
         */
        public int question9(int[] numbers) {
            Map<Integer, Boolean> nums = new HashMap<>();
            for (int i = 1; i <= 20; i++) {
                nums.put(i, false);
            }
            for (int i : numbers) {
                if (nums.containsKey(i)) {
                    nums.put(i, true);
                }
            }
            for (int i = 20; i > -1; i--) {
                if (nums.get(i) == false) return i;
            }
            return 0;
        }
    
        /**
         * Return the most frequently used word in a string
         */
        public String question10(String text) {
            Map<String, Integer> countOfWords = new HashMap<>();
            String[] words = text.split(" ");
            for (String word : words) {
                word = word.toLowerCase();
                if (!countOfWords.containsKey(word)) {
                    countOfWords.put(word, 1);
                } else {
                    countOfWords.put(word, countOfWords.get(word) + 1);
                }
            }
            String topWord = "";
            int highestCount = 0;
            for (Map.Entry<String, Integer> entry : countOfWords.entrySet()) {
                if (entry.getValue() > highestCount) {
                    topWord = entry.getKey();
                    highestCount = entry.getValue();
                }
            }
            return topWord;
        }