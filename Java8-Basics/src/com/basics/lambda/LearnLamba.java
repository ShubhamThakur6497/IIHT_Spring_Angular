package com.basics.lambda;

public class LearnLamba {

	public static void main(String args[]) {

		System.out.println("Hello world");

		LearnLamba learn1 = new LearnLamba();

		MathOperation add = (Integer num1, Integer num2) -> num1 + num2;

		MathOperation sub = (Integer num1, Integer num2) -> num1 - num2;

		MathOperation div = (Integer num1, Integer num2) -> num1 / num2;

		MathOperation mul = (Integer num1, Integer num2) -> num1 * num2;
		
		
		System.out.println("Addition of 100 and 50 is : " + add.Operation(100, 50));
		System.out.println("Subtraction of 100 and 50 is : " + sub.Operation(100, 50));
		System.out.println("Division of 100 and 50 is : " + div.Operation(100, 50));
		System.out.println("multiplication of 100 and 50 is : " + mul.Operation(100, 50));
		
		
		

	}

}
