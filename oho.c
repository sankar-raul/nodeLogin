#include<stdio.h>
float sum(float num);
int main() {
  float num;                                                      printf("Enter a number : ");
  scanf("%f",&num);
  printf("The sum of N^2/N^3 natural number is %.2f \n",sum(num));
}
float sum(float num) {
  if (num == 0)
    return 0;
  return (num*num) / (num*num*num) + sum(num-1);
}
