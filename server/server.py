from flask import Flask,request, jsonify
from flask_cors import CORS

from find_movies import find_movies

app = Flask(__name__)
CORS(app) 

@app.route("/",methods=["GET"])
def home():
    return "Hello, this is a GET request!"

@app.route("/getmovies/<movie>",methods=["GET"])
def getMovie(movie):
    result = find_movies(movie)
    if result:
        return jsonify({
            "success":True,
            "movies":result
        })
    else:
        return jsonify({
            "success":False
        })

if __name__ =="__main__":
    app.run(debug=True)