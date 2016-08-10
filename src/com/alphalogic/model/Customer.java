package com.alphalogic.model;

public class Customer {
	int cId;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNo;
	private String password;
	public Customer() {
		super();
	}
	public Customer(int cId, String firstName, String lastName, String email, String phoneNo, String password) {
		super();
		this.cId = cId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNo = phoneNo;
		this.password = password;
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
