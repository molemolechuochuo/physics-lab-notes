# 绰绰的物理实验室
#### **Derivation of the Aharonov-Bohm Phase**

The Aharonov-Bohm (AB) effect demonstrates that a charged particle is affected by the vector potential $\mathbf{A}$ even in regions where the magnetic field $\mathbf{B}$ is zero.

Consider a particle moving along a path $\gamma$ in a region where $\mathbf{B} = \nabla \times \mathbf{A} = 0$, but $\mathbf{A} \neq 0$. The Schrödinger equation can be solved by making the ansatz:

$$\psi(\mathbf{r}, t) = \psi_0(\mathbf{r}, t) \exp\left( \frac{iq}{\hbar} \int_{\mathbf{r}_0}^{\mathbf{r}} \mathbf{A}(\mathbf{r}') \cdot d\mathbf{l}' \right)$$

where $\psi_0$ is the wavefunction in the absence of the vector potential ($\mathbf{A}=0$).

Substituting this ansatz into the Hamiltonian, the extra phase factor generates terms that exactly cancel the $\mathbf{A}$-dependent terms in the kinetic energy operator, verifying that this ansatz is indeed the solution.

The phase difference accumulated by the particle traveling along two different paths (Path 1 and Path 2) around a magnetic flux region is:

$$\Delta \varphi_{AB} = \frac{q}{\hbar} \left( \int_{\text{Path } 1} \mathbf{A} \cdot d\mathbf{l} - \int_{\text{Path } 2} \mathbf{A} \cdot d\mathbf{l} \right) = \frac{q}{\hbar} \oint \mathbf{A} \cdot d\mathbf{l}$$

Using Stokes' theorem, the closed loop integral of the vector potential is equal to the magnetic flux $\Phi_B$ enclosed by the paths:

$$\Delta \varphi_{AB} = \frac{q}{\hbar} \Phi_B = 2\pi \frac{\Phi_B}{\Phi_0}$$

