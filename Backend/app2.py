from flask import Flask, request, render_template, Response, redirect, url_for, jsonify 
# from project import app
from questionaire import *
from flask_cors import CORS


app = Flask(__name__)
# from project.services.EventService import *
# from project.services.VenueService import *

# A simple hello world route to show that the Flask
# app is running properly
# Parameters: none
# Returns: 'Hello, World!'
# Currently runs at: localhost:5000/

cors = CORS(app)

@app.route('/')
def rootPage():
    return 'hello, world'

@app.route('/calculator')
def calculator():
    num1 = int(request.args.get('num1'))
    num2 = int(request.args.get('num2'))
    operation = request.args.get('operation')

    result = -1

    if operation == 'multiply':
        result = num1 * num2
    elif operation == 'subtract':
        result = num1 - num2
    elif operation == 'add':
        result = num1 + num2

    return Response(str(result), status=200)

@app.route('/send_data', methods=['POST'])
def send_data():
    points = 0 
    responses = []
    pain = True if request.form['pain'] == 'True' else False 
    pain = q1(pain)
    if pain != -1:
        points += 3
        responses.append(pain) 

    bleeding = True if request.form['bleeding'] == 'True' else False
    bleeding = q2(bleeding)
    if bleeding != -1:
        points += 2 
        responses.append(bleeding)
    
    meds = True if request.form['meds'] == 'True' else False
    meds = q4(meds)
    if meds != -1:
        points += 1
        responses.append(meds)
    
    insurance = True if request.form['insurance'] == 'True' else False 
    insurance = q5(insurance)
    if insurance != -1:
        points += 4
        responses.append(insurance)

    severity = ''

    if points <= 2:
        severity = 'low'
    if points <= 6 and points > 2:
        severity = 'medium'
    if points > 6:
        severity = 'high'
    
    res = {"severity":severity, 'responses':responses}
    return jsonify(res)


if __name__ == "__main__":
	app.run(debug=False)
