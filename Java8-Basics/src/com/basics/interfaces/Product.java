package com.basics.interfaces;

interface manufacturing {
	void manufacture();
}

interface sales {
	void sales();
}

public class Product implements manufacturing, sales {

	public static void main(String[] args) {

		Product p = new Product();

		p.sales();
		p.manufacture();

	}

	@Override
	public void sales() {
		System.out.println("Product is sold");

	}

	@Override
	public void manufacture() {
		System.out.println("Product is made");

	}

}
