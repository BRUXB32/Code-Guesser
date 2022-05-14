import pyautogui

cordenadasX = [200, 22, 117, 161, 56, 81, 151, 30, 102, 160]
cordenadasY = [310, 270, 270, 270, 288, 288, 288, 310, 310, 310]

for x in range(len(cordenadasX)):
    print("Primer for")
    if x != 0:
        pyautogui.moveTo(200, 270)
        pyautogui.doubleClick()
        pyautogui.click()
    pyautogui.moveTo(cordenadasX[x], cordenadasY[x])
    pyautogui.click()
    for j in range(len(cordenadasX)):
        print("Segundo for")
        if j != 0:
            pyautogui.moveTo(200, 270)
            pyautogui.doubleClick()
        pyautogui.moveTo(cordenadasX[j], cordenadasY[j])
        pyautogui.click()
        for q in range(len(cordenadasX)):
            print("Tercer for")
            if q != 0:
                pyautogui.moveTo(200, 270)
                pyautogui.click()
            pyautogui.moveTo(cordenadasX[q], cordenadasY[q])
            pyautogui.click()
            for p in range(len(cordenadasX)):
                print("Cuarto for")
                pyautogui.moveTo(cordenadasX[p], cordenadasY[p])
                pyautogui.click()
                pyautogui.moveTo(200, 270)
                pyautogui.click()





"""
doubleClick
    if x % 4 == 0:
        pyautogui.moveTo(300, 270)
        pyautogui.click()
        pyautogui.moveTo(cordenadasX[x], cordenadasY[x])
        pyautogui.click()
    else:
        pyautogui.moveTo(cordenadasX[x], cordenadasY[x])
        pyautogui.click()
"""







"""
for x in range(len(cordenadasX)):
    pyautogui.moveTo(cordenadasX[x], cordenadasY[x])
    pyautogui.click()
    pyautogui.PAUSE = 0.5

x = int(input("Ingrese un numero: "))

if x % 4 == 0:
    print(str(x) + " es multiplo de 4")
else:
    print(str(x) + " no es multiplo de 4")
"""

#ENTER =
#DELETEALL =
#0 = 200, 310 - pyautogui.moveTo(200, 310)
#1 = 22, 270 - pyautogui.moveTo(22, 270)
#2 = 117, 270 - pyautogui.moveTo(117, 270)
#3 = 161, 270 - pyautogui.moveTo(161, 270)
#4 = 56, 288 - pyautogui.moveTo(56, 288)
#5 = 81, 288 - pyautogui.moveTo(81, 288)
#6 = 151, 288 - pyautogui.moveTo(151, 288)
#7 = 30, 310 - pyautogui.moveTo(30, 310)
#8 = 102, 310 - pyautogui.moveTo(102, 310)
#9 = 160, 310 - pyautogui.moveTo(160, 310)
#pyautogui.moveTo(x, y)
#pyautogui.click()
#pyautogui.PAUSE = 0.5
