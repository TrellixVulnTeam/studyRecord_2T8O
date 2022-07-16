import qrcode

img = qrcode.make('https://withuto.web.app/')
img.save('qrcode_test.png')