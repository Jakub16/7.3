from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'database'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'test'
app.config['MYSQL_DB'] = 'project'

mysql = MySQL(app)

@app.route('/cars', methods=['GET'])
def getCars():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Car")
    data = cur.fetchall()
    cur.close()
    return jsonify({'data': data, 'service': 'flask'})

@app.route('/carsByYear', methods=['GET'])
def getCarsByYear():
    year = request.args.get('year')
    if year:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM Car WHERE year=%s", (year,))
        data = cur.fetchall()
        cur.close()
        return jsonify(data)
    else:
        return jsonify({'error': 'Please provide a year parameter'}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
