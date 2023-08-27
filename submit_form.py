#!/usr/bin/env python3
import cgi
import mysql.connector

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Sunny1301",
    database="temp1"
)

# Create a cursor to interact with the database
cursor = db.cursor()

# Get form data
form = cgi.FieldStorage()
name = form.getvalue('name')
phone = form.getvalue('phone')
designation = form.getvalue('designation')

# Insert data into MySQL database
insert_query = "INSERT INTO contacts (name, phone, designation) VALUES (%s, %s, %s)"
cursor.execute(insert_query, (name, phone, designation))
db.commit()

# Close the database connection
db.close()

# Print a success message
print("Content-type: text/html\n")
print("<html><body>")
print("<h1>Data submitted successfully!</h1>")
print(f"<p>Name: {name}</p>")
print(f"<p>Phone: {phone}</p>")
print(f"<p>Designation: {designation}</p>")
print("</body></html>")
