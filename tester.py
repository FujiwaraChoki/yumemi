import requests

url = 'http://127.0.0.1:5000/api/users'

data = {
    "email": "lolipop66611@gmail.com",
    "password": "123456",
}

r = requests.post(url, json=data)

print(r.text)