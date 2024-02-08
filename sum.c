#include<stdio.h>
int sum(int num);
int main() {
  int num;
  printf("Enter a number : ");
  scanf("%d",&num);
  printf("The sum of %d natural number is %d \n",num,sum(num));
}
int sum(int num) {
  if (num == 0)
    return 0;
  return num + sum(num-1);
}
