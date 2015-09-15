package com.crunchify.controller;

import java.io.Serializable;

public class Reservation implements Serializable {

	private static final long serialVersionUID = 1L;
	private String name;
	private String date;
	private int number;
	private int size;
	
	public Reservation() {
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String _name) {
		name = _name;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String _date) {
		date = _date;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int _number) {
		number = _number;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int _size) {
		size = _size;
	}
}
