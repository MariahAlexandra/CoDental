from flask import Flask, request, render_template, Response, redirect, url_for
from project import app
# from project.services.EventService import *
# from project.services.VenueService import *

# A simple hello world route to show that the Flask
# app is running properly
# Parameters: none
# Returns: 'Hello, World!'
# Currently runs at: localhost:5000/

@app.route('/')
def rootPage():
    return 'hello, world'

if __name__ == "__main__":
	app.run(debug=False)
