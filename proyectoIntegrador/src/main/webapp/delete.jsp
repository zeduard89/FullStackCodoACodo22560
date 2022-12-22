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

	<%	//Vamos a trabajar con la actualizacion de un campo "alta"
		//Traemos los datos
		
		
		
		//Traemos el driver de MySql "conector de la base de datos
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		//creamos la conexion con la BD, a travez de un TryCatch
		try{
			Connection cn = DriverManager.getConnection ("jdbc:mysql://localhost:3306/comprarticket","root","");
			
			Statement stm = cn.createStatement();
			
			//"consulta para obtener el ultro registro ingresado, ME GUIA ID"
			ResultSet rsId = stm.executeQuery("SELECT MAX(id) FROM ticket");

			
			
			//actualizamos TIKET-->campo alta, atravez del id-->del ultimo valor ingresado"
			while(rsId.next()){

				int eid = rsId.getInt(1); //genero la variable "eid", y le ingreso los datos obtenidos
				int valor = 0;

				//Elijo modificar solo 1 valor, en este caso ALTA
				String consulta = "UPDATE `ticket` SET alta= "+ valor +" WHERE id = "+ eid +" ";
				stm.executeUpdate(consulta);

			}
			
			
		}catch(Exception e) {
			out.print("Error al cargar la BD DELETE");
		}
		
		
		
	
	%>
<!-- Regreso a la pagina mencionada -->
<jsp:include page="comprar-tickets.html"></jsp:include>



</body>
</html>