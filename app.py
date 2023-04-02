from flask import Flask, render_template, request
import csv

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('template.html')


@app.route('/', methods=['POST'])
def upload_file():
    file = request.files['file']
    if not file:
        return 'No file uploaded.', 400
    try:
        csv_data = csv.reader(file.read().decode('utf-8').splitlines())
        log_data = [list(row) for row in csv_data]
        return render_template('template.html', log_data=log_data)
    except():
        return 'Invalid CSV file format.', 400


if __name__ == '__main__':
    app.run(debug=True)
