from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORS yoqish

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    phone = data.get('phone')
    username = data.get('username')

    print("\nYangi konkurs ishtirokchisi:")
    print(f"Telefon: {phone}")
    print(f"Instagram login: {username}")

    return jsonify({"message": "Ma'lumotlar qabul qilindi!"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
