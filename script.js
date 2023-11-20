
let stackEasy = [{
   question:'Implement two stacks in an Array',
   company:' 24*7 Innovation Labs Microsoft Samsung Snapdeal',
   link:'https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article',
    level:'red',
  solution:`
class twoStacks
{
    int arr[];
    int size;
    int top1, top2;
    twoStacks()
    {
        size = 100; 
        arr = new int[100]; 
        top1 = -1; 
        top2 = size;
    }
    //Function to push an integer into the stack1.
    void push1(int x)
   
    {
        
        if(top1 < top2-1){
      arr[++top1] = x;
        }
    }
    //Function to push an integer into the stack2.
    void push2(int x)
    {
        if(top1 <top2-1){
       arr[--top2] = x;
        }
    }
    //Function to remove an element from top of the stack1.
    int pop1()
    {
       
        if(top1>=0){
        int elem = arr[top1];
        top1--;
        return elem;
        }
        else{
            return -1;
        }
   
    }
    //Function to remove an element from top of the stack2.
    int pop2()
    {
        if(top2 < size){
        int elem = arr[top2];
        top2++;
        return elem;
        }
        else{
            return -1;
        }
       
        
    }
  
}`
 },
  
                  {
                    question:'Evaluation of Postfix Expression',
                    company:'Amazon + Google + Facebook',
                    link:'https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article',
    level:'red',
                    solution : `

                    class Solution
                    {
                        //Function to evaluate a postfix expression.
                        public static int evaluatePostFix(String s)
                        {
                            // Your code here
                            Stack<Integer>Stack = new Stack<>();
                                for(int i = 0;i<s.length();i++){
                              char c = s.charAt(i);
                              if(c != '*' && c != '+' && c != '-' && c != '/'){
                              Stack.push(c - '0');
                              }
                              else{
                                  int o2 = Stack.pop();
                                  int o1 = Stack.pop();

                                  switch (c) {
                                    case '+':
                                        Stack.push(o1 + o2);
                                        break;
                                    case '-':
                                        Stack.push(o1 - o2);
                                        break;
                                    case '*':
                                        Stack.push(o1 * o2);
                                        break;
                                    case '/':
                                        Stack.push(o1 / o2);
                                        break;
                                    }
                              }
                              }
                              int ans = Stack.pop();
                              return ans;
                        }
                    }
                    
                    
                    `
                  },
                  {
                    question:'Implement Stack using Queues',


                  company:'Facebook',
                    link:'https://leetcode.com/problems/implement-stack-using-queues/description/',
    level:'red',
      solution:`
      
      class MyStack {
       Queue<Integer>q1;
        Queue<Integer>q2;

          public MyStack() {
             q1 = new LinkedList<>();
             q2 = new LinkedList<>();


          }

          public void push(int x) {
              q1.add(x);
          }

          public int pop() {
              while(q1.size() > 1){
                  q2.add(q1.remove());
              }
              int element = q1.remove();
              Queue<Integer>Temp = q1;
              q1 = q2;
              q2 = Temp;
              return element;

          }

          public int top() {
              while(q1.size() > 1){
                  q2.add(q1.remove());
              }
              int element = q1.remove();
              q2.add(element);
              Queue<Integer>Temp = q1;
              q1 = q2;
              q2 = Temp;
              return element;

          }

          public boolean empty() {
              return q1.isEmpty();
          }
      }

     
      
      
      `
                   
                  },
                   {
                    question:'Queue Reversal',
                      company:'Amazon + Morgain Stanley',
                link:'https://practice.geeksforgeeks.org/problems/queue-reversal/1'
                     ,
    level:'red',
      solution:`

      class GfG{
          //Function to reverse the queue.
          public Queue<Integer> rev(Queue<Integer> q){
              //add code here.
          Stack<Integer>s = new Stack<>();

              while(!q.isEmpty()){
                 s.add(q.remove());
             }
             while(!s.isEmpty()){
                 q.add(s.pop());
             }

             return q;
          }
      }
      
      
      `
                  },
                  {
                    question:'Implement Stack Queue using Deque',
                    company:'Microsoft +Atlassian',
                    link:'https://www.geeksforgeeks.org/implement-stack-queue-using-deque/',
    level:'red',
                  },
                 {
                    question:'Reverse first k elements of queue',
                   company:'Microsoft + Amdocs',
          link:'https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1',
    level:'red',
    solution:`
    

    class GfG {
        // Function to reverse first k elements of a queue.
        public Queue<Integer> modifyQueue(Queue<Integer> q, int k) {
            // add code here.
            int i = 0;
            Stack<Integer>s = new Stack<>();
           while(i != k){
               s.push(q.remove());
               i++;
           }
           Queue<Integer>nQ = new LinkedList<Integer>();
           while(!s.isEmpty()){
               nQ.add(s.pop());
           }
            while(!q.isEmpty()){
               nQ.add(q.remove());
           }

           return nQ;
        }
    }
    
    
    `
                  },

  {
    question: "Design Stack with Middle Operation",
     company: "Microsoft + Amdocs",
    level:'yellow',
  },
  {
    question: "Infix to Postfix",
     company: "MaQ Software",
     level:'yellow',
    
  },
  {
    question: "Design and Implement Special Stack",
     company: "Amazon + Samsung + Paytm + Vmware inc",
     level:'yellow',
    link: 'https://practice.geeksforgeeks.org/problems/special-stack/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article'  ,
    solution: `
    class GfG{
      public void push(int a,Stack<Integer> s)
      {
          //add code here.
          s.add(a);
      }
      public int pop(Stack<Integer> s)
            {
                //add code here.
                if(isEmpty(s)){
                    return -1;
                }
               return s.pop();
      }
      public int min(Stack<Integer> s)
            {
               //add code here.
               if(isEmpty(s)){
                   return -1;
               }
               int min = Integer.MAX_VALUE;
               while(!isEmpty(s)){
                   int popedValue = s.pop();
                   if(popedValue < min){
                       min = popedValue;
                   }
               }
               return min;
      }
      public boolean isFull(Stack<Integer>s, int n)
            {
               //add code here.
              if(s.size() >= n){
                  return true;
              }

              return false;
      }
      public boolean isEmpty(Stack<Integer>s)
            {
               //add code here.
               if(s.size() == 0){
                   return true;
               }
               return false;
      }
    }
    
    
    
    `
  },
  {
    question: "Longest Valid String",
     company: "Amazon Google Microsoft Visa Goldman Sachs",
     level:'yellow',
  },
  {
    question: "Find if an expression has duplicate parenthesis or not",
    company: "Google Microsoft",
     level:'yellow',
  },
  {
    question: "Stack permutations check if an array is stack permutation of another",
        company: "Flipkart Oracle OYO Rooms Snapdeal Walmart Yatra.com Microsoft Google",
     level:'yellow',

  },
  {
    question: "Count natural numbers whose permutation greater number",
    company: "Visa",
     level:'yellow',
  },
  {
    question: "Sort a stack using Recursion",
     company: "Amazon",
        company: "Amazon Goldman Sachs IBM Intuit Kuliza Yahoo Microsoft",
     level:'yellow',

  },
  {
    question: "Queue based approach for the first non-repeating character in a stream",
    company: "Microsoft Flipkart",
     level:'yellow',
  },
  {
    question: "The Celebrity Problem",
     company: "Google + Visa + Apple",
     level:'yellow',
  },
  {
    question: "Next larger Element",
    company: "Visa",
     level:'yellow',
  },
  {
    question: "Distance of nearest cell",
      company: "Flipkar + Facebook",
     level:'yellow',
  },
  {
    question: "Rotten-oranges",
    company: "Facebook",
     level:'yellow',
  },
  {
    question: "Next smaller element",
    company: "Codenation",
     level:'yellow',
  },
  {
    question: "Circular-tour",
    company: "Codenation Flipkart",
     level:'yellow',
  },


                ];

document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here

  function setList(data,index) {
    const serializedSolution = JSON.stringify(stackEasy[index].solution);
    let li = document.createElement('li');
    li.classList.add('contaniner', 'border-bottom', 'border-bottom-1','text-sm');
    let div = document.createElement('div');
    div.classList.add('d-flex', 'w-full', 'justify-content-between', 'align-items-center','mb-3','mt-3');
    div.innerHTML = `
    
      <div>
        <h6 style="color:${data.level};">${data.question}</h6>
      </div>
      <div>
        <p>${data.company}</p>
      </div>
      <div>
      <a href="${data.link}" <button class="btn btn-outline-danger">solve</button></a>
     <a href="./solution.html?solution=${encodeURIComponent(serializedSolution)}"  <button class="btn btn-outline-primary" id="solution">Solution</button></a>
      </div>
      
      </div>
     
    `;
    li.append(div);
    let stackList = document.getElementById('stackList');
    stackList.appendChild(li);
  }

 stackEasy.map((data,index)=>{
   setList(data,index);
 })
});

