<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%--Importamos todas las librerias de mysql --%> 
<%@ page import = "java.sql.*" %>  
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%
		//Traemos los datos
		String nombre = request.getParameter("nombre");
		String apellido = request.getParameter("apellido");
		String mail = request.getParameter("mail");
		String cantidad = request.getParameter("cantidad");
		String categoria = request.getParameter("categoria");
		
		
		
	
		
		//Con esto y sacando de abajo "<jsp:include page="ticket.jsp"></jsp:include>" VEO SI OBTENGO LOS DATOS
		//out.println(nombre + apellido + mail + cantidad + categoria);
		
		//Traemos el driver de MySql "conector de la base de datos
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		//creamos la conexion con la BD, a travez de un TryCatch
		try{
			Connection cn = DriverManager.getConnection ("jdbc:mysql://localhost:3306/comprarticket","root","");
			Statement stm = cn.createStatement();
			
			//CONCATENO LA CARGA DE DATOS "mi consulta"
			//stm.executeUpdate("INSERT INTO ticket (nombre,apellido,mail,cantidad,categoria) VALUES ('"+ nombre +"','"+ apellido +"','"+ mail +"','"+ cantidad +"','"+ categoria +"')");
				// Segunda Opcion de carga
				String sentencia = "INSERT INTO ticket (nombre,apellido,mail,cantidad,categoria) VALUES ('"+ nombre +"','"+ apellido +"','"+ mail +"','"+ cantidad +"','"+ categoria +"')";
				stm.executeUpdate(sentencia);
			
			
		} catch(Exception e) {
			out.print("Error al cargar la BD comprarTickets.jsp");
		}
		
		
		
		
		
	
	%>
  
<jsp:include page="ticket.jsp"></jsp:include>

</body>
</html>