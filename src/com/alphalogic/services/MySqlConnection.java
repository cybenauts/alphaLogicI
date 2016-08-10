package com.alphalogic.services;

import java.sql.Connection;
import java.sql.DriverManager;

	public class MySqlConnection {

		public static Connection getConnection(){
			Connection con = null;
			try{
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/alphalogic","root","matrix78692110");
			}
			catch(Exception e){
				System.out.println("Eception in "+new MySqlConnection().getClass()+" "+e);
			}
			return con;
		
		}
	}