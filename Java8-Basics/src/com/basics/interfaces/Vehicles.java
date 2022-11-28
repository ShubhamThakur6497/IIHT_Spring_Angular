package com.basics.interfaces;

public class Vehicles {

	public static void main(String[] args) {

		Drivable d1 = new Car();
		Drivable d2 = new Bike();
		Drivable d3 = new Truck();

		d1.driven();
		d2.driven();
		d3.driven();

	}

}

class Car implements Drivable {

	@Override
	public void driven() {
		System.out.println("Car is driven");

	}

}

class Bike implements Drivable {

	@Override
	public void driven() {
		System.out.println("Bike is driven");

	}

}

class Truck implements Drivable {

	@Override
	public void driven() {
		System.out.println("Truck is driven");

	}

}
