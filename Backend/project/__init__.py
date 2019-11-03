from flask import Flask

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='../templates')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

# insert model import statements here
# from .models import Venue
# from .models import Event
# from .models import Artist

db.create_all()
