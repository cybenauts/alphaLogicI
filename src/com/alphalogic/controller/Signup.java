package com.alphalogic.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alphalogic.model.Customer;
import com.alphalogic.services.Insert;


@WebServlet("/signup")
public class Signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Signup() {
        super();
    }
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		RequestDispatcher rd;
		System.out.println("In SignUp:::"+request.getParameter("sCustomerEmail")+":::"+request.getParameter("sCustomerRePassword"));
		Customer ob = new Customer();
		ob.setEmail(request.getParameter("sCustomerEmail"));
		ob.setPassword(request.getParameter("sCustomerRePassword"));
		 
		String e=request.getParameter("sCustomerEmail");
		int index = e.indexOf("@");
		ob.setFirstName(request.getParameter("sCustomerEmail").substring(0, index));
		ob.setLastName(" "); //to be filled later
		
		if(Insert.isInserted(ob)){
			/*rd = request.getRequestDispatcher("index.html");
			rd.include(request, response);*/
			out.println(1);
		}
		else{
			/*rd = request.getRequestDispatcher("index.html");
			rd.include(request, response);*/
			out.println(-1);
			
		}
		
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
