import pyqrcode
import png 
from pyqrcode import QRCode
s="https://visionary-paletas-2ee594.netlify.app/"
url=pyqrcode.create(s)
url.svg("myqr.svg",scale=8)
url.png("myqr.png",scale=6)