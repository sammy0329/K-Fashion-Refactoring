import requests

url = 'http://192.168.0.5:8000/image/'

files = {'image': open('./test.png', 'rb')}

response = requests.get(url, files=files)

print(files)