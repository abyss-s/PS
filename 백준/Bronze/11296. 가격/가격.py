for i in range(int(input())):
    a,b,c,d=input().split() #price,color,coupon,pay
    a=float(a)
    if b=='R': a*=0.55
    elif b == 'G': a*=0.7
    elif b == 'B': a*=0.8
    elif b == 'Y': a*=0.85
    elif b==  'O' : a*=0.9
    elif b == 'W': a*=0.95

    if c=='C' : a*=0.95 # 추가할인

    if d=='P': print("$%.2f" %a)
    else :
        a*=100
        int(a)
        if a%10 >5: # 6부터반올림
            a=a+10-a%10
        else:
            a-=a%10
        print("$%.2f"% (a/100))