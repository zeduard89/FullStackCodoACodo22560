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
		String nombre2 = request.getParameter("nombre2");
		String apellido2 = request.getParameter("apellido2");
		String mail2 = request.getParameter("mail2");
		String texto = request.getParameter("texto");
		//String categoria = request.getParameter("categoria");
		
		
		
	
		
		//Con esto y sacando de abajo "<jsp:include page="ticket.jsp"></jsp:include>" VEO SI OBTENGO LOS DATOS
		//out.println(nombre2 + apellido2 + mail2 + texto);
		
		//Traemos el driver de MySql "conector de la base de datos
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		//creamos la conexion con la BD, a travez de un TryCatch
		try{
			Connection cn = DriverManager.getConnection ("jdbc:mysql://localhost:3306/formulario","root","");
			Statement stm = cn.createStatement();
			
			//CONCATENO LA CARGA DE DATOS "mi consulta"
			//stm.executeUpdate("INSERT INTO ticket (nombre,apellido,mail,cantidad,categoria) VALUES ('"+ nombre +"','"+ apellido +"','"+ mail +"','"+ cantidad +"','"+ categoria +"')");
				// Segunda Opcion de carga
				String sentencia = "INSERT INTO llenarformulario (nombre2,apellido2,mail2,texto) VALUES ('"+ nombre2 +"','"+ apellido2 +"','"+ mail2 +"','"+ texto +"')";
				stm.executeUpdate(sentencia);
				
				
			
			
		} catch(Exception e) {
			out.print("Error al cargar la BD formulario");
		}
		
	
	
	%>
	
	
	<script type="text/javascript">
		  alert("Gracias por su postulación, nos comunicaremos con usted a la brevedad");
			</script>
  
<jsp:include page="index.html"></jsp:include>

</body>
</html>