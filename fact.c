#include<stdio.h>
float sum(float num);
float fact(float num);
int main() {
  float num;
  printf("Enter a number : ");
  scanf("%f",&num);
  printf("The sum of N/N! natural number is %.2f\n",sum(num));
  return 0;
}
float sum(float num) {
  if (num == 0)
    return 0;
  return num/fact(num) + sum(num-1);
}
float fact(float num) {
  if (num == 0)
    return 1;
  return num * fact(num-1);
}
