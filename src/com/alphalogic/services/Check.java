package com.alphalogic.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.alphalogic.model.Customer;

public class Check {

	public Check() {
		
	}
	
	public static boolean isPresent(Customer cu){
		boolean flag=false;
		try{
			Connection con=MySqlConnection.getConnection();
			PreparedStatement ps=con.prepareStatement("select email from customer where email=?");
			ps.setString(1, cu.getEmail());
			System.out.println("Checking email in DB:::"+cu.getEmail());
			
			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				flag = true;
			}
		}
		
		catch(Exception e){
			System.out.println("Exception in Check"+e);
		}
		return flag;
		
	}

}
