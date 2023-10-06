from flask import Flask, jsonify, request
from flask_cors import CORS
 
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config["SECRET_KEY"]='mysec'
 
@app.route("/")
def index():
    return jsonify({"msg":"Landing Page"})
 
@app.route("/convert", methods=["POST"])
def convert_Imperial_to_SI():
    distance = request.json.get("distance")
    mass = request.json.get("mass")
    temperature = request.json.get("temperature")
 
    c_distance = 0.621*distance
    c_mass = 2.205*mass
    c_temperature = (temperature * (9/5)) + 32
 
    converted_data = {
        "distance":{
            "unit":"miles",
            "measurement":c_distance
        },
        "mass":{
            "unit":"pounds",
            "measurement":c_mass
        },
        "temperature":{
            "unit":"F",
            "measurement":c_temperature
        }
    }

    return jsonify({"converted_data":converted_data})

if __name__ == "__main__":
    app.run(debug=True)