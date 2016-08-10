package com.alphalogic.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.alphalogic.model.Customer;
import com.alphalogic.services.MySqlConnection;


	public class Authorize {

		public static boolean isAuthorize(Customer cus)
		{
			boolean flag = false;
			String u = cus.getEmail();
			String p = cus.getPassword();
			String n=cus.getPhoneNo();
		try{
			Connection con = MySqlConnection.getConnection();
			PreparedStatement ps = con.prepareStatement("select email,password from customer where email=? and password =?");
			ps.setString(1,u);
			ps.setString(2,p);
			ResultSet rs = ps.executeQuery();
				if(rs.next()){
					System.out.println("User Authorized:"+flag);
					flag = true;
				}
			}
			catch(Exception e){
				System.out.println("Exception in "+new Authorize().getClass()+" "+e);
			}

		return flag;
			
		}
	}
