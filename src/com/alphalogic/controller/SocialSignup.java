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
import com.alphalogic.services.Check;
import com.alphalogic.services.Insert;

@WebServlet("/socialsignup")
public class SocialSignup extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public SocialSignup() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		response.setContentType("text/html");
		System.out.println("In Social Sighup");
		String u=request.getParameter("email");
		String n=request.getParameter("name");
		System.out.println("Social Sigma Incoming:::"+u);
		Customer ob= new Customer();
		ob.setEmail(u);
		ob.setFirstName(n);
		ob.setLastName(n);
		ob.setPassword("XXX"+(100*Math.random()));
		RequestDispatcher rd;
		
		if(Check.isPresent(ob)){
			System.out.println("in SS is present");
			/*rd=request.getRequestDispatcher("index.html?res=1");
			rd.include(request, response);*/
			out.println(1);
		}else{
			if(Insert.isInserted(ob)){
				/*rd=request.getRequestDispatcher("index.html?res=2");
				rd.include(request, response);*/
				out.println(-1);
			}else{
				System.out.println("Error While Inserting in Social Signup");
			}
		}
		
		
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
