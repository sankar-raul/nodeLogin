#include<stdio.h>
float sum(float num);
int main() {
  float num;
  printf("Enter a number : ");
  scanf("%f",&num);
  printf("The sum of %.2f/1 natural number is %.2f \n",num,sum(num));
}
float sum(float num) {
  if (num == 0)
    return 0;
  return num/1 + sum(num-1);
}
