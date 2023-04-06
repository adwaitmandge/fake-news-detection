from flask import Flask
from flask_restful import Api, Resource, reqparse, marshal_with, fields

app = Flask(__name__)
app.app_context().push()

api = Api(app)

if __name__ == "__main__":
    app.run(debug=True)