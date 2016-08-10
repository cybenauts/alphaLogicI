package com.alphalogic.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.alphalogic.model.Customer;
import com.alphalogic.services.Authorize;


@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public Login() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		
		String u=request.getParameter("lCustomerEmail");
		String p=request.getParameter("lCustomerPassword");
		System.out.println("In Login:::"+u+":::"+p);
		Customer ob= new Customer();
		ob.setEmail(u);
		ob.setPassword(p);
		
		RequestDispatcher rd;
		
		if(Authorize.isAuthorize(ob)){
			//creating session
			/*HttpSession session = request.getSession();
			session.setAttribute("username", ob.getFirstName());*/
			//retriving session
			//String un = (String)session.getAttribute("username");
			/*rd=request.getRequestDispatcher("index.html");
			rd.include(request, response);*/
			out.println(1);
		}else{
			/*rd=request.getRequestDispatcher("index.html");
			rd.include(request, response);*/
			out.println(-1);
			
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request,response);
	}

}
