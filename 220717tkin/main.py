import sympy as sym
import numpy as np

a=np.array([[0,2],[4,0]])
A = sym.Matrix(a)
r=sym.symbols('r') 
# sym.eyeは単位行列を表す
L = r*sym.eye(2)
D = (A-L).det()
print(sym.solve (D, r))