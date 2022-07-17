import matplotlib.pyplot as plt
from matplotlib.ticker import *
from matplotlib import rc

#reference: http://oversleptabit.com/?p=556

rc('text', usetex=True)

# drawing area: w x h = 16 x 25 imaged A4 paper
xmin=0
xmax=16
ymin=0
ymax=25
dh=1.5 # height of one row
A=[]   # actural y-axis
B=[]   # grid number in y-axis
for i in range(0,int(ymax//dh)+1):
    s='{0:.1f}'.format(dh*i)
    A=A+[float(s)]
    B=B+[i]

fnameF='fig_tex_test.pdf'
fig = plt.figure()
ax1=plt.subplot(111)
ax1 = plt.gca()
ax1.set_xlim([xmin,xmax])
ax1.set_ylim([ymax,ymin])
aspect = (abs(ymax-ymin))/(abs(xmax-xmin))*abs(ax1.get_xlim()[1] - ax1.get_xlim()[0]) / abs(ax1.get_ylim()[1] - ax1.get_ylim()[0])
ax1.set_aspect(aspect)
#plt.axis('off')
ax1.tick_params(labelsize=6)
ax1.xaxis.set_major_locator(MultipleLocator(1))
ax1.yaxis.set_major_locator(MultipleLocator(dh))
plt.yticks(A,B)
plt.grid(which='both',lw=0.3, color='#cccccc',linestyle='-')

############################################
iis=1
title='Equations'
text01='(1)   '+r'$\thickmuskip=0mu \medmuskip=0mu \thinmuskip=0mu \displaystyle \int\int\int_V\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dx dy dz=\int\int_S(P dy dz+Q dz dx+R dx dy)$'
text02='(2)   '+r'$\thickmuskip=0mu \medmuskip=0mu \thinmuskip=0mu \displaystyle f(x)=\frac{a_0}{2}+\sum_{n=1}^{+\infty}\left(a_n\cos\frac{n\pi x}{\ell}+b_n\sin\frac{n\pi x}{\ell}\right)$'
text03='(3)   '+r'$\displaystyle f(x)=\frac{a_0}{2}+\sum_{n=1}^{+\infty}\left(a_n\cos\frac{n\pi x}{\ell}+b_n\sin\frac{n\pi x}{\ell}\right)$'
text04='(4)   '+r'$\displaystyle a_0=\frac{1}{\ell}\int_{-\ell}^{\ell}f(x) dx$'
text05='(5)   '+r'$\displaystyle a_n=\frac{1}{\ell}\int_{-\ell}^{\ell}f(x)\cos\frac{n\pi x}{\ell}dx \qquad (n=1,2,3, \cdots)$'
text06='(6)   '+r'$\displaystyle b_n=\frac{1}{\ell}\int_{-\ell}^{\ell}f(x)\sin\frac{n\pi x}{\ell}dx \qquad (n=1,2,3, \cdots)$'
text07='(7)   '+r'$\displaystyle e^x=1+\frac{x}{1!}+\cdots+\frac{x^{n-1}}{(n-1)!}+\frac{e^{\theta x}}{n!}x^n \qquad (0<\theta<1)$'
text08='(8)   '+r'$\displaystyle \lim_{n\to\pm\infty}\left(1+\frac{1}{x}\right)^x=e$'
text09='(9)   '+r'$\displaystyle \cosh z=\frac{e^z+e^{-z}}{2} \qquad \sinh z=\frac{e^z-e^{-z}}{2}$'
text10='(10)  '+r'$\displaystyle y=a\cdot x+b$'
text11='(11)  '+r'$\displaystyle a=\frac{n \sum xy-\sum x\cdot\sum y}{n \sum x^2-(\sum x)^2} \qquad \qquad b=\frac{\sum x^2\cdot \sum y-\sum x\cdot\sum xy}{n \sum x^2-(\sum x)^2}$'
text12='(12)  '+r'$\thickmuskip=0mu \medmuskip=0mu \thinmuskip=0mu \displaystyle r=\frac{n \sum xy-\sum x\cdot\sum y}{\sqrt{[n \sum x^2-(\sum x)^2]\cdot [n \sum y^2-(\sum y)^2]}}$'
text13='(13)  '+r'$\displaystyle r=\frac{n \sum xy-\sum x\cdot\sum y}{\sqrt{[n \sum x^2-(\sum x)^2]\cdot [n \sum y^2-(\sum y)^2]}}$'
text14='(14)  '+r'$\displaystyle x=x_m+\sigma_x\cdot r \cdot\cos\theta \qquad y=y_m+\sigma_y\cdot r \cdot\sin\theta$'
text15='(15)  '+r'$\displaystyle r=\sqrt{\frac{-2(1-\rho^2)\cdot\ln(1-p)}{1-2\rho\cdot\sin\theta\cdot\cos\theta}}$'


xv0=0
fsize=4 # fontsize
xs=xv0+1; ys=iis*dh- 0.5*dh; plt.text(xs,ys,title,rotation=0,ha='left',va='center',fontsize=fsize,fontweight='bold')
xs=xv0+1; ys=iis*dh+ 0.5*dh; plt.text(xs,ys,text01,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+ 1.5*dh; plt.text(xs,ys,text02,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+ 2.5*dh; plt.text(xs,ys,text03,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+2; ys=iis*dh+ 3.5*dh; plt.text(xs,ys,text04,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+2; ys=iis*dh+ 4.5*dh; plt.text(xs,ys,text05,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+2; ys=iis*dh+ 5.5*dh; plt.text(xs,ys,text06,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+ 6.5*dh; plt.text(xs,ys,text07,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+ 7.5*dh; plt.text(xs,ys,text08,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+ 8.5*dh; plt.text(xs,ys,text09,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+ 9.5*dh; plt.text(xs,ys,text10,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+10.5*dh; plt.text(xs,ys,text11,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+11.5*dh; plt.text(xs,ys,text12,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+12.5*dh; plt.text(xs,ys,text13,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+13.5*dh; plt.text(xs,ys,text14,rotation=0,ha='left',va='center',fontsize=fsize)
xs=xv0+1; ys=iis*dh+14.5*dh; plt.text(xs,ys,text15,rotation=0,ha='left',va='center',fontsize=fsize)
############################################

#plt.savefig(fnameF, dpi=200, bbox_inches="tight", pad_inches=0.2)
plt.show(fnameF)
#plt.show()